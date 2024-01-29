import { useEffect, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";

import ComboboxSelect from "@/Components/ComboboxSelect";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

const CreateClientContactForm = ({ updateList, setShowCreate }) => {
    const { client, contacts } = usePage().props;
    const {
        data,
        setData,
        post: postFn,
        reset,
    } = useForm({
        contact_id: null,
        client_id: null,
        name: "",
        email: "",
        contact_number: "",
    });
    const [contactOptions, setContactOptions] = useState([]);

    useEffect(() => {
        const getContacts = async () =>
            await axios
                .get(
                    route("utils.contacts.select", {
                        client_id: client?.id,
                    })
                )
                .then((res) => {
                    if (res.status === 200) {
                        setContactOptions(res.data.contacts);
                    }
                });

        setData("client_id", client?.id);
        getContacts();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        postFn(route("client_contacts.store"), {
            onSuccess: (res) => {
                updateList(res.props.contacts);
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
                        Add Client Contact
                    </h3>
                </div>
                <div></div>
            </div>

            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <InputLabel value={"Contact"} />
                    <div>
                        <ComboboxSelect
                            items={contactOptions}
                            keySearch={"name"}
                            cbSelected={(dataSelected) => {
                                setData({
                                    ...data,
                                    contact_id: dataSelected?.id,
                                    name: dataSelected?.name,
                                    email: dataSelected?.email,
                                    contact_number:
                                        dataSelected?.contact_number,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value={"Name"} />
                    <div>
                        <TextInput
                            disabled={true}
                            id="name"
                            name="name"
                            type="text"
                            value={data.name}
                            onChange={(event) =>
                                setData("name", event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Email" />
                    <div>
                        <TextInput
                            disabled={true}
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={(event) =>
                                setData("email", event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Contact Number" />
                    <div>
                        <TextInput
                            disabled={true}
                            id="contact_number"
                            name="contact_number"
                            type="text"
                            value={data.contact_number}
                            onChange={(event) =>
                                setData("contact_number", event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="space-x-2">
                        <SecondaryButton
                            type="button"
                            onClick={() => setShowCreate(false)}
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

export default CreateClientContactForm;
