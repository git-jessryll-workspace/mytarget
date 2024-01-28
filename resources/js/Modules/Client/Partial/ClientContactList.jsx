const { usePage } = require("@inertiajs/react");
const { useState, useEffect } = require("react");

const ClientContactList = () => {
    const { contacts, search_query_contact } = usePage().props;
    const [contactList, setContactList] = useState([]);
    
    useEffect(() => {
        setContactList(contacts.data);
    }, []);
};
