import { CheckCircleIcon, ClockIcon, QuestionMarkIcon } from "@/icons";
import StopIcon from "@/icons/StopIcon";
import XCircleIcon from "@/icons/XCircleIcon";
import { memo } from "react";


export default memo(function TaskStatus({status}) {
    const icons = {
        "Backlog": <QuestionMarkIcon className="h-5 w-5"/>,
        "Done": <CheckCircleIcon className="h-5 w-5"/>,
        "In Progress": <ClockIcon className="h-5 w-5"/>,
        "Todo": <StopIcon className="h-5 w-5"/>,
        "Canceled": <XCircleIcon className="h-5 w-5"/>
    }
    return <>
        <div className="flex space-x-1 items-center">
            {
                icons[status]
            }
            <div>{status}</div>
        </div>
    </>
})