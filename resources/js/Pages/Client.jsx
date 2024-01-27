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
            <Authenticated
                user={auth.user}
                header={
                    <div className="flex space-x-2">
                        <QueueListIcon />
                        <h3
                            className="font-bold text-lg"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            Clients
                        </h3>
                    </div>
                }
            >
                <Head title="Clients" />
                <NavPanel
                    search_query={search_query}
                    keyProps="clients"
                    updateList={updateClientList}
                    data={clients}
                    CreateForm={CreateClientForm}
                />

                <div className="h-[78dvh] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto ">
                    <ClientList
                        clients={clientList}
                        updateClientList={updateClientList}
                    />
                </div>
            </Authenticated>
        </>
    );
}
