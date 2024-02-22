import {ArrowUpCircleIcon} from "@/icons";
import {useForm} from "@inertiajs/react";
import {memo} from "react";

export default memo(function BoardItem({boardItem}) {
    const {patch: patchMethod, reset, setData} = useForm({});
    const handleBoardPosition = async (board, position = "up") => {
console.log(board)
        await patchMethod(route("boards.position", [
            {
                board_id: boardItem.id
            },
            {
                sort: position === 'up' ? board.sort+1 : board.sort-1
            }]), {
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
                    <ArrowUpCircleIcon className={`h-6 w-6`}/>
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        handleBoardPosition(boardItem, "down");
                    }}
                >
                    <ArrowUpCircleIcon className={`h-6 w-6 rotate-180`}/>
                </div>
            </td>
        </tr>
    );
});
