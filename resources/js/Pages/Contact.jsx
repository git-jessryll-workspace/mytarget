import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import NavPanel from "@/Components/partials/NavPanel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { UsersIcon } from "@/icons";
import { ContactList } from "@/Modules/Contact/Partial";
import { CreateContactForm } from "@/Modules/Contact/Forms";

export default function Contact({ auth, contacts, search_query }) {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setContactList(contacts.data)
    }, [])

    const updateList = (contactsData) => {
        setContactList(contactsData.data);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex space-x-2">
                    <UsersIcon />
                    <h3 className="font-bold text-lg">Contacts</h3>
                </div>
            }
        >
            <Head title="Contacts" />
            <NavPanel
                search_query={search_query}
                keyProps={"contacts"}
                updateList={updateList}
                data={contacts}
                CreateForm={CreateContactForm}
            />
            <div className="h-[78dvh] overflow-y-auto -mr-5 pr-3 mt-3 overflow-x-auto">
                <ContactList contacts={contactList} updateList={updateList} />
            </div>
        </Authenticated>
    );
}
