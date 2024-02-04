import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm, usePage } from "@inertiajs/react";
import { memo } from "react";

const ArchivedForm = ({ setShow }) => {
    const { task } = usePage().props;
    const { patch } = useForm();

    const handleSubmit = async (event) => {
        event.preventDefault();
        patch(route('tasks.archive', {id: task.id}), {
            onSuccess: () => setShow(false)
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Confirm to archive the task
                    </h3>
                </div>
                <div></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="pb-6">
                    <p className="">Are you sure to archive this task?</p>
                </div>
                <div className="flex justify-end">
                    <div className="flex space-x-2">
                        <SecondaryButton
                            type="button"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </SecondaryButton>
                        <DangerButton type="submit">
                            Yes, archived this task
                        </DangerButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default memo(ArchivedForm);
