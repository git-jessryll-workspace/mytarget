import SelectOption from "@/Components/SelectOption";
import { usePage } from "@inertiajs/react";

const Details = () => {
    const { project_client } = usePage().props;
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-xl">
                        {project_client.project_name}
                    </h3>
                </div>
                <div>
                    <SelectOption
                        items={[
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
                        ]}
                        cbSelected={(data) => {console.log(data)}}
                        
                    />
                </div>
            </div>
            <div className="pt-4">
                <p>{project_client.description}</p>
            </div>
        </>
    );
};

export default Details;
