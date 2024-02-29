import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { QueueListIcon } from "@/icons";
import ClientProjectList from "@/Modules/Client/Partial/ClientProjectList";
import ClientContactList from "@/Modules/Client/Partial/ClientContactList";
import ClientTaskList from "@/Modules/Client/Partial/ClientTaskList";

export default function Show({ auth, client }) {
    const [panelTabs, setPanelTabs] = useState([
        {
            name: "Tasks",
            code: "task",
            current: true,
        },
        {
            name: "Projects",
            code: "project",
            current: false,
        },
        {
            name: "Contacts",
            code: "contact",
            current: false,
        },
    ]);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        console.log(queryParams.size);
        if (queryParams.size !== 0) {
            setPanelTabs((prevPanelTabs) =>
                prevPanelTabs.map((tab) => ({
                    ...tab,
                    current: queryParams.has(`search_query_${tab.code}`),
                }))
            );
        }
    }, []);

    const currentTab = panelTabs.find((tab) => tab.current);

    return (
        <>
            <Head title={client.name} />

            <Authenticated
                user={auth.user}
                header={
                    <nav>
                        <div>
                            <ol
                                role="list"
                                className="flex items-center space-x-4"
                            >
                                <li>
                                    <a
                                        href={`${route("clients.index")}`}
                                        className="text-gray-500 hover:text-gray-300 flex items-center text-sm font-medium"
                                    >
                                        <QueueListIcon
                                            className="h-5 w-5 flex-shrink-0 mr-3"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Clients</span>
                                        Clients
                                    </a>
                                </li>
                                <li>
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
                                            href={`${route(
                                                "clients.show",
                                                client.id
                                            )}`}
                                            className="ml-4 text-sm font-bold antialiased text-gray-300 hover:text-gray-700"
                                            aria-current={"page"}
                                        >
                                            {client.name}
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </nav>
                }
            >
                <div>
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
                {currentTab?.code === "project" && <ClientProjectList />}
                {currentTab?.code === "contact" && <ClientContactList />}
                {currentTab?.code === "task" && <ClientTaskList />}
            </Authenticated>
        </>
    );
}
