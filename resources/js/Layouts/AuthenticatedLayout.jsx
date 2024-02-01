import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";
import {
    BellIcon,
    Cog6Tooth,
    HomeIcon,
    QueueListIcon,
    UserGroupIcon,
    UsersIcon,
    ViewFinderCircleIcon,
} from "@/icons";
import RectangleStackIcon from "@/icons/RectangleStackIcon";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(true);

    const [navigation, setNavigation] = useState([
        {
            name: "Dashboard",
            icon: HomeIcon,
            to: "/dashboard",
        },
        {
            name: "Tasks",
            icon: QueueListIcon,
            to: "/tasks",
        },
        {
            name: "Clients",
            icon: UserGroupIcon,
            to: "/clients",
        },
        {
            name: "Projects",
            icon: RectangleStackIcon,
            to: "/projects",
        },
        {
            name: "Contacts",
            icon: UsersIcon,
            to: "/contacts",
        },
    ]);

    return (
        <>
            <div className="h-[100dvh] bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 flex p-2">
                <div className={`w-0 lg:w-[20%] h-full pt-3 transition-all`}>
                    <div className="flex items-center pb-2 border-b border-gray-300 dark:border-gray-300 mx-6">
                        <div className={`mr-3 -ml-2`}>
                            <ViewFinderCircleIcon
                                className={
                                    "h-11 text-gray-800 dark:text-gray-300"
                                }
                            />
                        </div>
                        <div>
                            <h1 className="text-xl leading-6 font-bold antialiased text-gray-800 dark:text-gray-300">
                                MyTarget
                            </h1>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="px-6">
                            <span className="text-xs font-bold lg:opacity-70">
                                Main
                            </span>
                        </div>
                        <div className="pt-1">
                            <ul className={`space-y-0.5`}>
                                {navigation.map((item) => (
                                    <Link
                                        href={item.to}
                                        key={item.name}
                                        className={`flex mx-3 px-3 cursor-pointer text-sm items-center h-10 hover:rounded-lg hover:font-bold ${
                                            window.location.pathname.startsWith(
                                                item.to
                                            )
                                                ? "bg-teal-600 rounded-lg text-gray-100 dark:text-gray-300 font-bold"
                                                : "text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                                        }`}
                                    >
                                        <item.icon
                                            className={`${
                                                showingNavigationDropdown
                                                    ? "h-5 w-5 mr-3"
                                                    : "h-7 w-7"
                                            }`}
                                        />
                                        <span
                                            className={`${
                                                !showingNavigationDropdown
                                                    ? "hidden"
                                                    : "block"
                                            } transition-all`}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <main className="h-full w-full ml-0 lg:ml-3 bg-gray-100 dark:bg-gray-800 border p-1 border-gray-300 rounded-lg shadow-lg">
                    <nav className="border-b border-gray-300 dark:border-gray-600">
                        <div className="flex justify-between items-center h-12 px-6">
                            <div>{header || null}</div>
                            <div className="flex lg:hidden sm:items-center">
                                <div className="ms-3 relative flex items-center">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md items-center">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-400 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="p-6">{children}</div>
                </main>
                <div className="w-[4%] hidden lg:flex lg:justify-center">
                    <div className="pt-4 space-y-5">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <img
                                    src={
                                        "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png"
                                    }
                                    className="rounded-full h-6 w-6 select-none cursor-pointer"
                                    draggable={false}
                                />
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <div className="cursor-pointer">
                            <BellIcon />
                        </div>
                        <div className="cursor-pointer">
                            <Cog6Tooth />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
