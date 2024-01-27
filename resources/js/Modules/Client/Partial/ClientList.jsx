import { memo, useState } from "react";

import Modal from "@/Components/Modal";
import TableList from "@/Components/TableList";
import DropdownActiontable from "@/Components/DropdownActiontable";
import { DeleteClientForm, EditClientForm } from "@/Modules/Client/Forms";

const ClientList = ({ clients, updateClientList }) => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const clientList = clients.map((client) => ({
        id: client.id,
        name: client.name,
        position: client.position,
        status: client.status === 1 ? "Active" : "Inactive",
        action: (
            <DropdownActiontable
                actionObject={{
                    edit: {
                        action: () => {
                            setSelectedClient(client);
                            setShowEdit(true);
                        },
                        label: "Edit",
                    },
                    show: {
                        action: () => {
                            window.location.href = route(
                                "clients.show",
                                client.id
                            );
                        },
                        label: "View",
                    },
                    delete: {
                        action: () => {
                            setSelectedClient(client);
                            setShowDelete(true);
                        },
                        label: "Delete",
                    },
                }}
            />
        ),
    }));

    return (
        <>
            <Modal show={showEdit} maxWidth="md">
                <EditClientForm
                    updateClientList={updateClientList}
                    client={selectedClient}
                    resetSelected={() => setShowEdit(false)}
                />
            </Modal>

            <Modal show={showDelete} maxWidth="md">
                <DeleteClientForm
                    clientId={selectedClient?.id}
                    setDeleteClient={setShowDelete}
                    updateClientList={updateClientList}
                />
            </Modal>
            <TableList
                theadObject={{
                    id: "#",
                    client_name: "Client Name",
                    position: "Position",
                    status: "Status",
                    action: "",
                }}
                items={clientList}
            />
        </>
    );
};

export default memo(ClientList);
