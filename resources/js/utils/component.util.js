

const priorityWrap = {
    3: (
        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
            High
        </span>
    ),
    2: (
        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs uppercase font-bold">
            Medium
        </span>
    ),
    1: (
        <span className="bg-gray-500 px-2 py-1 rounded-full text-xs uppercase font-bold">
            Low
        </span>
    ),
    0: null,
};

export {
    priorityWrap
}