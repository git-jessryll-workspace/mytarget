import { usePage } from "@inertiajs/react";
import { memo } from "react";
import BoardItem from "./BoardItem";

export default memo(function BoardList() {
    const { project_client } = usePage().props;
    const { boards } = project_client;
    console.log(boards);
    return (
        <>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Board Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {boards
                        .sort((item1, item2) => item2.sort - item1.sort)
                        .map((boardItem, idx) => (
                            <BoardItem
                                key={boardItem.id}
                                boardItem={boardItem}
                                boards={boards}
                                boardUp={boards[idx + 1] || null}
                                boardDown={boards[idx - 1] || null}
                            />
                        ))}
                </tbody>
            </table>
        </>
    );
});
