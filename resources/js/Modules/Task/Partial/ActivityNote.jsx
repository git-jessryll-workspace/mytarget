import { CheckCircleSolidIcon } from "@/icons";
import { memo } from "react";
const timeline = [
    {
        id: 1,
        content: "Applied to",
        target: "Front End Developer",
        href: "#",
        date: "Sep 20",
        datetime: "2020-09-20",
        icon: CheckCircleSolidIcon,
        iconBackground: "bg-gray-400",
    },
    {
        id: 2,
        content: "Advanced to phone screening by",
        target: "Bethany Blake",
        href: "#",
        date: "Sep 22",
        datetime: "2020-09-22",
        icon: CheckCircleSolidIcon,
        iconBackground: "bg-blue-500",
    },
    {
        id: 3,
        content: "Completed phone screening with",
        target: "Martha Gardner",
        href: "#",
        date: "Sep 28",
        datetime: "2020-09-28",
        icon: CheckCircleSolidIcon,
        iconBackground: "bg-green-500",
    },
    {
        id: 4,
        content: "Advanced to interview by",
        target: "Bethany Blake",
        href: "#",
        date: "Sep 30",
        datetime: "2020-09-30",
        icon: CheckCircleSolidIcon,
        iconBackground: "bg-blue-500",
    },
    {
        id: 5,
        content: "Completed interview with",
        target: "Katherine Snyder",
        href: "#",
        date: "Oct 4",
        datetime: "2020-10-04",
        icon: CheckCircleSolidIcon,
        iconBackground: "bg-green-500",
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const ActivityNote = () => {
    return (
        <section className="border dark:border-gray-700 bg-gray-900 p-6 rounded-md">
            <div>
                <h5 className="text-sm font-semibold">Activity Notes</h5>
            </div>
            <div className="flow-root pt-4">
                <ul role="list" className="-mb-8">
                    {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                            <div className="relative pb-5">
                                {eventIdx !== timeline.length - 1 ? (
                                    <span
                                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-500"
                                        aria-hidden="true"
                                    />
                                ) : null}
                                <div className="relative flex space-x-3 pt-4">
                                    <div>
                                        <span
                                            className={classNames(
                                                event.iconBackground,
                                                "h-8 w-8 rounded-full flex items-center justify-center ring-1 ring-transparent"
                                            )}
                                        >
                                            <event.icon
                                                className="h-5 w-5 text-white"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {event.content}{" "}
                                                <a
                                                    href={event.href}
                                                    className="font-medium text-gray-900"
                                                >
                                                    {event.target}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            <time dateTime={event.datetime}>
                                                {event.date}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <textarea
                    className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-32 w-full "
                    placeholder="Short description"
                ></textarea>
            </div>
        </section>
    );
};

export default memo(ActivityNote);
