import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Account = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div class="bg-white rounded-lg shadow-lg p-8 h-screen">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">Account Settings</h2>
      <button class="text-sm font-medium text-blue-600 hover:underline">Edit</button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <div class="space-y-2">
        <p class="text-gray-600">Email</p>
        <input type='email' class="text-gray-900" value={currentUser.email}></input>
      </div>
      <div class="space-y-2">
        <p class="text-gray-600">Username</p>
        <input type='text' class="text-gray-900"  value={currentUser.username}></input>
      </div>
      <div class="space-y-2">
        <p class="text-gray-600">Password</p>
        <p class="text-gray-900">********</p>
      </div>
      <div class="space-y-2">
        <p class="text-gray-600">Account Type</p>
        <p class="text-gray-900">Standard</p>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-medium">Help Content</h3>
      <p class="text-gray-600 mt-2">
        Need help with your account settings? Contact our support team for assistance.
      </p>
    </div>
  </div>
  )
}

export default Account