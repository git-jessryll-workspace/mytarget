import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectOption from "@/Components/SelectOption";
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
    const { project_client } = usePage().props;

    const { data, setData } = useForm({
        project_name: project_client.project_name,
        description: project_client.description,
    });

    return (
        <>
            <div className="max-w-7xl mx-auto space-y-20 px-1">
                <section className="max-w-xl">
                    <header className="pt-2">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                            Project Information
                        </h2>
                    </header>
                    <form className="space-y-6">
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
                        <div className="flex justify-end">
                            <div>
                                <PrimaryButton>Save</PrimaryButton>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Details;
