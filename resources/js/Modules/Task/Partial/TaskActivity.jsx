import { usePage } from "@inertiajs/react";
import { memo } from "react";
const TaskActivity = () => {
    const { all_time_logs } = usePage().props;

    return (
        <section className="pt-8">
            <div className="pb-2">
                <h5 className="text-sm leading-6 font-semibold">Time Logs</h5>
            </div>
            <div className="flow-root h-[calc(100dvh-420px)] overflow-y-auto pr-4">
                <ul role="list" className="">
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
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                                {event.body}
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            <time dateTime={event.created_at}>
                                                {event.created_at}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default memo(TaskActivity);
