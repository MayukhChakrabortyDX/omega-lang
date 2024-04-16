//this section contains driver specific codes, and how to efficiently process
//driver mnemonics and tree representions. We can use: Optimized modes
//and API friendly modes.

import { OmegaProperty } from "./index"

//this file contains more of "API Friendly" modes of Driver functionality.

//note: These are standard driver library for this language model.
//If a driver requires custom driver construct, it is always possible, just make sure
//not to clash with the standard ones.

export type __text__ = {
    //for __text__ tag
    text: String | string
}

//just a helper API that makes the confusing jargon easier.
export const DriverUtility = {

    createText(text: String | string, properties: OmegaProperty) {

        return {
            ...properties,
            __driver__: {
                ...properties.__driver__,
                __text__: {
                    text
                }
            }
        }

    },

}