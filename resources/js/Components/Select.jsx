export default function Select({options, ...props}) {
    return <select
        {...props}
        className="dark:bg-[#3d4451] text-sm w-full py-2 px-1 rounded-md border border-gray-300 dark:border-gray-700"
    >
        {
            options.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)
        }
    </select>
}
