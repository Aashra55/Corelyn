'use client';
import React from 'react';

// A simple placeholder SVG for the profile picture
const ProfileSVG = () => (
  <svg
    className="w-48 h-48 text-gray-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 20.993V24H0v-2.997A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <ProfileSVG />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Profile</h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Email:</span>
                <span className="text-gray-900">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
