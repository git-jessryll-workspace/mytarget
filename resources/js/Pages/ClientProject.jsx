import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import NavPanel from "@/Components/partials/NavPanel";
import { RectangleStackIcon } from "@/icons";
import { ProjectList } from "@/Modules/ClientProject/Partial";
import { CreateProjectForm } from "@/Modules/ClientProject/Forms";

export default function ClientProject({ auth, projects, search_query }) {
    const [projectList, setProjectList] = useState([]);

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
                <nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div>
                                <a
                                    href={`${route("projects.index")}`}
                                    className="text-gray-500 dark:text-gray-300 hover:opacity-75 flex items-center text-sm font-bold antialiased"
                                >
                                    <RectangleStackIcon
                                        className="h-5 w-5 flex-shrink-0 mr-3"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Home</span>
                                    Projects
                                </a>
                            </div>
                        </li>
                        
                    </ol>
                </nav>
            }
        >
            <Head title="Projects" />
            <NavPanel
                search_query={search_query}
                keyProps="projects"
                updateList={updateClientList}
                data={projects}
                CreateForm={CreateProjectForm}
            />

            <div className="h-[calc(100dvh-180px)] overflow-auto -mr-5 pr-3 mt-3">
                <ProjectList
                    projects={projectList}
                    updateList={updateClientList}
                />
            </div>
        </Authenticated>
    );
}
