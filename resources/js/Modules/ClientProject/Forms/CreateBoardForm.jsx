import { memo } from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default memo(function CreateBoardForm({setShow}) {
    console.log(usePage().props)
    const {client, project_client} = usePage().props;
    const {data, setData, reset, post: postMethod} = useForm({
        name: "",
        client_id: client.id,
        client_project_id: project_client.id
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        await postMethod(route('boards.store'), {
            onSuccess: () => {
                reset();
                setShow(false);
            }
        })
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        Create Board
                    </h3>
                </div>
                <div></div>
            </div>
            <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <InputLabel value="Name" />
                    <div>
                        <TextInput value={data.name} onChange={event => setData('name', event.target.value)}/>
                    </div>
                </div>
                <div className="border-t border-gray-400 dark:border-gray-700 flex justify-end pt-4">
                    <div className="flex space-x-2">
                        <SecondaryButton
                            type="button"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton type="submit">Save</PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
});
