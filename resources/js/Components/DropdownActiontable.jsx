import {memo} from "react";
import Dropdown from "./Dropdown";
import EllipsisVerticalIcon from "@/icons/EllipsisVerticalIcon";

export default memo(function DropdownActionTable({
                                                     actionObject,
                                                     childIcon = false,
                                                 }) {
    return (
        <div className="flex justify-center">
            <Dropdown>
                <Dropdown.Trigger>
                    {childIcon || (
                        <EllipsisVerticalIcon className="cursor-pointer h-6 w-6"/>
                    )}
                </Dropdown.Trigger>
                <Dropdown.Content>
                    {Object.entries(actionObject).map(([key, data]) => (
                        <div
                            key={key}
                            className={`block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:text-gray-100 dark:text-gray-200 hover:bg-teal-600 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${data?.disabled === true ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                            onClick={data.action}
                        >
                            {data.label}
                        </div>
                    ))}
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
});
