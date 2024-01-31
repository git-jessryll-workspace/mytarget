import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import Modal from "@/Components/Modal";
import { ShowTaskView } from "../Forms";
import NavPanel from "@/Components/partials/NavPanel";
import TableList from "@/Components/TableList";
import { dateFormat } from "@/utils/date";
import DropdownActiontable from "@/Components/DropdownActiontable";

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

    const taskListData = taskList.map((task) => ({
        id: `#${task.acronym}-${task.counter}`,
        name: task.name,
        priority_level: priorityWrap[task.priority_level],
        project_name: task.project_name,
        updated_at: dateFormat(task.updated_at),
        action: (
            <DropdownActiontable
                actionObject={{
                    view: {
                        action: () => {
                            setSelected(task);
                            setShowView(true);
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
            <div className="h-[67dvh] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                <TableList
                    theadObject={{
                        acronym_id: "#",
                        name: "Name",
                        priority_level: "Priority Level",
                        project_name: "Project Name",
                        updated_at: "Date Updated",
                        action: "",
                    }}
                    items={taskListData}
                />
            </div>
        </>
    );
};

export default ClientTaskList;
