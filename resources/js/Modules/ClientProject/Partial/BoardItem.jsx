import { ArrowUpCircleIcon } from "@/icons";
import { useForm } from "@inertiajs/react";
import { memo } from "react";

export default memo(function BoardItem({boardItem}) {
    const { patch: patchMethod, reset, setData } = useForm({
        sort: 0,
    });
    const handleBoardPosition = async (board, position = "up") => {
        if (position === "up") {
            setData("sort", board.counter + 1);
        } else {
            setData("sort", board.counter - 1);
        }
        return await patchMethod(route("boards.position", { id: board.id }), {
            onSuccess: () => reset(),
        });
    };
    return (
        <tr>
            <td>{boardItem.name}</td>
            <td className="flex">
                <div
                    className="cursor-pointer"
                    onClick={() => handleBoardPosition(boardItem, "up")}
                >
                    <ArrowUpCircleIcon className={`h-6 w-6`} />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        handleBoardPosition(boardItem, "down");
                    }}
                >
                    <ArrowUpCircleIcon className={`h-6 w-6 rotate-180`} />
                </div>
            </td>
        </tr>
    );
});
