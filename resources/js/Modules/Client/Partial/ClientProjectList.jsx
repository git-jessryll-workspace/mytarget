import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

import DropdownActiontable from "@/Components/DropdownActiontable";
import NavPanel from "@/Components/partials/NavPanel";
import { dateFormat } from "@/utils/date";
import {
    CreateProjectForm,
    DeleteProjectForm,
    EditProjectForm,
} from "@/Modules/Project/Forms";
import Modal from "@/Components/Modal";
import TableList from "@/Components/TableList";

const ClientProjectList = () => {
    const { projects, search_query_project } = usePage().props;
    const [projectList, setProjectList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        setProjectList(projects.data);
    }, []);

    const updateList = (list) => {
        setProjectList(list.data);
    };

    const projectListData = projectList.map((project) => ({
        id: `#${project.id}`,
        project_name: project.project_name,
        updated_date: dateFormat(project.updated_at),
        status: project.active === 1 ? "Active" : "Inactive",
        action: (
            <DropdownActiontable
                actionObject={{
                    edit: {
                        action: () => {
                            setSelected(project);
                            setShowEdit(true);
                        },
                        label: "Edit",
                    },
                    delete: {
                        action: () => {
                            setSelected(project);
                            setShowDelete(true);
                        },
                        label: "Delete",
                    },
                }}
            />
        ),
    }));
    return (
        <>
            <Modal show={showEdit} maxWidth="md">
                <EditProjectForm
                    updateList={updateList}
                    project={selected}
                    setShowEdit={setShowEdit}
                    skipClientSelect={true}
                />
            </Modal>
            <Modal show={showDelete} maxWidth="md">
                <DeleteProjectForm
                    updateList={updateList}
                    projectId={selected?.id}
                    setShowDelete={setShowDelete}
                />
            </Modal>
            <div className="pt-6">
                <NavPanel
                    keyProps={"projects"}
                    updateList={updateList}
                    data={projects}
                    CreateForm={CreateProjectForm}
                    search_query={search_query_project}
                    routeControl={"clients.show"}
                    search_query_key={"search_query_project"}
                />
                <div className="h-[calc(100dvh-290px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                    <TableList
                        theadObject={{
                            id: "#",
                            project_name: "Project Name",
                            updated_date: "Updated Date",
                            status: "Status",
                            action: "",
                        }}
                        items={projectListData}
                    />
                </div>
            </div>
        </>
    );
};

export default ClientProjectList;
