import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { dateFormat } from "@/utils/date";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ArchiveForm from "../Forms/ArchiveForm";

const UpdateTaskForm = () => {
    const { task, boards } = usePage().props;
    const [showArchived, setShowArchived] = useState(false);

    const { client_project, board } = task;
    const {
        data,
        setData,
        put: putFn,
    } = useForm({
        name: "",
        description: "",
        board_id: boards[0]?.id,
        client_project_id: client_project.id,
        client_id: task.client_id,
        priority_level: 0,
        is_archived: false,
    });

    console.log(task);

    const { acronym } = task;

    useEffect(() => {
        setData({
            name: task.name,
            description: task.description,
            board_id: task.board_id,
            priority_level: task.priority_level,
            is_archived: task.is_archived,
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        putFn(route("tasks.update", { id: task.id }));
    };

    return (
        <>
            
            <section className="border dark:border-gray-700 shadow-sm dark:shadow-none bg-gray-50 dark:bg-gray-900 p-6 rounded-md">
                <header className="flex justify-between items-center">
                    <div>
                        <h6 className="text-xs">
                            {client_project.project_name}
                        </h6>
                        <h3 className="text-xl font-bold">
                            #{`${acronym.acronym}-${acronym.counter}`}
                        </h3>
                    </div>
                    <div className="">
                        <h6 className="text-xs text-right">Updated At</h6>
                        <h6 className="text-sm font-semibold">
                            {dateFormat(task.updated_at)}
                        </h6>
                    </div>
                </header>

                <form className="space-y-6 pt-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div className="space-y-2">
                            <InputLabel value={"Board"} />
                            <div>
                                <select
                                    value={data.board_id}
                                    onChange={(e) =>
                                        setData("board_id", e.target.value)
                                    }
                                    className="bg-[var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))] text-sm rounded-md"
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
                                    <option value="0">None</option>
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
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
                    <div className="border-t border-gray-400 dark:border-700 flex justify-between pt-4">
                        <div>
                            <DangerButton type="button" onClick={() => setShowArchived(true)}>
                                Move to archived
                            </DangerButton>
                        </div>
                        <div className="">
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
