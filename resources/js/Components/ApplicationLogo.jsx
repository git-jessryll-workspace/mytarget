import { ViewFinderCircleIcon } from "@/icons";

export default function ApplicationLogo(props) {
    return (
        <div className="flex items-center pb-2 mx-6">
            <div className={`mr-3 -ml-2`}>
                <ViewFinderCircleIcon
                    className={"h-20 text-gray-800 dark:text-gray-300"}
                />
            </div>
            <div>
                <h1 className="text-4xl leading-6 font-bold antialiased text-gray-800 dark:text-gray-300">
                    MyTarget
                </h1>
            </div>
        </div>
    );
}
