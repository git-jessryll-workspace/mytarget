import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ChevronLeftIcon, ChevronRightIcon, QueueListIcon } from "@/icons";
import PriorityLevel from "@/Components/PriorityLevel";
import DropdownActiontable from "@/Components/DropdownActiontable";
import { useEffect, useRef } from "react";
import { dateFormat } from "@/utils/date";
import SecondaryButton from "@/Components/SecondaryButton";
import TableList from "@/Components/TableList";

const Task = ({ auth, tasks, search_query, search_date }) => {
    const inputSearch = useRef();
    const inputSearchDate = useRef();

    const { get: getMethod } = useForm();

    useEffect(() => {
        inputSearch.current.value = search_query;
        inputSearchDate.current.value = search_date;
    }, []);
    const handleSearchAction = (event) => {
        event.preventDefault();
        getMethod(
            route("tasks.index", [
                {
                    search_date: inputSearchDate.current.value,
                    search_query: inputSearch.current.value,
                },
            ])
        );
    };
    const priorityWrap = {
        3: (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
                High
            </span>
        ),
        2: (
            <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
                Medium
            </span>
        ),
        1: (
            <span className="bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold">
                Low
            </span>
        ),
        0: null,
    };

    const taskListData = tasks.data.map((task) => ({
        id: `#${task.acronym}-${task.counter}`,
        name: task.name,
        board_name: task.board_name,
        priority_level: priorityWrap[task.priority_level],
        created_at: dateFormat(task.created_at),
        action: (
            <DropdownActiontable
                actionObject={{
                    edit: {
                        action: () => {
                            setTaskSelected(task);
                            setShowEdit(true);
                        },
                        label: "Edit",
                    },
                    view: {
                        action: () => {
                            window.location.href = route("tasks.show", {
                                id: task.id,
                            });
                        },
                        label: "View",
                    },
                }}
            />
        ),
    }));
    return (
        <>
            <Head title="Tasks" />
            <Authenticated
                user={auth.user}
                header={
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-sm flex items-center">
                                <QueueListIcon className="h-5 w-5 mr-3" />
                                Tasks
                            </h3>
                        </div>
                    </div>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <form
                        onSubmit={handleSearchAction}
                        className="w-full col-span-2"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <TextInput
                                ref={inputSearch}
                                name="search_query"
                                placeholder="Search"
                            />
                            <TextInput
                                ref={inputSearchDate}
                                name="search_date"
                                type="date"
                            />
                            <div className="flex space-x-3 items-center">
                                <PrimaryButton type="submit" className="">
                                    Search
                                </PrimaryButton>
                                <button
                                    className="uppercase font-bold hover:opacity-75 text-sm"
                                    onClick={(event) => {
                                        inputSearchDate.current.value = null;
                                        inputSearch.current.value = null;
                                        handleSearchAction(event);
                                    }}
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex space-x-3 items-center justify-end">
                        <div className="font-bold text-sm">
                            {tasks.from} - {tasks.to} of {tasks.total}
                        </div>
                        <div className="join space-x-1">
                            <div>
                                <Link
                                    href={"#"}
                                    className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                >
                                    <ChevronLeftIcon className="h-4 w-4" />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"#"}
                                    className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                >
                                    <ChevronRightIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[calc(100dvh-180px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                    <TableList
                        theadObject={{
                            acronym_id: "#",
                            name: "Name",
                            board_name: "Board Position",
                            priority_level: "Priority Level",
                            created_at: "Date Created",
                            action: "",
                        }}
                        items={taskListData}
                    />
                </div>
            </Authenticated>
        </>
    );
};

export default Task;
