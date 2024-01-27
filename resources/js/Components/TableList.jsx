import { memo } from "react";

const TableList = ({ theadObject, items, uniqueKey = "id" }) => {
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
                {items.map((item) => (
                    <tr className="hover" key={item[uniqueKey]}>
                        {Object.entries(item).map(([key, value]) => (
                            <td key={key}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default memo(TableList);
