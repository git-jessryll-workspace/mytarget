import DropdownActiontable from "@/Components/DropdownActiontable";
import Modal from "@/Components/Modal";
import PriorityLevel from "@/Components/PriorityLevel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    ArchiveForm,
    AddTimeLogForm,
    UpdateTaskForm,
} from "@/Modules/Task/Forms";
import Details from "@/Modules/Task/Partial/Details";
import TaskActivity from "@/Modules/Task/Partial/TaskActivity";
import { EllipsisVerticalIcon, RectangleStackIcon } from "@/icons";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ task, auth, time_log_object }) {
    const { client_project, acronym, board } = task;
    const [showAddTimeLog, setShowAddTimeLog] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const pages = [
        {
            name: client_project.project_name,
            href: route("projects.show", { id: client_project.id }),
            current: false,
        },
        {
            name: `#${acronym.acronym}-${acronym.counter}`,
            href: route("tasks.show", { id: task.id }),
            current: true,
        },
    ];

    const [showArchived, setShowArchived] = useState(false);
    return (
        <>
            <Head title={task.name} />
            <Authenticated
                user={auth.user}
                header={
                    <div className="flex justify-between">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol
                                role="list"
                                className="flex items-center space-x-4"
                            >
                                <li>
                                    <div>
                                        <a
                                            href={`${route("projects.index")}`}
                                            className="text-gray-400 hover:text-gray-700 flex items-center text-sm font-medium"
                                        >
                                            <RectangleStackIcon
                                                className="h-5 w-5 flex-shrink-0 mr-3"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Projects
                                            </span>
                                            Projects
                                        </a>
                                    </div>
                                </li>
                                {pages.map((page) => (
                                    <li key={page.name}>
                                        <div className="flex items-center">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>
                                            <a
                                                href={page.href}
                                                className={`ml-4 text-sm antialiased ${
                                                    page.current
                                                        ? "text-teal-600 font-bold"
                                                        : "text-gray-400 font-medium hover:text-gray-700"
                                                }`}
                                                aria-current={
                                                    page.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {page.name}
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                        <div>
                            <DropdownActiontable
                                actionObject={{
                                    edit: {
                                        action: () => setShowEdit(true),
                                        label: "Edit",
                                    },
                                    addTimeLog: {
                                        action: () => setShowAddTimeLog(true),
                                        label: "Add Time Log",
                                    },
                                    archived: {
                                        action: () => {
                                            setShowArchived(true);
                                        },
                                        label: "Archive",
                                    },
                                }}
                                childIcon={
                                    <EllipsisVerticalIcon className="cursor-pointer rotate-90 h-8 w-8" />
                                }
                            />
                        </div>
                    </div>
                }
            >
                <div className="h-[calc(100dvh-160px)] overflow-y-auto -mr-5">
                    <div className="">
                        <Details />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-20 mr-4">
                        <div className="col-span-2">
                            <TaskActivity />
                        </div>
                    </div>
                </div>
                <Modal show={showArchived} maxWidth="lg">
                    <ArchiveForm setShow={setShowArchived} />
                </Modal>
                <Modal show={showAddTimeLog} maxWidth="sm">
                    <AddTimeLogForm setShowAddTimeLog={setShowAddTimeLog} />
                </Modal>
                <Modal show={showEdit}>
                    <UpdateTaskForm setShow={setShowEdit} task={task} />
                </Modal>
            </Authenticated>
        </>
    );
}
