import { memo } from "react";

const PriorityLevel = ({ level }) => {
    const priorityWrap = {
        "High": (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
                High
            </span>
        ),
        "Medium": (
            <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
                Medium
            </span>
        ),
        "Low": (
            <span className="bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold">
                Low
            </span>
        ),
        0: null,
    };
    return priorityWrap[level];
};

export default memo(PriorityLevel);
