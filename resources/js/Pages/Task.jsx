import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ChevronLeftIcon, ChevronRightIcon, QueueListIcon } from "@/icons";
import PriorityLevel from "@/Components/PriorityLevel";


const Task = ({ auth, tasks }) => {
    
    return (
        <>
            <Head title="Tasks" />
            <Authenticated
                user={auth.user}
                header={
                    <div className="flex justify-between">
                        <div>
                            <h3
                                className="font-bold text-lg flex items-center"
                                style={{ letterSpacing: "0.5px" }}
                            >
                                <QueueListIcon className="h-6 w-6 mr-3" />
                                Tasks
                            </h3>
                        </div>
                    </div>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 col-span-2">
                        <TextInput placeholder="Search" />
                        <TextInput type="date" />
                        <div>
                            <PrimaryButton className="">Search</PrimaryButton>
                        </div>
                    </div>
                    <div className="flex space-x-3 items-center justify-end">
                        <div className="font-bold text-sm">1 - 10 of 10</div>
                        <div className="join space-x-1">
                            <div>
                                <Link
                                
                                    href={"#"}
                                    className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                >
                                    <ChevronLeftIcon className="h-4 w-4" />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"#"}
                                    className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                >
                                    <ChevronRightIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 h-[calc(100dvh-180px)] -mr-5 pr-3 mt-3 overflow-y-auto">
                    <table className="table table-lg">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task Name</th>
                                <th>Project Name</th>
                                <th>Priority Level</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.data.map((item) => (
                                <tr key={item.id} className="text-sm">
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.client_project.project_name}</td>
                                    <td className="flex justify-center">
                                        <PriorityLevel level={item.priority_level}/>
                                    </td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Authenticated>
        </>
    );
};

export default Task;
