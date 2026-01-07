import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    id: string;
    name: string,
    value: string;
    label?: string;
}

export default function TextArea({ 
    id, 
    name, 
    value, 
    label, 
    autoComplete = "off",
    ...props 
}: TextAreaProps) {
    return (
        <div className="flex flex-col gap-2 w-200">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}

            <textarea 
                {...props}
                id={id}
                name={name}
                value={value}
                autoComplete={autoComplete}
                className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                {...props}
            /> 
        </div>
    );
}
