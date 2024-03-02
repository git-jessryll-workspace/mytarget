import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import NavPanel from "@/Components/partials/NavPanel";
import DropdownActiontable from "@/Components/DropdownActiontable";
import TableList from "@/Components/TableList";
import Modal from "@/Components/Modal.jsx";
import { UpdateTaskForm } from "@/Modules/Task/Forms/index.js";
import TaskStatus from "@/Components/partials/TaskStatus";

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

    const taskListData = tasks.data.map((task) => ({
        id: `${task.acronym}-${task.counter}`,
        name: <p className="line-clamp-1">{task.name}</p>,
        priority_level: task.priority_level,
        status: <TaskStatus status={task.task_status} />,
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
                        priority_level: "Priority Level",
                        status: "Status",
                        action: "",
                    }}
                    items={taskListData}
                    indexPrio={1}
                />
            </div>
            <Modal show={showEdit}>
                <UpdateTaskForm task={taskSelected} setShow={setShowEdit} />
            </Modal>
        </>
    );
};

export default ProjectTaskList;
