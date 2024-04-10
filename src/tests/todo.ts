import { $loop, $region, Content, Input, Layout } from "../components";
import { State } from "../index";

function Todo() {

    const todos = new State<{ name: string, description: string }[]>([])
    const showCreateModal = new State(false)

    return Layout.Column({

        class: "w-full h-screen gap-10 justify-center items-center",
        children: [

            $region(() => 
                
                showCreateModal.get() ? 
                
                Layout.Column({
                    class: "absolute w-full h-screen"
                })
                : Layout.Fragment({})
                ,
                showCreateModal
            ),

            Layout.Row({

                class: "justify-between w-[300px]",
                children: [

                    Content.TextBox({

                        class: "text-xl font-bold",
                        child: Content.Text("Todo List")

                    }),

                    Input.Button({

                        onclick() {

                            

                        },

                        class: "px-4 py-2 rounded-full bg-blue-500",
                        child: Content.Text("Add Todo")
                        
                    })

                ]

            }),

            Content.HorizontalRule({}),

            $loop(() => 

                todos.get().map((value, key) => 

                    Layout.Column({

                        key,
                        class: "gap-4 p-4 rounded-xl bg-gray-500",

                        children: [

                            Content.Text(value.name),
                            Content.Text(value.description),
                            Input.Button({

                                onclick() {

                                    todos.update(v => 

                                        v.filter((_v, k) => k != key)

                                    )

                                },

                                class: "bg-red-500 px-4 py-2 rounded-full",
                                child: Content.Text("Delete")
                            })

                        ]

                    })

                ),

                todos
            )

        ]

    })

}