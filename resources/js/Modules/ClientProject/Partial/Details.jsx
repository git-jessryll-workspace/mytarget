import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";

const selectOptions = [
    {
        label: "None",
        value: 0,
        color: "bg-transparent",
    },
    {
        label: "LOW",
        value: 1,
        color: "bg-gray-500",
    },
    {
        label: "MEDIUM",
        value: 2,
        color: "bg-yellow-600",
    },
    {
        label: "HIGH",
        value: 3,
        color: "bg-red-500",
    },
];

const Details = () => {
    const { project_client, client, acronym } = usePage().props;

    const { data, setData } = useForm({
        project_name: project_client.project_name,
        description: project_client.description,
    });

    return (
        <div className="h-[calc(100dvh-170px)] overflow-y-auto -mr-5">
            <div className="max-w-7xl w-3/4 mx-auto space-y-5 px-1">
                <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md grid grid-cols-1 md:grid-cols-2">
                    <header className="pt-2">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                            General Settings
                        </h2>
                    </header>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <InputLabel value={"Project Name"} />
                            <div>
                                <TextInput
                                    value={data.project_name}
                                    onChange={(event) =>
                                        setData(
                                            "project_name",
                                            event.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <InputLabel value={"Description"} />
                            <div>
                                <textarea
                                    value={data.description}
                                    onChange={(event) =>
                                        setData(
                                            "description",
                                            event.target.value
                                        )
                                    }
                                    className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-44 w-full "
                                    placeholder="Short note on this client"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end border-t border-gray-700 col-span-2 mt-3">
                        <div className="pt-3">
                            <PrimaryButton>Save</PrimaryButton>
                        </div>
                    </div>
                </section>
                <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md grid grid-cols-1 md:grid-cols-2">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                            Client Information
                        </h2>
                    </header>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <InputLabel value={"Client Name"} />
                            <div>
                                <TextInput disabled value={client.name} />
                            </div>
                        </div>
                        <div className="space-y-2">
                           <InputLabel value={"Project Acronym"}/>
                           <div>
                                <TextInput value={acronym?.acronym} />
                            </div> 
                        </div>
                        <div className="space-y-2">
                            <InputLabel value={"Current Position"} />
                            <div>
                                <TextInput disabled value={client.position} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-end col-span-2 mt-5 border-t border-gray-700">
                        <div className="pt-3">
                            <button className="px-3 py-2 rounded-md font-bold text-xs border shadow-md uppercase border-gray-300 dark:border-gray-600">
                                View Details
                            </button>
                        </div>
                    </div>
                </section>
                <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                            Archive Project?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            It will hide on the project list and hide all tasks
                            that connected to this project.
                        </p>
                    </div>
                    <div>
                        <DangerButton>Archived</DangerButton>
                    </div>
                </section>
                <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                            Delete Project?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            All tasks that connected on this project will be
                            deleted.
                        </p>
                    </div>
                    <div>
                        <DangerButton>Delete</DangerButton>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Details;
