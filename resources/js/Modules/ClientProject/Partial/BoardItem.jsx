import {ArrowUpCircleIcon} from "@/icons";
import {useForm} from "@inertiajs/react";
import {memo} from "react";

export default memo(function BoardItem({boardItem, boardUp, boardDown}) {
    console.log(boardUp, boardItem, boardDown)
    const {patch: patchMethod, reset, setData} = useForm({});
    const handleBoardPosition = async (board, position = "up") => {

        let data;

        if (position === 'up') {
            data = [{
                board_from_id: board.id
            },
                {
                    board_to_id: boardUp.id || board.id
                }]
        } else {
            data = [{
                board_from_id: board.id
            },
                {
                    board_to_id: boardDown.id || board.id
                }]
        }

        await patchMethod(route("boards.position", data), {
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
