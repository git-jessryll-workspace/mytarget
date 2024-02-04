import Authenticated from "@/Layouts/AuthenticatedLayout";
import ActivityNote from "@/Modules/Task/Partial/ActivityNote";
import UpdateTaskForm from "@/Modules/Task/Partial/UpdateTaskForm";
import { RectangleStackIcon } from "@/icons";

export default function Show({ task, auth }) {
    const { client_project, acronym, client } = task;
    const pages = [
        {
            name: client_project.project_name,
            href: route("projects.show", { id: client_project.id }),
            current: false,
        },
        {
            name: `#${acronym.acronym}-${acronym.counter}`,
            href: route("tasks.show", { id: task.id }),
            current: true,
        },
    ];
    return (
        <Authenticated
            user={auth.user}
            header={
                <nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div>
                                <a
                                    href={`${route("projects.index")}`}
                                    className="text-gray-400 hover:text-gray-500 flex items-center text-sm font-medium"
                                >
                                    <RectangleStackIcon
                                        className="h-5 w-5 flex-shrink-0 mr-1"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Home</span>
                                    Projects
                                </a>
                            </div>
                        </li>
                        {pages.map((page) => (
                            <li key={page.name}>
                                <div className="flex items-center">
                                    <svg
                                        className="h-5 w-5 flex-shrink-0 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                    <a
                                        href={page.href}
                                        className="ml-4 text-sm font-bold antialiased text-gray-400 hover:text-gray-700"
                                        aria-current={
                                            page.current ? "page" : undefined
                                        }
                                    >
                                        {page.name}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            }
        >
            <div className="h-[calc(100dvh-100px)] overflow-y-auto -mr-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-5 px-1">
                        <UpdateTaskForm />
                    </div>
                    <div className="px-1 mr-0 lg:mr-4">
                        <ActivityNote />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
