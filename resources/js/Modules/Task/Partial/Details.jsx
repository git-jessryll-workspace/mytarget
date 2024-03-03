import PriorityLevel from "@/Components/PriorityLevel";
import { usePage } from "@inertiajs/react";
import { memo } from "react";
import { dateFormat } from "@/utils/date";

const Details = () => {
    const { task, time_log_object } = usePage().props;
    const { board, client } = task;
    return (
        <div className="">
            <div className="w-full">
                <h5 className="text-xs md:text-sm font-bold">{client.name}</h5>
                <h3 className="text-teal-600 font-bold text-lg md:text-xl text-balance">
                    {task.name}
                </h3>
                <div className="text-left pt-1 flex items-center space-x-1 text-xs">
                    <dt className="font-bold text-gray-400">
                        Posted @
                    </dt>
                    <dd className="font-semibold">
                        <time time={task.created_at}>
                            {dateFormat(task.created_at)}
                        </time>
                    </dd>
                </div>
            </div>
            <div className="pt-4 w-full lg:w-[80%]">
                <p className="text-balance">{task.description}</p>
            </div>
            <div className="flex items-center flex-wrap gap-5 justify-start pt-5 pb-4">
                {task.priority_level && (
                    <div className="flex items-center">
                        <div className="space-y-1">
                            <dd className="text-xs font-bold opacity-75 antialiased">
                                Priority Level
                            </dd>
                            <div>
                                <PriorityLevel level={task.priority_level} />
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="flex items-center">
                    <div className="space-y-1">
                        <dd className="text-xs font-bold antialiased opacity-75">
                            Board Position
                        </dd>
                        <dt className="font-bold text-teal-600">
                            {board.name}
                        </dt>
                    </div>
                </div> */}
                <div className="flex items-center">
                    <div className="space-y-1">
                        <dd className="text-xs font-bold antialiased opacity-75">
                            Task Status
                        </dd>
                        <dt className="font-bold text-teal-600">
                            {task.task_status}
                        </dt>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="space-y-1">
                        <dd className="text-xs font-bold antialiased opacity-75">
                            Time Spent
                        </dd>
                        <dt className="font-bold">{`${time_log_object.weeks}w ${time_log_object.days}d ${time_log_object.hours}h ${time_log_object.minutes}m`}</dt>
                    </div>
                </div>
                {task.is_archived === 1 && (
                    <div className="space-y-2">
                        <dd className="text-xs font-bold antialiased opacity-75">
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
