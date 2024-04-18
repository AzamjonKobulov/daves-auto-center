import React from 'react';
import Button from '../components/shared/Button';

const page = () => {
  return (
    <div className="space-y-8 lg:space-y-9">
      <h1 className="text-2xl lg:text-40 font-bold text-center capitalize">
        my profile
      </h1>
      <form
        action="#"
        className="grid sm:grid-cols-2 gap-7 text-17 text-brand-dark"
      >
        <label htmlFor="firstName" className="flex flex-col">
          First name*
          <input
            type="text"
            id="firstName"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <label htmlFor="lastName" className="flex flex-col">
          Last name*
          <input
            type="text"
            id="lastName"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <label htmlFor="displayName" className="flex flex-col">
          Display name*
          <input
            type="text"
            id="displayName"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
          <p className="text-sm mt-1">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </label>
        <label htmlFor="email" className="flex flex-col">
          Email address*
          <input
            type="email"
            id="email"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <div className="sm:col-span-2 text-lg border-t border-brand-gray pt-7 lg:pt-2.5">
          <p>Password change</p>
        </div>
        <label htmlFor="currentPassword" className="flex flex-col">
          Current password
          <input
            type="text"
            id="currentPassword"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <label htmlFor="newPassword" className="flex flex-col">
          New password
          <input
            type="text"
            id="newPassword"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <label htmlFor="confirmNewPassword" className="flex flex-col">
          Confirm new password
          <input
            type="text"
            id="confirmNewPassword"
            className="h-52 outline-brand-blue-1/70 border border-brand-gray rounded-10 px-4"
          />
        </label>
        <div className="flex items-end">
          <Button blue className="h-52 w-full">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
