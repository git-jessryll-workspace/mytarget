import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { ArchiveXIcon, ArrowUpCircleIcon, PencilSquareIcon } from "@/icons";
import XCircleIcon from "@/icons/XCircleIcon";
import { useForm } from "@inertiajs/react";
import { memo, useState } from "react";

export default memo(function BoardItem({ boardItem, boardUp, boardDown }) {
    const { patch: patchMethod, reset } = useForm({});
    const [editable, setEditable] = useState(null);
    const [showArchive, setShowArchive] = useState(false);
    const [boardText, setBoardText] = useState(boardItem.name);

    const handleBoardPosition = async (position = "up") => {
        let data;

        if (position === "up") {
            data = [
                {
                    board_from_id: boardItem.id,
                },
                {
                    board_to_id: boardUp.id || boardItem.id,
                },
            ];
        } else {
            data = [
                {
                    board_from_id: boardItem.id,
                },
                {
                    board_to_id: boardDown.id || boardItem.id,
                },
            ];
        }

        await patchMethod(route("boards.position", data), {
            onSuccess: () => reset(),
        });
        
    };

    const handleArchiveBoard = async (event) => {
        event.preventDefault();

        await patchMethod(route('boards.archive', [{board_id: boardItem.id}]), {onSuccess: () => reset()})
        
    }
    const updateBoardName = async () => {
        await patchMethod(
            route("boards.name", [
                {
                    board_id: boardItem.id,
                    name: boardText,
                },
            ]),
            {
                onSuccess: () => reset(),
            }
        );
    };
    return (
        <>
            <tr>
                <td className="w-[75%]">
                    {editable ? (
                        <div className="flex space-x-2 items-center">
                            <TextInput
                                value={boardText}
                                onChange={(event) =>
                                    setBoardText(event.target.value)
                                }
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        setEditable(false);
                                        updateBoardName();
                                    }
                                }}
                            />
                            <div
                                className="cursor-pointer hover:opacity-75"
                                onClick={() => {
                                    setEditable(false);
                                    setBoardText(boardItem.name);
                                }}
                            >
                                <XCircleIcon />
                            </div>
                        </div>
                    ) : (
                        <span
                            className="cursor-pointer"
                            onClick={() => setEditable(true)}
                        >
                            {boardText}
                        </span>
                    )}
                </td>
                <td className="flex space-x-1">
                    <div
                        className={`${
                            boardUp
                                ? "cursor-pointer hover:opacity-75"
                                : "cursor-not-allowed opacity-50"
                        }`}
                        onClick={() => {
                            if (boardUp) {
                                handleBoardPosition("up");
                            }
                        }}
                    >
                        <ArrowUpCircleIcon className={`h-6 w-6`} />
                    </div>
                    <div
                        className={`${
                            boardDown
                                ? "cursor-pointer hover:opacity-75"
                                : "cursor-not-allowed opacity-50"
                        }`}
                        onClick={() => {
                            if (boardDown) {
                                handleBoardPosition("down");
                            }
                        }}
                    >
                        <ArrowUpCircleIcon className={`h-6 w-6 rotate-180`} />
                    </div>
                    <div
                        className="cursor-pointer hover:opacity-75"
                        onClick={() => setEditable(true)}
                    >
                        <PencilSquareIcon />
                    </div>
                    <div className="cursor-pointer hover:opacity-75" onClick={() => setShowArchive(true)}>
                        <ArchiveXIcon className="w-6 h-6 text-red-500 dark:text-red-400" />
                    </div>
                </td>
            </tr>
            <Modal show={showArchive} maxWidth="sm">
                <div>
                    <div className="flex justify-between items-center pb-4">
                        <div>
                            <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
                                Confirm to arvhice the board
                            </h3>
                        </div>
                        <div></div>
                    </div>
                    <form onSubmit={handleArchiveBoard}>
                        <div className="pb-6">
                            <p className="">
                                All tasks that connected to this board will be archived.
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex space-x-2">
                                <SecondaryButton
                                    type="button"
                                    onClick={() => setShowArchive(false)}
                                >
                                    Cancel
                                </SecondaryButton>
                                <DangerButton type="submit">
                                    Archive
                                </DangerButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
});
