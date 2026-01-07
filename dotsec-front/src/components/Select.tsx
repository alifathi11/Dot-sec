import React from 'react';

type EnumLike = Record<string, string>;

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    id: string;
    options: EnumLike;
    label?: string;
};

export default function Select({
    id, 
    options, 
    label, 
    ...props 
}: SelectProps) {

    const values = Object.values(options);

    return (
        <div className="flex flex-col gap-2 w-100">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}

            <select  
                id={id}
                className="border border-gray-300 rounded px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500
                bg-white"
                {...props}
            >  
                {
                    values.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}