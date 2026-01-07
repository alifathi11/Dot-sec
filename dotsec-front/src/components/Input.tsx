import React from "react";

type InputType = "text" | "password" | "email";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    name: string;
    type: InputType;
    value: string;
    label?: string;
};


export default function Input({
    id,
    name,
    type,
    value,
    label,
    autoComplete = "off",
    ...props
}: InputProps) {
    return (
        <div className="flex flex-col gap-2 w-200">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}

            <input
                id={id}
                name={name}
                type={type}
                value={value}
                autoComplete={autoComplete}
                className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
        </div>
    );
}
