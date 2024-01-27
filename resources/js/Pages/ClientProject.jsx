import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import NavPanel from "@/Components/partials/NavPanel";
import { RectangleStackIcon } from "@/icons";
import { ProjectList } from "@/Modules/Project/Partial";
import { CreateProjectForm } from "@/Modules/Project/Forms";

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
                <h1 className="flex items-center">
                    <RectangleStackIcon className="w-6 h-6 mr-3" /> Projects
                </h1>
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

            <div className="h-[78dvh] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                <ProjectList
                    projects={projectList}
                    updateList={updateClientList}
                />
            </div>
        </Authenticated>
    );
}
