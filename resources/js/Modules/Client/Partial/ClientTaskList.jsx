import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import Modal from "@/Components/Modal";
import { ShowTaskView } from "../Forms";
import NavPanel from "@/Components/partials/NavPanel";
import TableList from "@/Components/TableList";
import { dateFormat } from "@/utils/date";
import DropdownActiontable from "@/Components/DropdownActiontable";
import TaskStatus from "@/Components/partials/TaskStatus";

const ClientTaskList = () => {
    const { tasks, search_query_task } = usePage().props;

    const [taskList, setTaskList] = useState([]);
    const [showView, setShowView] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setTaskList(tasks.data);
    }, []);

    const updateList = (list) => {
        setTaskList(list.data);
    };


    const taskListData = taskList.map((task) => ({
        id: `${task.acronym}-${task.counter}`,
        name: <p className="line-clamp-1 py-0.5">
            <span className="mr-1 border boarder-gray-300 py-0.5 px-1 text-xs rounded-sm">{task.project_name}</span>
            {task.name}
        </p>,
        priority_level: task.priority_level,
        status: <TaskStatus status={task.task_status}/>,
        action: (
            <DropdownActiontable
                actionObject={{
                    view: {
                        action: () => {
                            window.location.href =  `/tasks/${task.id}`
                        },
                        label: "View",
                    },
                }}
            />
        ),
    }));

    return (
        <>
            <Modal show={showView}>
                <ShowTaskView task={selected} setShow={setShowView} />
            </Modal>
            <div className="pt-6">
                <NavPanel
                    keyProps={"tasks"}
                    updateList={updateList}
                    data={tasks}
                    disableCreate={true}
                    search_query={search_query_task}
                    routeControl={"clients.show"}
                    search_query_key={"search_query_task"}
                />
            </div>
            <div className="h-[calc(100dvh-240px)] overflow-auto -mr-5 pr-3 mt-3">
                <TableList
                    theadObject={{
                        id: "#",
                        name: "Name",
                        priority_level: "Priority Level",
                        status: "Status",
                        action: "",
                    }}
                    items={taskListData}
                    indexPrio={1}
                />
            </div>
        </>
    );
};

export default ClientTaskList;
