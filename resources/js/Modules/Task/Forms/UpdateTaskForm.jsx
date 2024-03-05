import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {dateFormat} from "@/utils/date";
import {useForm, usePage} from "@inertiajs/react";
import {useEffect, useState} from "react";
import ArchiveForm from "../Forms/ArchiveForm";
import DropdownActiontable from "@/Components/DropdownActiontable";
import {EllipsisVerticalIcon} from "@/icons";
import SecondaryButton from "@/Components/SecondaryButton";
import Select from "@/Components/Select.jsx";
import TextArea from "@/Components/TextArea.jsx";

const UpdateTaskForm = ({task, setShow}) => {

    const {project_client} = usePage().props;
    console.log(task);

    const {acronym, acronym_counter} = task;

    const printAcronym = () => {
        if (typeof acronym === 'object') {
            return `#${acronym.acronym}-${acronym.counter}`
        } else {
            return `#${acronym}-${acronym_counter}`
        }
    }

    const [showArchived, setShowArchived] = useState(false);
    const {boards} = project_client;
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

        putFn(route("tasks.update", {id: task.id}), {
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
                            {printAcronym()}
                        </h3>
                        <h6 className="text-xs flex items-center">
                            {project_client.project_name}
                            <svg
                                viewBox="0 0 2 2"
                                className="h-1 w-1 fill-current mx-1"
                            >
                                <circle cx={1} cy={1} r={1}/>
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
                                <EllipsisVerticalIcon className="cursor-pointer rotate-90 h-8 w-8"/>
                            }
                        />
                    </div>
                </header>

                <form className="space-y-6 pt-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div className="space-y-2 w-44">
                            <InputLabel value="Priority Level"/>
                            <div>
                                <Select
                                    value={data.priority_level}
                                    onChange={(e) =>
                                        setData(
                                            "priority_level",
                                            e.target.value
                                        )
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
                        <div className="space-y-2 w-44">
                            <InputLabel value="Priority Level"/>
                            <div>
                                <Select
                                    value={data.task_status}
                                    onChange={(e) =>
                                        setData(
                                            "task_status",
                                            e.target.value
                                        )
                                    }
                                    options={[
                                        {
                                            value: "Todo",
                                            text: "Todo",
                                        },
                                        {
                                            value: "In Progress",
                                            text: "In Progress",
                                        },
                                        {
                                            value: "Done",
                                            text: "Done",
                                        },
                                        {
                                            value: "Backlog",
                                            text: "Backlog",
                                        },
                                        {
                                            value: "Canceled",
                                            text: "Canceled",
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Task"}/>
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
                            <InputLabel value={"Date Created"}/>
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
                        {/*<div className="space-y-2 w-full">*/}
                        {/*    <InputLabel value={"Board Position"}/>*/}
                        {/*    <div>*/}
                        {/*        <Select*/}
                        {/*            value={data.board_id}*/}
                        {/*            onChange={(e) =>*/}
                        {/*                setData("board_id", e.target.value)*/}
                        {/*            }*/}
                        {/*            options={boards.map((boardItem) => ({*/}
                        {/*                ...boardItem,*/}
                        {/*                value: boardItem.id,*/}
                        {/*                text: boardItem.name*/}
                        {/*            }))}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Description"}/>
                        <div>
                            <TextArea
                                rows={5}
                                value={data.description}
                                onChange={(event) =>
                                    setData("description", event.target.value)
                                }

                                placeholder="Short description"
                            />
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
                <ArchiveForm setShow={setShowArchived}/>
            </Modal>
        </>
    );
};

export default UpdateTaskForm;
