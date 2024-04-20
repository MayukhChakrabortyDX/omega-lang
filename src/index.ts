//The most fundamental definitions are stored here. All the basic definition required to build
//an application using Omega

import { GlobalAttributes, NativeComponentIndex } from "./type"

/**
 * This part defines the application-specific properties, some of which are global
 * and some of which are not. Generally speaking, a component here takes this property
 */
export type OmegaProperty = {

    __driver__?: any,
    children?: OmegaComponent[],
    child?: OmegaComponent,
    style?: {
        [P in keyof Partial<CSSStyleDeclaration>]: String | string | Dynamic<String | string>
    } | Dynamic<{
        [P in keyof Partial<CSSStyleDeclaration>]: String | string
    }>,
    reference?: State<any>,
    create?: () => any,
    destroy?: () => any

} & Partial<GlobalAttributes>

export class OmegaComponent {

    name: NativeComponentIndex
    properties: OmegaProperty

    /**
     * The constructor will accept all sorts of properties, but it is the responsibility of the
     * components to actually implement certail attributes to only certain elements
     */
    constructor(name: NativeComponentIndex, properties: OmegaProperty) {

        this.name = name
        this.properties = properties

    }

}

export class State<T> {

    value: T
    updateList: ((prev: T, newv: T) => any)[] = []

    constructor(initial: T) {

        this.value = initial

    }

    get(): T {

        return this.value

    }

    set(value: T) {

        const prev = this.value
        this.value = value
        this.updateList.forEach(fx => fx(prev, value))

    }

    update(callback: (prev: T) => T) {

        const value = callback(this.value)

        this.value = value
        this.updateList.forEach(fx => fx(this.value, value))

    }

    /**
     * Listens for changes, and calls whenever a change occurs.
     * @param fx 
     * @returns 
     */
    listen(fx: (prev: T, newv: T) => any): number {

        this.updateList.push(fx)
        return this.updateList.length - 1

    }

}

export class Dynamic<T> extends OmegaComponent {

    dynamic: {
        callback: () => T,
        states: State<any>[]
    }

    constructor(callback: () => T, ...states: State<any>[]) {

        super(NativeComponentIndex.__dynamic__, {})
        this.dynamic = {
            callback,
            states
        }

    }

}