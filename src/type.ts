//all the types for a component.

import { Dynamic } from "./index"

//enums for specific components
export enum NativeComponentIndex {
 
    //built-ins and must-defined
        __driver__,
        __text__,
        __fragment__,
        __dynamic__,
        __dynamic_loop__,

    //components
        //layouts
        ColumnView,
        RowView,
        GridView,
        View,

        //inputs
        Link,
        Button,
        TextInput,
        TextAreaInput,
        NumberInput,
        EmailInput,
        PasswordInput,
        FileInput,
        Checkbox,
        Dropdown,
        DropdownItem,
        Date,
        Time,
        DateTime,
        Color,

        //content
        TextBox,
        BreakLine,
        HorizontalRule,
        Label,

        //media
        Audio,
        Video,
        Image,
        IFrame,
        MultiMedia,
        MediaSource

}

//for everyone
export type GlobalAttributes = {
    accesskey: string | Dynamic<string>,
    autocapitalize: string | Dynamic<string>,
    autofocus: string | Dynamic<string>,
    class: string | Dynamic<string>,
    contenteditable: string | Dynamic<string>,
    data$: string | Dynamic<string>,
    dir: string | Dynamic<string>,
    draggable: string | Dynamic<string>,
    enterkeyhint: string | Dynamic<string>,
    exportparts: string | Dynamic<string>,
    hidden: string | Dynamic<string>,
    id: string | Dynamic<string>,
    inert: string | Dynamic<string>,
    inputmode: string | Dynamic<string>,
    is: string | Dynamic<string>,
    itemid: string | Dynamic<string>,
    itemprop: string | Dynamic<string>,
    itemref: string | Dynamic<string>,
    itemscope: string | Dynamic<string>,
    itemtype: string | Dynamic<string>,
    lang: string | Dynamic<string>,
    nonce: string | Dynamic<string>,
    part: string | Dynamic<string>,
    popover: string | Dynamic<string>,
    role: string | Dynamic<string>,
    slot: string | Dynamic<string>,
    spellcheck: string | Dynamic<string>,
    tabindex: string | Dynamic<string>,
    title: string | Dynamic<string>,
    translate: string | Dynamic<string>,
}

export type InputAttributes = Partial<{

    accept: string | Dynamic<string>,
    alt: string | Dynamic<string>,
    autocomplete: string | Dynamic<string>,
    autofocus: string | Dynamic<string>,
    checked: string | Dynamic<string>,
    dirname: string | Dynamic<string>,
    form: string | Dynamic<string>,
    formtarget: string | Dynamic<string>,
    list: string | Dynamic<string>,
    max: string | Dynamic<string>,
    maxlength: string | Dynamic<string>,
    min: string | Dynamic<string>,
    minlength: string | Dynamic<string>,
    multiple: string | Dynamic<string>,
    name: string | Dynamic<string>,
    pattern: string | Dynamic<string>,
    placeholder: string | Dynamic<string>,
    readonly: string | Dynamic<string>,
    required: string | Dynamic<string>,
    size: string | Dynamic<string>,
    step: string | Dynamic<string>,
    type: string | Dynamic<string>,
    value: string | Dynamic<string>

}>

export type LinkAttributes = Partial<{
    crossorigin: string | Dynamic<string>,
    href: string | Dynamic<string>,
    hreflang: string | Dynamic<string>,
    media: string | Dynamic<string>,
    referrerpolicy: string | Dynamic<string>,
    rel: string | Dynamic<string>,
    sizes: string | Dynamic<string>,
    title: string | Dynamic<string>,
    type: string | Dynamic<string>,
}>

export type ImageAttributes = Partial<{

    alt: string | Dynamic<string>,
    crossorigin: string | Dynamic<string>,
    ismap: string | Dynamic<string>,
    loading: string | Dynamic<string>,
    longdesc: string | Dynamic<string>,
    referrerpolicy: string | Dynamic<string>,
    src: string | Dynamic<string>,
    srcset: string | Dynamic<string>,
    usemap: string | Dynamic<string>

}>

export type AudioAttributes = Partial<{

    autoplay: string,
    controls: string,
    loop: string,
    muted: string,
    preload: string,
    src: string

}>

export type VideoAttributes = Partial<{

    autoplay: string | Dynamic<string>,
    controls: string | Dynamic<string>,
    loop: string | Dynamic<string>,
    muted: string | Dynamic<string>,
    poster: string | Dynamic<string>,
    preload: string | Dynamic<string>,
    src: string | Dynamic<string>

}>

export type MultiMediaAttributes = Partial<{

    data: string | Dynamic<string>,
    form: string | Dynamic<string>,
    type: string | Dynamic<string>,
    name: string | Dynamic<string>,
    typemustmatch: string | Dynamic<string>,
    usemap: string | Dynamic<string>

}>

export type MediaSourceAttributes = Partial<{

    media: string | Dynamic<string>,
    sizes: string | Dynamic<string>,
    src: string | Dynamic<string>,
    srcset: string | Dynamic<string>,
    type: string | Dynamic<string>

}>

export type IFrameAttributes = Partial<{

    allow: string | Dynamic<string>,
    allowfullscreen: string | Dynamic<string>,
    allowpaymentrequest: string | Dynamic<string>,
    loading: string | Dynamic<string>,
    name: string | Dynamic<string>,
    referrerpolicy: string | Dynamic<string>,
    sandbox: string | Dynamic<string>,
    src: string | Dynamic<string>,
    srcdoc: string | Dynamic<string>

}>

export type DropdownAttributes = Partial<{

    autofocus: string | Dynamic<string>,
    disabled: string | Dynamic<string>,
    form: string | Dynamic<string>,
    multiple: string | Dynamic<string>,
    name: string | Dynamic<string>,
    required: string | Dynamic<string>,
    size: string | Dynamic<string>

}>

export type DropdownItemAttributes = Partial<{

    disabled: string | Dynamic<string>,
    label: string | Dynamic<string>,
    selected: string | Dynamic<string>,
    value: string | Dynamic<string>

}>

export type OmegaEvents<EventType> = {
    [P in keyof Partial<DocumentEventMap> as `on${P}`]: (event: EventType) => any | Dynamic<(event: EventType) => any>
}