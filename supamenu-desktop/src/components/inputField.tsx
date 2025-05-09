import React, { JSX } from 'react'

interface InputFieldProps {
  label: string
  type: string
  name: string
  id?: string
  placeholder?: string
}

export default function InputField({
  label,
  type = 'text',
  name,
  id,
  placeholder,
}: InputFieldProps): JSX.Element {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id || name}
      >
        {label}
      </label>
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10"
      />
    </div>
  )
}