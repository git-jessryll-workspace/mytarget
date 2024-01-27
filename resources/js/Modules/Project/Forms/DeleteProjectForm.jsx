import { useForm } from "@inertiajs/react";

import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function DeleteProjectForm({
    projectId,
    setShowDelete,
    updateList,
}) {
    console.log(projectId)
    const { delete: deleteMethod } = useForm({});
    const handleSubmit = (event) => {
        event.preventDefault();
        deleteMethod(route("projects.destroy", { id: projectId }), {
            onSuccess: (res) => {
                updateList(res.props.projects);
                setShowDelete(false);
            },
        });
    };
    return (
        <div>
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Confirm to delete the project
                    </h3>
                </div>
                <div></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="pb-6">
                    <p className="">Are you sure to delete this project?</p>
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
    );
}
