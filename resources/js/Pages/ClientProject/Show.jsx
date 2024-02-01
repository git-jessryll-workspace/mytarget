import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Details from "@/Modules/ClientProject/Partial/Details";
import ProjectTaskList from "@/Modules/ClientProject/Partial/ProjectTaskList";
import { ChevronRightIcon, PencilIcon, RectangleStackIcon } from "@/icons";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Show = ({ auth, project_client }) => {
    const [panelTabs, setPanelTabs] = useState([
        {
            name: "Details",
            code: "detail",
            current: false,
        },
        {
            name: "Tasks",
            code: "task",
            current: true,
        },
    ]);
    const pages = [
        {
            name: project_client.project_name,
            href: route("projects.show", { id: project_client.id }),
            current: true,
        },
    ];
    const currentTab = panelTabs.find((tab) => tab.current);
    return (
        <>
            <Head title={project_client.project_name} />
            <Authenticated
                user={auth.user}
                header={
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a
                                        href={`${route("projects.index")}`}
                                        className="text-gray-400 hover:text-gray-500 flex items-center text-sm font-medium"
                                    >
                                        <RectangleStackIcon
                                            className="h-5 w-5 flex-shrink-0 mr-1"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Home</span>
                                        Projects
                                    </a>
                                </div>
                            </li>
                            {pages.map((page) => (
                                <li key={page.name}>
                                    <div className="flex items-center">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                        </svg>
                                        <a
                                            href={page.href}
                                            className="ml-4 text-sm font-bold antialiased text-gray-500 hover:text-gray-700"
                                            aria-current={
                                                page.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {page.name}
                                        </a>
                                        <div>
                                            <PencilIcon className="h-4 w-4 ml-2 cursor-pointer hover:text-gray-700" />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </nav>
                }
            >
                <div className="pb-4">
                    <div className="border-b border-gray-500 dark:border-gray-500">
                        <nav
                            className="-mb-px flex space-x-3"
                            aria-label="Tabs"
                        >
                            {panelTabs.map((tab) => (
                                <a
                                    href={`#`}
                                    key={tab.code}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setPanelTabs((prevPanelTabs) => {
                                            return prevPanelTabs.map((i) => ({
                                                ...i,
                                                current: tab.code === i.code,
                                            }));
                                        });
                                    }}
                                    className={`${
                                        tab.current
                                            ? "border-teal-600 text-gray-600 dark:text-gray-300 font-bold"
                                            : "border-transparent hover:border-teal-600 hover:text-gray-300"
                                    } group inline-flex items-center border-b-2 py-2 px-1 text-sm font-medium`}
                                >
                                    <span>{tab.name}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                {currentTab?.code === "task" && <ProjectTaskList />}
                {currentTab?.code === "detail" && <Details/>}
            </Authenticated>
        </>
    );
};

export default Show;
