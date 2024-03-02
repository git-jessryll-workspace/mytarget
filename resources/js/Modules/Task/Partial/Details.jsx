import PriorityLevel from "@/Components/PriorityLevel";
import { usePage } from "@inertiajs/react";
import { memo } from "react";
import { dateFormat } from "@/utils/date";

const Details = () => {
    const { task, time_log_object } = usePage().props;
    const { board, client } = task;
    return (
        <div className="">
            <div>
                <div className="flex justify-between">
                    <div className="w-full md:w-auto">
                        <h5 className="text-sm font-bold">{client.name}</h5>
                        <h3 className="text-teal-600 font-bold text-xl text-balance">
                            {task.name}
                        </h3>
                        <div className="text-left flex items-center space-x-2 lg:hidden">
                            <dt className="text-xs font-bold text-gray-400">Due Date</dt>
                            <dd className="text-sm font-semibold">
                                <time time={task.created_at}>
                                    {dateFormat(task.created_at)}
                                </time>
                            </dd>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-end w-0 md:w-[20%]">
                        <div className="text-right">
                            <dt className="text-xs font-bold text-gray-400">Due Date</dt>
                            <dd className="text-sm font-semibold">
                                <time time={task.created_at}>
                                    {dateFormat(task.created_at)}
                                </time>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <p className="text-balance">{task.description}</p>
            </div>
            <div className="flex md:hidden items-center space-x-6 justify-start pt-5">
                <div className="flex items-center">
                    <div className="space-y-2">
                        <dd className="text-xs font-bold antialiased">
                            Priority Level
                        </dd>
                        <div>
                            <PriorityLevel level={task.priority_level} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="space-y-2">
                        <dd className="text-xs font-bold antialiased">
                            Task Position
                        </dd>
                        <dt className="font-bold text-teal-600">{board.name}</dt>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="space-y-2">
                        <dd className="text-xs font-bold antialiased">Time Spent</dd>
                        <dt className="font-bold">{`${time_log_object.weeks}w ${time_log_object.days}d ${time_log_object.hours}h ${time_log_object.minutes}m`}</dt>
                    </div>
                </div>
                {task.is_archived === 1 && (
                    <div className="space-y-2">
                        <dd className="text-xs font-bold antialiased">
                            Archived Status
                        </dd>
                        <dt className="text-gray-400 font-bold uppercase text-xs rounded-md border px-3 py-1 border-gray-300">
                            Archived
                        </dt>
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(Details);
