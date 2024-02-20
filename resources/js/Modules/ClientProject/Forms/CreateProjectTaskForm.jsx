import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { memo } from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton";

export default memo(function CreateProjectTaskForm({ setShow }) {
    const { client, project_client } = usePage().props;
    const { boards } = project_client;
    console.log(usePage().props);
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
        project_client_id: project_client.id,
        board_id: null,
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        postMethod(route("tasks.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className={"space-y-4"}>
            <div>
                <h3>Create Project Task</h3>
            </div>
            <form className={"space-y-4"} onSubmit={handleSubmit}>
                <div className={"space-y-2"}>
                    <InputLabel value="Task Name" />
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
                    <InputLabel value="Priority Level" />
                    <div>
                        <select
                            value={data.priority_level}
                            onChange={(e) =>
                                setData("priority_level", e.target.value)
                            }
                            className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"
                        >
                            <option value="0">None</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Board" />
                    <div>
                        <select
                            value={data.board_id}
                            onChange={(e) =>
                                setData("board_id", e.target.value)
                            }
                            className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"
                        >
                            {boards.map((item) => (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={"space-y-2"}>
                    <InputLabel value={"Description"} />
                    <div>
                        <textarea
                            rows={5}
                            value={data.description}
                            onChange={(event) =>
                                setData("description", event.target.value)
                            }
                            className="textarea border resize-none border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 w-full "
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
