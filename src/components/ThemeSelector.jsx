import React from 'react';
import { Menu } from '@headlessui/react';
import { SwatchIcon } from '@heroicons/react/24/outline';

const themes = [
  { id: 'dark', name: 'Dark', color: 'bg-gray-800' },
  { id: 'navy', name: 'Navy', color: 'bg-blue-900' },
  { id: 'emerald', name: 'Emerald', color: 'bg-emerald-800' },
  { id: 'purple', name: 'Purple', color: 'bg-purple-800' }
];

export function ThemeSelector() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700">
        <SwatchIcon className="w-5 h-5" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {themes.map((theme) => (
            <Menu.Item key={theme.id}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                >
                  <div className={`w-4 h-4 rounded mr-3 ${theme.color}`} />
                  {theme.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}