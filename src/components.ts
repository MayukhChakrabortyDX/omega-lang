import { Dynamic, DynamicLoop, OmegaComponent, OmegaProperty, State } from "./index"
import { DriverUtility } from "./driver"
import { AudioAttributes, ImageAttributes, InputAttributes, NativeComponentIndex, OmegaEvents, VideoAttributes } from "./type"

type defaultPropertyType = OmegaProperty & OmegaEvents<Event>

export function $region(callback: () => OmegaComponent, ...states: State<any>[]) {

    return new Dynamic<OmegaComponent>(callback, ...states)

}

export function $property(callback: () => string, ...states: State<any>[]) {

    return new Dynamic<String>(callback, ...states)

}

export function $loop(callback: () => OmegaComponent[], ...states: State<any>[]) {

    return new DynamicLoop<OmegaComponent>(callback, ...states)

}

export const Layout = {

    Fragment: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.__fragment__, DriverUtility.createFragment(properties))

    },

    Column: (properties: defaultPropertyType) => {
        
        return new OmegaComponent(NativeComponentIndex.ColumnView, properties)

    },

    Row: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.RowView, properties)

    },

    Grid: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.GridView, properties)

    },

    View: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.View, properties)

    }

}

export const Input = {

    Button: (prpoerties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Button, prpoerties)

    },

    Text: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.TextInput, properties)

    },

    TextArea: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.TextAreaInput, properties)

    },

    Numeric: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.NumberInput, properties)

    },

    Email: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.EmailInput, properties)

    },

    Password: (prorperties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.PasswordInput, prorperties)

    },

    ExternalFile: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.FileInput, properties)

    },

    Checkbox: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Checkbox, properties)
        
    },

    Dropdown: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Dropdown, properties)

    },

    DropdownItem: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.DropdownItem, properties)

    },

    DateTime: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.DateTime, properties)

    },

    Color: (properties: defaultPropertyType & InputAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Color, properties)

    }

}

export const Content = {

    Text: (text: string) => {

        return new OmegaComponent(NativeComponentIndex.__text__, DriverUtility.createText(text, {}))

    },

    TextBox: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.TextBox, properties)

    },

    Label: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.Label, properties)

    },

    LineBreak: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.BreakLine, properties)

    },

    HorizontalRule: (properties: defaultPropertyType) => {

        return new OmegaComponent(NativeComponentIndex.HorizontalRule, properties)
        
    }

}

export const Media = {
    
    Audio: (properties: defaultPropertyType & AudioAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Audio, properties)

    },

    Video: (properties: defaultPropertyType & VideoAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Video, properties)

    },

    Image: (properties: defaultPropertyType & ImageAttributes) => {

        return new OmegaComponent(NativeComponentIndex.Image, properties)

    }

}