import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ChevronRightIcon, QueueListIcon } from "@/icons";
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
        console.log(queryParams.size)
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
                                        })
                                    }
                                    }
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
