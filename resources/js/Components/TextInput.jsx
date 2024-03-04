import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full input-sm border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#3d4451] focus:ring-gray-800 focus:outline-none focus:ring-1 focus:border-gray-600 ' +
                className
            }
            ref={input}
        />
    );
});
