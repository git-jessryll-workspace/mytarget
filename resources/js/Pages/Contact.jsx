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
                    <UsersIcon className="h-5 w-6"/>
                    <h3 className="font-bold text-sm">Contacts</h3>
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
            <div className="h-[calc(100dvh-180px)] overflow-auto -mr-5 pr-3 mt-3">
                <ContactList contacts={contactList} updateList={updateList} />
            </div>
        </Authenticated>
    );
}
