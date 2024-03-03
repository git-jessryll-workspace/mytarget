import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { dateFormat } from "@/utils/date";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ArchiveForm from "../Forms/ArchiveForm";
import DropdownActiontable from "@/Components/DropdownActiontable";
import { EllipsisCircle } from "@/icons";
import SecondaryButton from "@/Components/SecondaryButton";

const UpdateTaskForm = ({ task, setShow }) => {
    
    const { project_client } = usePage().props;
    
    const { acronym, acronym_counter } = task;

    const [showArchived, setShowArchived] = useState(false);
    const { boards } = project_client;
    const {
        data,
        setData,
        put: putFn,
        reset,
    } = useForm({
        name: "",
        description: "",
        board_id: boards[0]?.id,
        client_project_id: project_client?.id,
        client_id: task.client_id,
        priority_level: 0,
        is_archived: false,
        created_at: null,
        task_status: "Todo"
    });

    useEffect(() => {
        setData({
            name: task.name,
            description: task.description,
            board_id: task.board_id,
            priority_level: task.priority_level,
            is_archived: task?.is_archived,
            created_at: task.created_at,
            task_status: task.task_status,
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        putFn(route("tasks.update", { id: task.id }), {
            onSuccess: () => {
                reset();
                setShow(false);
            },
        });
    };

    return (
        <>
            <section className="">
                <header className="flex justify-between">
                    <div>
                        <h3 className="text-xl font-bold">
                            #{`${acronym}-${acronym_counter}`}
                        </h3>
                        <h6 className="text-xs flex items-center">
                            {project_client.project_name}
                            <svg
                                viewBox="0 0 2 2"
                                className="h-1 w-1 fill-current mx-1"
                            >
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            {dateFormat(task.updated_at)}
                        </h6>
                    </div>
                    <div className="">
                        <DropdownActiontable
                            actionObject={{
                                view: {
                                    action: () => {
                                        setShowArchived(true);
                                    },
                                    label: "Archive",
                                },
                            }}
                            childIcon={
                                <EllipsisCircle className="cursor-pointer rotate-90 h-6 w-6" />
                            }
                        />
                    </div>
                </header>

                <form className="space-y-6 pt-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div className="space-y-2 w-44">
                            <InputLabel value="Priority Level" />
                            <div>
                                <select
                                    value={data.priority_level}
                                    onChange={(e) =>
                                        setData(
                                            "priority_level",
                                            e.target.value
                                        )
                                    }
                                    className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"
                                >
                                    <option value="None">None</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2 w-44">
                            <InputLabel value="Priority Level" />
                            <div>
                                <select
                                    value={data.task_status}
                                    onChange={(e) =>
                                        setData(
                                            "task_status",
                                            e.target.value
                                        )
                                    }
                                    className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"
                                >
                                    <option value="Todo">Todo</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                    <option value="Backlog">Backlog</option>
                                    <option value="Canceled">Canceled</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Task"} />
                        <div>
                            <TextInput
                                value={data.name}
                                onChange={(event) =>
                                    setData("name", event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-3">
                        <div className={"space-y-2 w-full"}>
                            <InputLabel value={"Date Created"} />
                            <div>
                                <TextInput
                                    type={"date"}
                                    value={data.created_at}
                                    onChange={(event) =>
                                        setData(
                                            "created_at",
                                            event.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="space-y-2 w-full">
                            <InputLabel value={"Board Position"} />
                            <div>
                                <select
                                    value={data.board_id}
                                    onChange={(e) =>
                                        setData("board_id", e.target.value)
                                    }
                                    className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md w-full"
                                >
                                    {boards.map((boardItem) => (
                                        <option
                                            key={boardItem.id}
                                            value={boardItem.id}
                                        >
                                            {boardItem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Description"} />
                        <div>
                            <textarea
                                rows={5}
                                value={data.description}
                                onChange={(event) =>
                                    setData("description", event.target.value)
                                }
                                className="textarea border resize-none border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 w-full "
                                placeholder="Short description"
                            ></textarea>
                        </div>
                    </div>
                    <div className="border-t border-gray-400 dark:border-gray-700 flex justify-end pt-4">
                        <div className="">
                            <SecondaryButton
                                onClick={() => setShow(false)}
                                type="button"
                            >
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton type="submit">Save</PrimaryButton>
                        </div>
                    </div>
                </form>
            </section>
            <Modal show={showArchived} maxWidth="md">
                <ArchiveForm setShow={setShowArchived} />
            </Modal>
        </>
    );
};

export default UpdateTaskForm;
