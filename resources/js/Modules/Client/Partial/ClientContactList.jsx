import {useState, useEffect} from "react"
import {usePage} from "@inertiajs/react"

import DropdownActiontable from "@/Components/DropdownActiontable";
import Modal from "@/Components/Modal";
import { dateFormat } from "@/utils/date";
import DeleteClientContactForm from "../Forms/DeleteClientContactForm";
import NavPanel from "@/Components/partials/NavPanel";
import CreateClientContactForm from "../Forms/CreateClientContactForm";
import TableList from "@/Components/TableList";

const ClientContactList = () => {
    const { contacts, search_query_contact } = usePage().props;
    const [contactList, setContactList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        setContactList(contacts.data);
    }, []);

    const updateList = (list) => {
        setContactList(list.data);
    };

    const contactListData = contactList.map((contact) => ({
        id: `#${contact.id}`,
        name: contact.name,
        email: contact.email,
        contact_number: contact.contact_number,
        created_at: dateFormat(contact.created_at),
        action: (
            <DropdownActiontable
                actionObject={{
                    delete: {
                        action: () => {
                            setSelected(contact);
                            setShowDelete(true);
                        },
                        label: "Delete",
                    },
                }}
            />
        ),
    }));

    console.log(selected)

    return (
        <>
            <Modal show={showDelete}>
                <DeleteClientContactForm
                    contactId={selected?.contact_id}
                    updateList={updateList}
                    setShowDelete={setShowDelete}
                />
            </Modal>
            <div className="pt-6">
                <NavPanel
                    keyProps={"contacts"}
                    updateList={updateList}
                    data={contacts}
                    CreateForm={CreateClientContactForm}
                    search_query={search_query_contact}
                    routeControl={"clients.show"}
                    search_query_key={"search_query_contact"}
                />
                <div className="h-[calc(100dvh-290px)] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                    <TableList
                        theadObject={{ 
                            contact_id: "#",
                            name: "Name",
                            email: "Email",
                            contact_number: "Contact Number",
                            created_at: "Created at",
                            action: ""
                         }}
                         items={contactListData}
                    />
                </div>
            </div>
        </>
    );
};

export default ClientContactList;
