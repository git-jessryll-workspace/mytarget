import { useForm } from "@inertiajs/react";

import ErrorInput from "@/Components/ErrorInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useEffect } from "react";

const EditContactForm = ({ updateList, setShowEdit, contact }) => {
    const {
        data,
        setData,
        put:putFn,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        email: "",
        contact_number: "",
    });

    useEffect(() => {
        setData({
            name: contact?.name,
            contact_number: contact?.contact_number,
            email: contact?.email,
        });
    }, [contact?.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        putFn(route("contacts.update", { id: contact.id }), {
            onSuccess: (res) => {
                console.log(res);
                updateList(res.props.contacts);
                setShowEdit(false);
            },
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Create Contact
                    </h3>
                </div>
                <div></div>
            </div>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <InputLabel value="Name" />
                    <div>
                        <TextInput
                            id="name"
                            name="name"
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
                    <InputLabel value="Email" />
                    <div>
                        <TextInput
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={(event) =>
                                setData("email", event.target.value)
                            }
                        />
                    </div>
                    <ErrorInput errors={errors} errorKey={"email"} />
                </div>
                <div className="space-y-2">
                    <InputLabel value="Contact Number" />
                    <div>
                        <TextInput
                            id="contact_number"
                            name="contact_number"
                            type="text"
                            value={data.contact_number}
                            onChange={(event) =>
                                setData("contact_number", event.target.value)
                            }
                        />
                        <ErrorInput errors={errors} errorKey="contact_number" />
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

export default EditContactForm;
