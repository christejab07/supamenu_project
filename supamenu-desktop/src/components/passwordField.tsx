"use client"
import React, { useState } from 'react'
import { EyeOff, Eye } from "lucide-react";

const PasswordField = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
    </div>
  )
}

export default PasswordField