import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";

import DropdownActiontable from "@/Components/DropdownActiontable";
import Modal from "@/Components/Modal";
import TableList from "@/Components/TableList";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    CreateProjectForm,
    DeleteProjectForm,
    EditProjectForm,
} from "@/Modules/Project/Forms";
import { ChevronRightIcon, QueueListIcon } from "@/icons";
import NavPanel from "@/Components/partials/NavPanel";
import { dateFormat } from "@/utils/date";

export default function Show({ auth, client, projects }) {
    const [panelNav, setPanelNav] = useState([
        {
            name: "Tasks",
            code: "tasks",
            current: false,
        },
        {
            name: "Projects",
            code: "projects",
            current: true,
        },
        {
            name: "Contacts",
            code: "contacts",
            current: false,
        },
    ]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showEditProject, setShowEditProject] = useState(false);
    const [showDeleteProject, setShowDeleteProject] = useState(false);
    const [projectList, setProjectList] = useState([]);

    const currentTab = panelNav.find((tab) => tab.current);

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
                            setSelectedProject(project);
                            setShowEditProject(true);
                        },
                        label: "Edit",
                    },
                    delete: {
                        action: () => {
                            setSelectedProject(project);
                            setShowDeleteProject(true);
                        },
                        label: "Delete",
                    },
                }}
            />
        ),
    }));

    const updateProjectList = (projectsData) => {
        setProjectList(projectsData.data);
    };

    useEffect(() => {
        setProjectList(projects.data);
    }, []);

    return (
        <>
            <Head title={client.name} />
            <Modal show={showEditProject} maxWidth="md">
                <EditProjectForm
                    updateList={updateProjectList}
                    project={selectedProject}
                    setShowEdit={setShowEditProject}
                    skipClientSelect={true}
                />
            </Modal>
            <Modal show={showDeleteProject} maxWidth="md">
                <DeleteProjectForm
                    updateList={updateProjectList}
                    projectId={selectedProject?.id}
                    setShowDelete={setShowDeleteProject}
                />
            </Modal>
            <Authenticated
                user={auth.user}
                header={
                    <div className="flex space-x-1">
                        <div
                            className="flex space-x-2 cursor-pointer"
                            onClick={() =>
                                (window.location.href = route("clients.index"))
                            }
                        >
                            <QueueListIcon />
                            <h3
                                className="font-semibold text-lg"
                                style={{ letterSpacing: "0.5px" }}
                            >
                                Clients
                            </h3>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="w-5 h-5 mt-1 mr-1" />
                            <h3
                                className="font-bold text-xl"
                                style={{ letterSpacing: "0.5px" }}
                            >
                                {client.name}
                            </h3>
                        </div>
                    </div>
                }
            >
                <div>
                    <div className="border-b border-gray-500 dark:border-gray-500">
                        <nav
                            className="-mb-px flex space-x-3"
                            aria-label="Tabs"
                        >
                            {panelNav.map((tab) => (
                                <a
                                    href="#"
                                    key={tab.code}
                                    className={`${
                                        tab.current
                                            ? "border-teal-600 text-gray-300 font-bold"
                                            : "border-transparent hover:border-teal-600 hover:text-gray-300"
                                    } group inline-flex items-center border-b-2 py-2 px-1 text-sm font-medium`}
                                >
                                    <span>{tab.name}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                {currentTab.code === "projects" && (
                    <div className="pt-6">
                        <NavPanel
                            keyProps={"projects"}
                            updateList={updateProjectList}
                            data={projects}
                            CreateForm={CreateProjectForm}
                        />
                        <div className="pt-4">
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
                )}
            </Authenticated>
        </>
    );
}
