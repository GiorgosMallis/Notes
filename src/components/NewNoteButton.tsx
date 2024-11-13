import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface NewNoteButtonProps {
  onClick: () => void;
}

export function NewNoteButton({ onClick }: NewNoteButtonProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        New Note
      </button>
    </div>
  );
}