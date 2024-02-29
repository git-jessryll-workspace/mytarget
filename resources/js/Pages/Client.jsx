import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { QueueListIcon } from "@/icons";
import NavPanel from "@/Components/partials/NavPanel";
import { CreateClientForm } from "@/Modules/Client/Forms";
import { ClientList } from "@/Modules/Client/Partial";

export default function Client({ auth, clients, search_query }) {
    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        setClientList(clients.data);
    }, []);

    const updateClientList = (clientsCallback) => {
        setClientList(clientsCallback.data);
    };
    return (
        <>
            <Head title="Clients" />
            <Authenticated
                user={auth.user}
                header={
                    <div>
                        <a
                            href={`${route("projects.index")}`}
                            className="text-gray-500 dark:text-gray-300 hover:opacity-75 flex items-center text-sm font-bold antialiased"
                        >
                            <QueueListIcon
                                className="h-5 w-5 flex-shrink-0 mr-3"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Client</span>
                            Client
                        </a>
                    </div>
                }
            >
                <NavPanel
                    search_query={search_query}
                    keyProps="clients"
                    updateList={updateClientList}
                    data={clients}
                    CreateForm={CreateClientForm}
                />

                <div className="h-[calc(100dvh-180px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto ">
                    <ClientList
                        clients={clientList}
                        updateClientList={updateClientList}
                    />
                </div>
            </Authenticated>
        </>
    );
}
