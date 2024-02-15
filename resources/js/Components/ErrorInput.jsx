import { memo } from "react";

export default memo(function ErrorInput({ errors, errorKey }) {
    
    return (
        errors[errorKey] && (
            <p className="text-sm text-error">{errors[errorKey]}</p>
        )
    );
});
