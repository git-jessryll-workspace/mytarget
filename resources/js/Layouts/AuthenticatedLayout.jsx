import { useState, Fragment } from "react";
import Dropdown from "@/Components/Dropdown";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useForm } from "@inertiajs/react";
import {
    Bars3Icon,
    BellIcon,
    Cog6Tooth,
    HomeIcon,
    QueueListIcon,
    UserGroupIcon,
    UsersIcon,
} from "@/icons";
import RectangleStackIcon from "@/icons/RectangleStackIcon";
import XCircleIcon from "@/icons/XCircleIcon";
import DropdownActiontable from "@/Components/DropdownActiontable";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(true);
    const [showNav, setShowNav] = useState(false);
    const { post: postMethod, reset } = useForm({});

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
            <Transition.Root show={showNav} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setShowNav}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-2">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() => setShowNav(false)}
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XCircleIcon
                                                className="h-10 w-10 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 dark:bg-gray-700 py-4">
                                    <div className="px-3">
                                        <div className="dark:bg-transparent p-2 rounded-lg flex justify-between">
                                            <div className="flex space-x-2">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={
                                                            "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png"
                                                        }
                                                        className="rounded-full h-10 w-10 select-none cursor-pointer"
                                                        draggable={false}
                                                    />
                                                </div>
                                                <div className="">
                                                    <a
                                                        className="font-bold leading-6 hover:border-b"
                                                        href="/profile"
                                                    >
                                                        {user.name}
                                                    </a>
                                                    <p className="text-xs">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <DropdownActiontable
                                                    actionObject={{
                                                        profile: {
                                                            action: () => {
                                                                window.location.href =
                                                                    "/profile";
                                                            },
                                                            label: "Profile Settings",
                                                        },
                                                        logout: {
                                                            action: () => {
                                                                postMethod(
                                                                    route(
                                                                        "logout"
                                                                    )
                                                                );
                                                            },

                                                            label: "Logout",
                                                        },
                                                    }}
                                                />
                                            </div>
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="h-[100dvh] bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 flex p-2">
                <div
                    className={`hidden lg:block w-0 lg:w-[20%] h-full pt-3 transition-all`}
                >
                    {/* <div className="flex items-center pb-2 mx-6">
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
                    </div> */}
                    <div className="px-3">
                        <div className="dark:bg-transparent p-2 rounded-lg flex justify-between">
                            <div className="flex space-x-2">
                                <div className="flex justify-center">
                                    <img
                                        src={
                                            "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png"
                                        }
                                        className="rounded-full h-10 w-10 select-none cursor-pointer"
                                        draggable={false}
                                    />
                                </div>
                                <div className="">
                                    <a
                                        className="font-bold leading-6 hover:border-b"
                                        href="/profile"
                                    >
                                        {user.name}
                                    </a>
                                    <p className="text-xs">{user.email}</p>
                                </div>
                            </div>
                            <div>
                                <DropdownActiontable
                                    actionObject={{
                                        profile: {
                                            action: () => {
                                                window.location.href =
                                                    "/profile";
                                            },
                                            label: "Profile Settings",
                                        },
                                        logout: {
                                            action: () => {
                                                postMethod(route("logout"));
                                            },
                                            label: "Logout",
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="px-6">
                            <span className="text-xs font-bold lg:opacity-70">
                                Main
                            </span>
                        </div>
                        <div className="pt-1 relative">
                            <ul className={`space-y-0.5 h-full`}>
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
                <div className="w-full lg:w-[80%] relative">
                    <nav className="flex justify-between items-center pb-3 pt-1 pr-2 md:hidden">
                        <div className="w-full md:w-1/2 flex items-center ">
                            <div className="ml-2 block lg:hidden">
                                <div
                                    className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-300"
                                    onClick={() => {
                                        setShowNav(!showNav);
                                    }}
                                >
                                    <Bars3Icon />
                                </div>
                            </div>
                            <div className="flex relative items-center w-full"></div>
                        </div>
                        <div className="w-[30%] flex justify-end">
                            <div className="flex space-x-3 items-center">
                                <div className="cursor-pointer">
                                    <BellIcon />
                                </div>
                                <div className="cursor-pointer">
                                    <Cog6Tooth />
                                </div>
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
                    </nav>
                    <main className="h-[calc(100dvh-20px)] w-full bg-gray-100 dark:bg-gray-800 border p-1 border-gray-300 rounded-lg shadow-lg">
                        {header && (
                            <div className="border-b border-gray-300 dark:border-gray-600 p-3">
                                {header || null}
                            </div>
                        )}
                        <div className="p-6">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
