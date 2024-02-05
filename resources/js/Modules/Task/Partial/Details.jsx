import PriorityLevel from "@/Components/PriorityLevel";
import { usePage } from "@inertiajs/react";
import { memo, useState } from "react";
import TaskActivity from "./TaskActivity";
import { dateFormat } from "@/utils/date";

const Details = () => {
    const { task } = usePage().props;
    const { board, client_project, client } = task;
    return (
        <div className="p-4">
            <div>
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-sm font-bold">{client.name}</h5>
                        <h3 className="text-teal-600 font-bold text-xl text-balance">
                            {task.name}
                        </h3>
                    </div>
                    <div className="flex justify-end w-[20%]">
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
                <h5 className="text-gray-400 font-semibold">{client_project.project_name}</h5>
            </div>
            <div className="pt-6">
                <p className="text-balance">{task.description}</p>
            </div>
            <div className="flex items-center space-x-6 justify-start pt-5">
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
                        <dt className="font-bold">12h</dt>
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
            <div className="pt-10">
                <TaskActivity />
            </div>
        </div>
    );
};

export default memo(Details);
