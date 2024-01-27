import { memo, useState } from "react";

import Modal from "@/Components/Modal";
import TableList from "@/Components/TableList";
import DropdownActiontable from "@/Components/DropdownActiontable";
import { EditProjectForm, DeleteProjectForm } from "../Forms";

const ProjectList = ({ projects, updateList }) => {
    const [selected, setSelected] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const projectListData = projects.map((project) => ({
        id: project.id,
        project_name: project.project_name,
        client: project.client?.name,
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
                />
            </Modal>
            <Modal show={showDelete} maxWidth="md">
                <DeleteProjectForm
                    updateList={updateList}
                    projectId={selected?.id}
                    setShowDelete={setShowDelete}
                />
            </Modal>
            <TableList
                theadObject={{
                    id: "#",
                    project_name: "Project Name",
                    client: "Client",
                    status: "Status",
                    action: "",
                }}
                items={projectListData}
            />
        </>
    );
};

export default memo(ProjectList);
