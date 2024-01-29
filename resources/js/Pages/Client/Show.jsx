import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ChevronRightIcon, QueueListIcon } from "@/icons";
import ClientProjectList from "@/Modules/Client/Partial/ClientProjectList";
import ClientContactList from "@/Modules/Client/Partial/ClientContactList";

export default function Show({
    auth,
    client,
    search_query_project,
    search_query_contact,
    current_search_tab,
}) {
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
    const currentTab = panelNav.find((tab) => tab.current);

    useEffect(() => {
        if (search_query_project !== "") {
            setPanelNav((panelNav) => {
                return panelNav.map((item) => {
                    return {
                        ...item,
                        current: item.code === "projects",
                    };
                });
            });
        }

        if (search_query_contact !== "") {
            setPanelNav((panelNav) => {
                return panelNav.map((item) => {
                    return {
                        ...item,
                        current: item.code === "contacts",
                    };
                });
            });
        }
        if (current_search_tab) {
            setPanelNav((panelNav) => {
                return panelNav.map((item) => {
                    if (current_search_tab === "search_query_project") {
                        return {
                            ...item,
                            current: item.code === "projects",
                        };
                    }
                    if (current_search_tab === "search_query_contact") {
                        return {
                            ...item,
                            current: item.code === "contacts",
                        };
                    }
                    return item;
                });
            });
        }
    }, []);

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
                            {panelNav.map((tab) => (
                                <a
                                    href={`#`}
                                    key={tab.code}
                                    onClick={() =>
                                        setPanelNav((panelNav) => {
                                            return panelNav.map((i) => ({
                                                ...i,
                                                current: tab.code === i.code,
                                            }));
                                        })
                                    }
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
                {currentTab.code === "projects" && <ClientProjectList />}
                {currentTab.code === "contacts" && <ClientContactList />}
            </Authenticated>
        </>
    );
}
