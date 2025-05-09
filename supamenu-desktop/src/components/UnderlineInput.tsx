import React, { JSX } from 'react'

interface UnderlineInputProps {
  label: string
  type?: string
  name: string
  id?: string
  placeholder?: string
}

export default function UnderlineInput({
  label,
  type = 'text',
  name,
  id,
  placeholder,
}: UnderlineInputProps): JSX.Element {
  return (
    <div className="mb-4">
      <label htmlFor={id || name} className="block text-sm font-bold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
      />
    </div>
  )
}