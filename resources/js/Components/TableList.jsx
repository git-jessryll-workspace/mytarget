import { memo } from "react";

const TableList = ({ theadObject, items, uniqueKey = "id", indexPrio = -1 }) => {
    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    {Object.entries(theadObject).map(([key, value]) => (
                        <th key={key}>{value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.length === 0 && (
                    <tr>
                        <td
                            colSpan={Object.entries(theadObject).length}
                            className="text-center"
                        >
                            <h3>No data available</h3>
                        </td>
                    </tr>
                )}
                {items.map((item) => (
                    <tr
                        className="hover font-semibold text-balance"
                        key={item[uniqueKey]}
                    >
                        {Object.entries(item).map(([key, value], index) => (
                            <td key={key} className={`${indexPrio === index ? "w-[65%]": "w-auto"}`}>
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default memo(TableList);
