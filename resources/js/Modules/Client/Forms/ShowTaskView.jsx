import SecondaryButton from "@/Components/SecondaryButton";
import TaskPriority from "@/Components/TaskPriority";

const ShowTaskView = ({ task, setShow }) => {
    return (
        <>
            <div className="border-b border-gray-400 dark:border-gray-300 pb-2">
                <h3 className="text-xl font-bold">Task</h3>
            </div>
            <div className="pt-6 flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{task.name}</h3>
                    <h5 className="text-sm">{task.project_name}</h5>
                </div>
                <div className="flex justify-end">
                    <div>
                        <TaskPriority priority_level={task.priority_level} />
                    </div>
                </div>
            </div>
            <div className="pt-3 h-[50dvh] overflow-y-auto">
                <div
                    className="text-left text-sm"
                    dangerouslySetInnerHTML={{ __html: task.description }}
                ></div>
            </div>
            <div className="flex justify-end pt-2">
                <div>
                    <SecondaryButton onClick={() => setShow(false)}>Close</SecondaryButton>
                </div>
            </div>
        </>
    );
};

export default ShowTaskView;
