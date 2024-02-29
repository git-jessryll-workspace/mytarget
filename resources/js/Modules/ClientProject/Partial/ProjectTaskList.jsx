import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import NavPanel from "@/Components/partials/NavPanel";
import { dateFormat } from "@/utils/date";
import DropdownActiontable from "@/Components/DropdownActiontable";
import TableList from "@/Components/TableList";
import Modal from "@/Components/Modal.jsx";
import {UpdateTaskForm} from "@/Modules/Task/Forms/index.js";

const ProjectTaskList = () => {
    const { tasks, search_query_task } = usePage().props;
    const [taskList, setTaskList] = useState([]);
    const [taskSelected, setTaskSelected] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        setTaskList(tasks.data);
    }, []);

    const updateList = (list) => {
        setTaskList(list.data);
    };

    const priorityWrap = {
        3: (
            <span className="text-red-500 rounded-full text-xs uppercase font-bold">
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
        updated_at: dateFormat(task.updated_at),
        action: (
            <DropdownActiontable
                actionObject={{
                    edit: {
                        action: () => {
                            setTaskSelected(task)
                            setShowEdit(true)
                        },
                        label: "Edit"
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
            <NavPanel
                keyProps={"tasks"}
                updateList={updateList}
                data={tasks}
                disableCreate={true}
                search_query={search_query_task}
                routeControl={"projects.show"}
                search_query_key={"search_query_task"}
            />
            <div className="h-[calc(100dvh-200px)] overflow-auto -mr-5 pr-3">
                <TableList
                    theadObject={{
                        acronym_id: "#",
                        name: "Name",
                        board_name: "Board Position",
                        priority_level: "Priority Level",
                        created_at: "Date Created",
                        updated_at: "Date Updated",
                        action: "",
                    }}
                    items={taskListData}
                />
            </div>
            <Modal show={showEdit}>
                <UpdateTaskForm task={taskSelected}/>
            </Modal>
        </>
    );
};

export default ProjectTaskList;
