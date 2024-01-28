import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import ComboboxSelect from "@/Components/ComboboxSelect";
import ErrorInput from "@/Components/ErrorInput";

export default function EditProjectForm({
    updateList,
    setShowEdit,
    project,
    skipClientSelect = false,
}) {
    const {
        data,
        setData,
        put: putFn,
        processing,
        errors,
        reset,
    } = useForm({
        project_name: "",
        description: "",
        active: true,
        client_id: null,
    });
    const [clientOptions, setClientOptions] = useState([]);

    useEffect(() => {
        axios.get(route("utils.clients.select")).then((res) => {
            if (res.status === 200) {
                setClientOptions(
                    res.data.clients.map((i) => ({
                        ...i,
                        label: i.name,
                        value: i.id,
                    }))
                );
            }
        });
    }, []);

    useEffect(() => {
        if (project) {
            const { project_name, description, active, client_id } = project;
            setData({
                project_name,
                description,
                active,
                client_id,
            });
        }
    }, [project?.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        putFn(
            route("projects.update", {
                id: project.id,
            }),
            {
                onSuccess: (res) => {
                    updateList(res.props.projects);
                    setShowEdit(false);
                },
            }
        );
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Edit Project
                    </h3>
                </div>
                <div></div>
            </div>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                {skipClientSelect && (
                    <div className="space-y-2">
                        <InputLabel value={"Client"} />
                        <div>
                            <ComboboxSelect
                                items={clientOptions}
                                keySearch={"name"}
                                cbSelected={(dataSelected) =>
                                    setData("client_id", dataSelected?.id)
                                }
                                selectedItem={clientOptions.find(
                                    (item) => item.id === data?.client_id
                                )}
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
                    <ErrorInput errors={errors} errorKey="project_name" />
                </div>
                <div className="space-y-2">
                    <InputLabel value={"Description"} />
                    <div>
                        <textarea
                            value={data.description}
                            onChange={(event) =>
                                setData("description", event.target.value)
                            }
                            className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full "
                            placeholder="Short description on this client"
                        ></textarea>
                    </div>
                    <ErrorInput errors={errors} errorKey="description" />
                </div>

                <div className="flex justify-end">
                    <div className="space-x-2">
                        <SecondaryButton
                            onClick={() => {
                                setShowEdit(false);
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
