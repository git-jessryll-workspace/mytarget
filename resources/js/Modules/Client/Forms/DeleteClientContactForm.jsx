import { useForm, usePage } from "@inertiajs/react";

import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";

const DeleteClientContactForm = ({
    contactId,
    setShowDelete,
    updateList,
}) => {
    console.log(contactId)
    const { client } = usePage().props;
    const {
        setData,
        delete: deleteMethod,
        reset,
    } = useForm({
        client_id: client?.id,
        contact_id: contactId,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        deleteMethod(route("client_contacts.destroy"), {
            onSuccess: (res) => {
                updateList(res.props.contacts);
                setShowDelete(false)
                reset();
            },
        });
    };

    return <div>
    <div className="flex justify-between items-center pb-4">
        <div>
            <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                Confirm to delete the contact
            </h3>
        </div>
        <div></div>
    </div>
    <form onSubmit={handleSubmit}>
        <div className="pb-6">
            <p className="">Are you sure to delete this contact?</p>
        </div>
        <div className="flex justify-end">
            <div className="flex space-x-2">
                <SecondaryButton
                    type="button"
                    onClick={() => setShowDelete(false)}
                >
                    Cancel
                </SecondaryButton>
                <DangerButton type="submit">Delete</DangerButton>
            </div>
        </div>
    </form>
</div>
};

export default DeleteClientContactForm;
