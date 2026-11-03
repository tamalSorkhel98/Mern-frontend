import React from 'react'
import { useAuthContext } from '../../context/Auth.context'

const Profile = () => {
  const context=useAuthContext()
  const {user}=context
  console.log(user);
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-4 py-12 sm:px-6">

      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Header */}
        <div className="relative h-40 bg-gradient-to-r from-indigo-600 to-purple-600 sm:h-52">
          <div className="absolute -bottom-14 left-6 sm:left-10">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-4xl font-bold uppercase text-indigo-600 shadow-lg sm:h-32 sm:w-32">
              {user.name.charAt(0)}
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-8 pt-20 sm:px-10">

          {/* Name and Role */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-extrabold capitalize text-gray-800 sm:text-3xl">
                {user.name}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Welcome to your account
              </p>
            </div>

            <span className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold capitalize text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              {user.role}
            </span>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-100"></div>

          {/* Account Information */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-gray-800">
              Account Information
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  Full Name
                </p>

                <p className="mt-2 break-words text-lg font-bold capitalize text-gray-800">
                  {user.name}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">
                  Email Address
                </p>

                <p className="mt-2 break-all text-base font-bold text-gray-800">
                  {user.email}
                </p>
              </div>

              {/* Role */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Account Type
                </p>

                <p className="mt-2 text-lg font-bold capitalize text-gray-800">
                  {user.role} Account
                </p>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white">
            <h3 className="text-lg font-bold">
              Welcome, {user.name}!
            </h3>

            <p className="mt-1 text-sm text-indigo-100">
              Manage your account and keep your profile information up to date.
            </p>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Profile