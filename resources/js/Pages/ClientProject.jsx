import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import RectangleStackIcon from "@/icons/RectangleStackIcon";
import CreateProjectForm from "./Project/Forms/CreateProjectForm";
import NavPanel from "@/Components/partials/NavPanel";
import Dropdown from "@/Components/Dropdown";
import EllipsisVerticalIcon from "@/icons/EllipsisVerticalIcon";

export default function ClientProject({ auth, projects, search_query }) {
    const [projectList, setProjectList] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        setProjectList(projects.data);
    }, []);
    const updateClientList = (cb) => {
        setProjectList(cb.data);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h1 className="flex items-center">
                    <RectangleStackIcon className="w-6 h-6 mr-3" /> Projects
                </h1>
            }
        >
            <Head title="Projects" />
            <NavPanel
                search_query={search_query}
                keyProps="projects"
                updateClientList={updateClientList}
                data={projects}
                CreateForm={CreateProjectForm}
            />

            <div className="h-[78dvh] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                <table className="table table-sm table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Project Name</th>
                            <th>Client</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectList.map((item) => (
                            <tr key={item.id} className="hover">
                                <td>{item.id}</td>
                                <td>{item.project_name}</td>
                                <td>{item.client.name}</td>
                                <td>{item.active ? "Active" : "Inactive"}</td>
                                <td>
                                    <div className="flex justify-center">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="cursor-pointer h-6 w-6" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <div
                                                    className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-teal-600 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-100 transition cursor-pointer duration-150 ease-in-out"
                                                    onClick={() => {
                                                        setShowEdit(true);
                                                        setSelectedProject(
                                                            item
                                                        );
                                                    }}
                                                >
                                                    Edit
                                                </div>
                                                <div
                                                    className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-teal-600 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-100 transition cursor-pointer duration-150 ease-in-out"
                                                    onClick={() => {
                                                        setShowDelete(true);
                                                        setSelectedProject(
                                                            item
                                                        );
                                                    }}
                                                >
                                                    Delete
                                                </div>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
