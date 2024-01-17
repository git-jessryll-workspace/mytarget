import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import {
    BellIcon,
    Cog6Tooth,
    HomeIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    ViewFinderCircleIcon,
} from "@/icons";

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
            name: "Clients",
            icon: UserGroupIcon,
            to: "/clients",
        },
    ]);

    return (
        <div className="h-[100dvh] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 p-2 flex">
            {/* {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )} */}
            <div
                className={`${
                    showingNavigationDropdown ? "w-[17%]" : "w-[50px]"
                } h-full pt-3 rounded-xl`}
            >
                <div className="flex items-center pb-2 border-b border-gray-300 dark:border-gray-500 mx-6">
                    <ViewFinderCircleIcon className="h-11 mr-3" />
                    <div>
                        <h1 className="text-2xl leading-6 font-bold antialiased">
                            MyTarget
                        </h1>
                    </div>
                </div>
                <div className="mx-6 my-4 border-gray-300 rounded-md border shadow-sm flex items-center">
                    <MagnifyingGlassIcon className={"h-5 w-5 ml-2"} />
                    <input className="w-full focus:outline-none focus:ring-0 text-sm border-none bg-transparent -ml-2" />
                </div>
                <div className="">
                    <div className="px-6">
                        <span className="text-sm font-bold opacity-50">
                            Main
                        </span>
                    </div>
                    <div className="pt-1">
                        <ul className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    to={item.to}
                                    key={item.name}
                                    className="flex mx-3 px-3 cursor-pointer items-center text-normal h-10 hover:rounded-lg hover:bg-gray-300 hover:text-gray-700 hover:font-bold"
                                >
                                    <item.icon className="h-5 w-5 mr-3" />
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <nav className="flex justify-end pb-6 pt-2">
                    <div className="flex space-x-2 pr-4">
                        <button>
                            <BellIcon className="w-7 h-7" />
                        </button>
                        <button>
                            <Cog6Tooth className="w-7 h-7" />
                        </button>
                    </div>
                </nav>
                {/* <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
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

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <main className="border h-[90dvh] border-gray-400 shadow-2xl ml-3 p-6 rounded-md mr-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
