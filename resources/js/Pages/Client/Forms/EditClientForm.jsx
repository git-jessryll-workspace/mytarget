import { memo, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default memo(function EditClientForm({
    client,
    updateClientList,
    resetSelected,
}) {
    const { data, setData, put: putFn, processing, errors, reset } = useForm({
        name: "",
        date_started: "",
        date_ended: "",
        position: "",
        note: "",
        active: true,
    });

    useEffect(() => {
        setData({
            name: client?.name || "",
            date_started: client?.date_started || "",
            date_ended: client?.date_ended || "",
            position: client?.position || "",
            note: client?.note || "",
            active: client?.active || true,
        });
    }, [client?.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        putFn(route("clients.update", { id: client.id }), {
            onSuccess: (res) => {
                updateClientList(res.props.clients);
                resetSelected();
                reset();
            },
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Edit Client {client?.name || ""}
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
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Note" />
                    <div>
                        <textarea
                            value={data.note}
                            onChange={(event) =>
                                setData("note", event.target.value)
                            }
                            className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full "
                            placeholder="Short note on this client"
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="space-x-2">
                        <SecondaryButton
                            onClick={() => {
                                resetSelected();
                            }}
                            type="button"
                        >
                            Close
                        </SecondaryButton>
                        <PrimaryButton type="submit">
                            Submit
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
});
