import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { ChevronLeftIcon, ChevronRightIcon, QueueListIcon } from "@/icons";

const items = [
    {
        id: 1,
        name: "Cover Photo",
        project_key: "CMS-2",
        priority_level: 1,
        status: "PENDING",
    },
];

const priorityWrap = {
    0: "bg-red-500",
    1: "bg-yellow-600",
    2: "bg-green-300"
};

const priorityLabel = {
    0: "High",
    1: "Medium",
    2: "Low",
    3: ""
}

const Task = ({ auth }) => {
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
                <div className="pt-4">
                    <table className="table table-lg">
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="text-sm">
                                    <td>{item.project_key}</td>
                                    <td>{item.name}</td>
                                    <td className="flex justify-center">
                                        <div
                                            className={`${
                                                priorityWrap[
                                                    item.priority_level
                                                ]
                                            } border font-bold text-xs px-3 py-1 rounded-full text-gray-300`}
                                        >
                                            Test
                                        </div>
                                    </td>
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
