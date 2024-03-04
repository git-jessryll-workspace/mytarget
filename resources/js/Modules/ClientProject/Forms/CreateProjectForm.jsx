import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import ComboboxSelect from "@/Components/ComboboxSelect";
import ErrorInput from "@/Components/ErrorInput";
import TextArea from "@/Components/TextArea.jsx";

export default function CreateProjectForm({ updateList, setShowCreate }) {
    const client = usePage().props?.client;
    const {
        data,
        setData,
        post: postFn,
        processing,
        errors,
        reset,
    } = useForm({
        project_name: "",
        description: "",
        active: true,
        client_id: client?.id || null,
    });
    const [clientOptions, setClientOptions] = useState([]);

    useEffect(() => {
        axios.get(route("utils.clients.select")).then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                setClientOptions(res.data.clients);
            }
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await postFn(route("projects.store"), {
            onSuccess: (res) => {
                updateList(res.props.projects);
                setShowCreate(false);
                reset();
            },
        });
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Create Project
                    </h3>
                </div>
                <div></div>
            </div>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                {!client && (
                    <div className="space-y-2">
                        <InputLabel value={"Client"} />
                        <div>
                            <ComboboxSelect
                                items={clientOptions}
                                keySearch={"name"}
                                cbSelected={(dataSelected) =>
                                    setData("client_id", dataSelected?.id)
                                }
                            />
                        </div>
                        <ErrorInput errors={errors} errorKey="client_id" />
                    </div>
                )}
                <div className="space-y-2">
                    <InputLabel value={"Project name"} />
                    <div>
                        <TextInput
                            id="project_name"
                            name="project_name"
                            type="text"
                            value={data.project_name}
                            onChange={(event) =>
                                setData("project_name", event.target.value)
                            }
                        />
                    </div>
                    <ErrorInput errors={errors} errorKey={"project_name"} />
                </div>
                <div className="space-y-2">
                    <InputLabel value={"Description"} />
                    <div>
                        <TextArea
                            value={data.description}
                            onChange={(event) =>
                                setData("description", event.target.value)
                            }
                            placeholder="Short description on this client"
                        />
                    </div>
                    <ErrorInput errors={errors} errorKey={"description"}/>
                </div>

                <div className="flex justify-end">
                    <div className="space-x-2">
                        <SecondaryButton
                            onClick={() => {
                                setShowCreate(false);
                            }}
                            type="button"
                        >
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
}
