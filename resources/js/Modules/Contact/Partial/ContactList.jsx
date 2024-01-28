import { useState, memo } from "react";
import DropdownActiontable from "@/Components/DropdownActiontable";
import Modal from "@/Components/Modal";
import TableList from "@/Components/TableList";
import { EditContactForm } from "../Forms";
import DeleteContactForm from "../Forms/DeleteContactForm";

const ContactList = ({ contacts, updateList }) => {
    const [selected, setSelected] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const contactListData = contacts.map((contact) => ({
        id: `#${contact.id}`,
        name: contact.name,
        email: contact.email,
        contact_number: contact.contact_number,
        action: (
            <DropdownActiontable
                actionObject={{
                    edit: {
                        action: () => {
                            setSelected(contact);
                            setShowEdit(true);
                        },
                        label: "Edit",
                    },
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

    return (
        <>
            <Modal show={showEdit} maxWidth="md">
                <EditContactForm
                    contact={selected}
                    updateList={updateList}
                    setShowEdit={setShowEdit}
                />
            </Modal>
            <Modal show={showDelete} maxWidth="md">
                <DeleteContactForm
                    contactId={selected?.id}
                    updateList={updateList}
                    setShowDelete={setShowDelete}
                />
            </Modal>

            <TableList
                theadObject={{
                    id: `#`,
                    name: "Name",
                    email: "Email",
                    contact_number: "Contact Number",
                    action: "",
                }}
                items={contactListData}
            />
        </>
    );
};
export default memo(ContactList);
