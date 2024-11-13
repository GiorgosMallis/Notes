import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface EmptyStateProps {
  onCreateNote: () => void;
}

export function EmptyState({ onCreateNote }: EmptyStateProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 text-center">
      <DocumentTextIcon className="h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
      <p className="text-sm text-gray-500 mb-4">Get started by creating your first note</p>
      <button
        onClick={onCreateNote}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create a note
      </button>
    </div>
  );
}