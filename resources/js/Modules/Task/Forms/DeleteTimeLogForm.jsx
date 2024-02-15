import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { memo } from "react";

export default memo(function DeleteTimeLogForm({ timeLogId, setShowDelete }) {
    const { delete: deleteMethod, reset } = useForm();
    const handleSubmit = async (event) => {
        event.preventDefault();
        await deleteMethod(route("task_time_logs.destroy", { id: timeLogId }), {
            onSuccess: () => reset(),
        });
        setShowDelete(false);
    };
    return (
        <>
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Confirm to delete the time log
                    </h3>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="pb-6">
                    <p className="">Are you sure to delete this client?</p>
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
        </>
    );
});
