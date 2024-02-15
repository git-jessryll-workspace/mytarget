import ErrorInput from "@/Components/ErrorInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { memo, useState } from "react";

export default memo(function AddTimeLogForm({ setShowAddTimeLog }) {
    const { task } = usePage().props;
    const {
        data,
        setData,
        post: postFn,
        errors,
        reset,
    } = useForm({
        time_log: "",
        created_at: null,
        body: "",
        task_id: task.id,
        client_project_id: task.client_project_id,
    });
    const [timeValidate, setTimeValidate] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        postFn(
            route("task_time_logs.store", {
                onSuccess: (res) => {
                    reset(); 
                },
                onError: (err) => {console.error(err)}
            })
        );
        setShowAddTimeLog(false);
    };

    function validateTimeFormat(input) {
        // Define the regular expression pattern for the required format
        const pattern = /^(\d+h)?(\s*\d+m)?$/;

        // Check if the input matches the pattern
        if (pattern.test(input)) {
            console.log("Valid time format!");
            return true;
        } else {
            console.log(
                "Invalid time format. Please use the format 'h hours m minutes', e.g., 3h 5m."
            );
            return false;
        }
    }
    return (
        <>
            <div className="">
                <h3 className="leading-6 font-semibold">Add Time Log</h3>
            </div>
            <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <InputLabel value="Time Log" />
                    <div className="space-y-1">
                        <TextInput
                            value={data.time_log}
                            onChange={(e) => {
                                setData("time_log", e.target.value);
                                if (!validateTimeFormat(e.target.value)) {
                                    setTimeValidate("invalid");
                                } else {
                                    setTimeValidate(null);
                                }
                            }}
                        />
                        <ErrorInput errors={errors} errorKey={"time_log"} />
                            {
                                timeValidate && <p className="text-error text-xs">Invalid input time log</p>
                            }
                        <p className="text-xs italic">  
                            Required format h=hour m=minutes. example 3h 5m
                            equevalent of 3hours and 5minutes.
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Body" />
                    <div>
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full "
                            placeholder="short description of your time log"
                        ></textarea>
                        <ErrorInput errors={errors} errorKey="body" />
                    </div>
                </div>
                <div className="space-y-2">
                    <InputLabel value="Date" />
                    <div>
                        <TextInput type="date" />
                    </div>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-500 flex space-x-2 justify-end">
                    <div className="flex space-x-2 mt-4">
                        <SecondaryButton
                            onClick={() => setShowAddTimeLog(false)}
                        >
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton disabled={timeValidate}>Save</PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
});
