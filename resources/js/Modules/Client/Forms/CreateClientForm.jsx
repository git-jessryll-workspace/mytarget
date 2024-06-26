import { useForm } from "@inertiajs/react";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import ErrorInput from "@/Components/ErrorInput";
import TextArea from "@/Components/TextArea.jsx";

const CreateClientForm = ({ updateList, setShowCreate }) => {
    const {
        data,
        setData,
        post: postFn,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        date_started: "",
        date_ended: "",
        position: "",
        note: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        postFn(route("clients.store"), {
            onSuccess: (res) => {
                setShowCreate(false);
                updateList(res.props.clients);
                reset();
            },
        });
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Create Client
                    </h3>
                </div>
                <div></div>
            </div>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <InputLabel value={"Client name"} />
                    <div>
                        <TextInput
                            id="client_name"
                            name="client_name"
                            type="text"
                            value={data.name}
                            onChange={(event) =>
                                setData("name", event.target.value)
                            }
                        />
                    </div>
                    <ErrorInput errors={errors} errorKey="name" />
                </div>
                <div className="space-y-2">
                    <InputLabel value="Position" />
                    <div>
                        <TextInput
                            id="position"
                            name="position"
                            value={data.position}
                            onChange={(event) =>
                                setData("position", event.target.value)
                            }
                        />
                    </div>
                    {errors.position && (
                        <p className="text-sm text-error">{errors.position}</p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="space-y-2">
                        <InputLabel value={"Date started"} />
                        <div>
                            <TextInput
                                type="date"
                                id="date_started"
                                name="date_started"
                                value={data.date_started}
                                onChange={(event) =>
                                    setData("date_started", event.target.value)
                                }
                            />
                            {errors.date_started && (
                                <p className="text-sm text-error">
                                    {errors.date_started}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <InputLabel value={"Date ended"} />
                        <div>
                            <TextInput
                                type="date"
                                id="date_ended"
                                name="date_ended"
                                value={data.date_ended}
                                onChange={(event) =>
                                    setData("date_ended", event.target.value)
                                }
                            />
                        </div>
                        {errors.date_ended && (
                            <p className="text-sm text-error">
                                {errors.date_ended}
                            </p>
                        )}
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Note" />
                    <div>
                        <TextArea
                            value={data.note}
                            onChange={(event) =>
                                setData("note", event.target.value)
                            }
                            placeholder="Short note on this client"
                        />
                    </div>
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
};

export default CreateClientForm;
