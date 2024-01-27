import { memo } from "react";
import { useForm } from "@inertiajs/react";

import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default memo(
    function DeleteClientForm({ clientId, setDeleteClient, updateClientList }) {
        const { delete: deleteMethod } = useForm({});
        const handleSubmit = (event) => {
            event.preventDefault();
            deleteMethod(route("clients.destroy", { id: clientId }), {
                onSuccess: (res) => {
                    setDeleteClient(false);
                    updateClientList(res.props.clients);
                },
            });
        };
        return (
            <div>
                <div className="flex justify-between items-center pb-4">
                    <div>
                        <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                            Confirm to delete the client
                        </h3>
                    </div>
                    <div></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="pb-6">
                        <p className="">Are you sure to delete this client?</p>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex space-x-2">
                            <SecondaryButton
                                type="button"
                                onClick={() => setDeleteClient(false)}
                            >
                                Cancel
                            </SecondaryButton>
                            <DangerButton type="submit">Delete</DangerButton>
                        </div>
                    </div>
                </form>
            </div>
        );
    },
    (prev, next) => prev.clientId === next.clientId
);
