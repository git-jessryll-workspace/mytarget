import DropdownActiontable from "@/Components/DropdownActiontable";
import Modal from "@/Components/Modal";
import { EllipsisVerticalIcon } from "@/icons";
import { usePage } from "@inertiajs/react";
import { memo, useState } from "react";
import DeleteTimeLogForm from "../Forms/DeleteTimeLogForm";
const TaskActivity = () => {
    const [showDelete, setShowDelete] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);
    const { all_time_logs } = usePage().props;

    return (
        <>
            <section>
                <div className="pb-2">
                    <h5 className="text-sm leading-6 font-semibold">
                        Time Logs
                    </h5>
                </div>
                <div className="flow-root overflow-y-auto">
                    <ul role="list">
                        <div className="block lg:hidden">test asd</div>
                        {all_time_logs.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-5">
                                    {eventIdx !== all_time_logs.length - 1 && (
                                        <span
                                            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-500"
                                            aria-hidden="true"
                                        />
                                    )}
                                    <div className="relative flex space-x-3 pt-1">
                                        <div>
                                            <span
                                                className={
                                                    "h-3 w-3 mt-2.5 ml-2.5 rounded-full flex items-center justify-center ring-1 ring-transparent bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-300"
                                                }
                                            ></span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div className="w-[80%]">
                                                <p className="text-sm line-clamp-2 text-balance text-gray-500 dark:text-gray-300">
                                                    {event.body ||
                                                        "No description"}
                                                </p>
                                                <span className="text-sm font-bold">
                                                    {event.time_log}
                                                </span>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-500 flex text-balance">
                                                <time
                                                    dateTime={event.created_at}
                                                >
                                                    {event.created_at}
                                                </time>
                                                <DropdownActiontable
                                                    actionObject={{
                                                        delete: {
                                                            action: () => {
                                                                setShowDelete(
                                                                    true
                                                                );
                                                                setSelectedLog(
                                                                    event
                                                                );
                                                            },
                                                            label: "Delete",
                                                        },
                                                    }}
                                                    childIcon={
                                                        <EllipsisVerticalIcon className="cursor-pointer h-6 w-6" />
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Modal show={showDelete}>
                <DeleteTimeLogForm
                    timeLogId={selectedLog?.id}
                    setShowDelete={setShowDelete}
                />
            </Modal>
        </>
    );
};

export default memo(TaskActivity);
