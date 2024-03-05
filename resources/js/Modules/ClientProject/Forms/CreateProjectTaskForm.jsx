import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm, usePage} from "@inertiajs/react";
import {memo} from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";

export default memo(function CreateProjectTaskForm({setShow}) {

    const {client, project_client} = usePage().props;
    const {
        data,
        setData,
        post: postMethod,
        reset,
    } = useForm({
        name: "",
        description: "",
        priority_level: 0,
        client_id: client.id,
        client_project_id: project_client.id,
        created_at: null
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        await postMethod(route("tasks.store"), {
            onSuccess: () => {
                reset();
                setShow(false);
            },
        });
    };

    return (
        <div className={"space-y-4"}>
            <div>
                <h3>Create Project Task</h3>
            </div>
            <form className={"space-y-4"} onSubmit={handleSubmit}>
                <div className={"space-y-2"}>
                    <InputLabel value="Task Name"/>
                    <div>
                        <TextInput
                            value={data.name}
                            onChange={(event) =>
                                setData("name", event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Priority Level"/>
                    <div>
                        <Select
                            value={data.priority_level}
                            onChange={(e) =>
                                setData("priority_level", e.target.value)
                            }
                            options={[
                                {
                                    value: "None",
                                    text: "None"
                                },
                                {
                                    value: "Low",
                                    text: "Low"
                                },
                                {
                                    value: "Medium",
                                    text: "Medium"
                                },
                                {
                                    value: "High",
                                    text: "High"
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={"space-y-2"}>
                    <InputLabel value={"Date Started"}/>
                    <div>
                        <TextInput
                            type={"date"}
                            onChange={event => setData('created_at', event.target.value)}
                            value={data.value}
                        />
                    </div>
                </div>
                {/*<div className="space-y-2">*/}
                {/*    <InputLabel value="Board"/>*/}
                {/*    <div>*/}
                {/*        <select*/}
                {/*            value={data.board_id}*/}
                {/*            onChange={(e) =>*/}
                {/*                setData("board_id", e.target.value)*/}
                {/*            }*/}
                {/*            className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"*/}
                {/*        >*/}
                {/*            {boards.map((item) => (*/}
                {/*                <option value={item.id} key={item.id}>*/}
                {/*                    {item.name}*/}
                {/*                </option>*/}
                {/*            ))}*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"space-y-2"}>
                    <InputLabel value={"Description"}/>
                    <div>
                        <TextArea
                            rows={5}
                            value={data.description}
                            onChange={(event) =>
                                setData("description", event.target.value)
                            }
                            placeholder="Short description of the task"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-400 dark:border-gray-700 flex justify-end pt-4">
                    <div className="flex space-x-2">
                        <SecondaryButton
                            type="button"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton type="submit">Save</PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
});
