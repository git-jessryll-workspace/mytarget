import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { dateFormat } from "@/utils/date";
import { useForm, usePage } from "@inertiajs/react";

const UpdateTaskForm = () => {
    const { task } = usePage().props;
    const { data, setData } = useForm({
        name: task.name,
        description: task.description,
    });
    const { acronym } = task;
    return (
        <>
            <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md">
                <header className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">
                            #{`${acronym.acronym}-${acronym.counter}`}
                        </h3>
                    </div>
                    <div>
                        <h6 className="text-sm">
                            {dateFormat(task.updated_at)}
                        </h6>
                    </div>
                </header>
                <form className="space-y-6 pt-6">
                    <div className="space-y-2">
                        <InputLabel value={"Task"} />
                        <div>
                            <TextInput value={task.name} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value="Priority Level" />
                        <div>
                            <select className="select">
                                <option value="0">None</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Description"} />
                        <div>
                            <textarea
                                value={data.description}
                                onChange={(event) =>
                                    setData("description", event.target.value)
                                }
                                className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-32 w-full "
                                placeholder="Short description"
                            ></textarea>
                        </div>
                    </div>
                    <div className="border-t border-gray-400 dark:border-700 flex justify-end">
                        <div className="pt-4">
                            <PrimaryButton>Save</PrimaryButton>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default UpdateTaskForm;
