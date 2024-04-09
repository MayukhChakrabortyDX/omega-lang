//The most fundamental definitions are stored here. All the basic definition required to build
//an application using Omega

import { GlobalAttributes, NativeComponentIndex } from "./type"

/**
 * This part defines the application-specific properties, some of which are global
 * and some of which are not. Generally speaking, a component here takes this property
 */
export type OmegaProperty = {

    children?: OmegaComponent[],
    child?: OmegaComponent,
    style?: {
        [P in keyof Partial<CSSStyleDeclaration>]: string | Dynamic<string>
    },
    key?: number, //must be unique for tree-diffs.
    __driver__?: any

} & Partial<GlobalAttributes>

export class OmegaComponent {

    name: NativeComponentIndex
    properties: OmegaProperty

    /**
     * The constructor will accept all sorts of properties, but it is the responsibility of the
     * components to actually implement certail attributes to only certain elements
     */
    constructor(name: NativeComponentIndex, properties: OmegaProperty ) {

        this.name = name
        this.properties = properties

    }

}

export class State<T> {

    value: T
    updateList:((prev: T, newv: T) => any)[] = []

    constructor(initial: T) {

        this.value = initial

    }

    get(): T {
    
        return this.value
    
    }

    set(value: T) {

        this.updateList.forEach(fx => fx(this.value, value))
        this.value = value

    }

    update(callback: (prev: T) => T) {

        const value = callback(this.value)

        this.updateList.forEach(fx => fx(this.value, value))
        this.value = value

    }

    onchange(fx: (prev: T, newv: T) => any): number {

        this.updateList.push(fx)
        return this.updateList.length - 1

    }

}

export class DynamicLoop<T> extends OmegaComponent {

    dynamic: {
        callback: () => T[],
        states: State<any> []
    }

    constructor( callback: () => T[], ...states: State<any>[] ) {

        super(NativeComponentIndex.__dynamic_loop__, {})
        this.dynamic = {
            callback, states
        }

    }

}

export class Dynamic<T> extends OmegaComponent {

    dynamic: {
        callback: () => T,
        states: State<any>[]
    }

    constructor( callback: () => T, ...states: State<any>[] ) {

        super(NativeComponentIndex.__dynamic__, {})
        this.dynamic = {
            callback,
            states
        }

    }

}