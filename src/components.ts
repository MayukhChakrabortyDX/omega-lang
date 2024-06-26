import { Dynamic, OmegaComponent, OmegaProperty, State } from "./index"
import { DriverUtility } from "./driver"
import { AudioAttributes, DropdownAttributes, DropdownItemAttributes, IFrameAttributes, ImageAttributes, InputAttributes, LinkAttributes, MediaSourceAttributes, MultiMediaAttributes, NativeComponentIndex, OmegaEvents, VideoAttributes } from "./type"

type defaultPropertyType = OmegaProperty & OmegaEvents<Event>

export function $region({ scope = {}, builder, states }: {
    scope?: { [key: string]: () => any }, builder: (scope: { [key: string]: () => any }) => OmegaComponent, states: State<any>[]
}) {

    return new Dynamic<OmegaComponent>(builder, states, scope)

}

export function $property<T>({ scope = {}, builder, states }: {
    builder: (scope: { [key: string]: () => any }) => T, states: State<any>[], scope?: { [key: string]: () => any }
}) {

    return new Dynamic<T>(builder, states, scope)

}

export async function $effect({ callback, dependencies = [] }: {

    callback: () => any,
    dependencies: State<any>[]

}) {

    callback()
    dependencies.forEach(deps => deps.listen(() => callback()))

}

//to tell the driver to not use those properties.
export const Property = {

    Empty() {
        return "__omega__ignore__property__"
    },

    EmptyStyle() {
        return {}
    }

}

export type StyleProperty =  {
    [P in keyof Partial<CSSStyleDeclaration>]: String | string
}

export const Layout = {

    Column: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.ColumnView, properties)

    },

    Row: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.RowView, properties)

    },

    Grid: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.GridView, properties)

    },

    View: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.View, properties)

    },

    Empty: () => {

        return new OmegaComponent(NativeComponentIndex.__empty__, {})

    }

}

export const Input = {

    Link: (properties: defaultPropertyType & LinkAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Link, properties)

    },

    Button: (prpoerties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Button, prpoerties)

    },

    Text: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.TextInput, properties)

    },

    TextArea: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.TextAreaInput, properties)

    },

    Numeric: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.NumberInput, properties)

    },

    Email: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.EmailInput, properties)

    },

    Password: (prorperties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.PasswordInput, prorperties)

    },

    ExternalFile: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.FileInput, properties)

    },

    Checkbox: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Checkbox, properties)

    },

    Dropdown: (properties: defaultPropertyType & DropdownAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Dropdown, properties)

    },

    DropdownItem: (properties: defaultPropertyType & DropdownItemAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.DropdownItem, properties)

    },

    Date: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Date, properties)

    },

    Time: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Time, properties)

    },

    DateTime: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.DateTime, properties)

    },

    Color: (properties: defaultPropertyType & InputAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Color, properties)

    }

}

export const Content = {

    Icon(properties: defaultPropertyType = {}) {

        return new OmegaComponent(NativeComponentIndex.Icon, properties)

    },

    Text: (text: String | string = "") => {

        return new OmegaComponent(NativeComponentIndex.__text__, DriverUtility.createText(text, {}))

    },

    TextBox: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.TextBox, properties)

    },

    Label: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.Label, properties)

    },

    LineBreak: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.BreakLine, properties)

    },

    HorizontalRule: (properties: defaultPropertyType = {}) => {

        return new OmegaComponent(NativeComponentIndex.HorizontalRule, properties)

    }

}

export const Media = {

    Audio: (properties: defaultPropertyType & AudioAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Audio, properties)

    },

    Video: (properties: defaultPropertyType & VideoAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Video, properties)

    },

    Image: (properties: defaultPropertyType & ImageAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.Image, properties)

    },

    WebView: (properties: defaultPropertyType & IFrameAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.IFrame, properties)

    },

    MultiMedia: (properties: defaultPropertyType & MultiMediaAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.MultiMedia, properties)

    },

    MediaSource: (properties: defaultPropertyType & MediaSourceAttributes = {}) => {

        return new OmegaComponent(NativeComponentIndex.MediaSource, properties)

    },

}