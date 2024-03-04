export default function TextArea({ ...props }) {
    return (
        <textarea
            {...props}
            className="textarea border border-gray-300 dark:border-gray-700 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 h-24 w-full "
            placeholder="Short note on this client"
        ></textarea>
    );
}
