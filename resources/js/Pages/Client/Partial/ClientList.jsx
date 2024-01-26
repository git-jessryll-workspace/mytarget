import { memo, useState } from "react";

import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import EllipsisVerticalIcon from "@/icons/EllipsisVerticalIcon";
import EditClientForm from "../Forms/EditClientForm";
import DeleteClientForm from "../Forms/DeleteClientForm";

const ClientList = ({ clients, updateClientList }) => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

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
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="">
                    {clients.map((client) => (
                        <tr key={client.id} className="hover">
                            <td>#{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.position}</td>
                            <td>{client.status ? "Active" : "Inactive"}</td>
                            <td>
                                <div className="flex">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <EllipsisVerticalIcon className="cursor-pointer h-6 w-6" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <div
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-teal-600 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-100 transition cursor-pointer duration-150 ease-in-out"
                                                onClick={() => {
                                                    setShowEdit(true);
                                                    setSelectedClient(client);
                                                }}
                                            >
                                                Edit
                                            </div>
                                            <div
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-teal-600 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-100 transition cursor-pointer duration-150 ease-in-out"
                                                onClick={() => {
                                                    setShowDelete(true);
                                                    setSelectedClient(client);
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
        </>
    );
};

export default memo(ClientList);
