import React from 'react';
import { PlusIcon, ListBulletIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export function NoteList({ notes, selectedNote, onNoteSelect, onNoteCreate, onNoteDelete, isDark }) {
  return (
    <div className={`w-64 border-r ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200'}`}>
      <div className="p-4 flex gap-2">
        <button
          onClick={() => onNoteCreate('text')}
          className={`flex-1 p-2 rounded-lg flex items-center justify-center gap-1 ${
            isDark ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
          title="New Text Note"
        >
          <DocumentTextIcon className="w-5 h-5" />
          <span className="text-sm">Text</span>
        </button>
        <button
          onClick={() => onNoteCreate('checklist')}
          className={`flex-1 p-2 rounded-lg flex items-center justify-center gap-1 ${
            isDark ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
          title="New Checklist"
        >
          <ListBulletIcon className="w-5 h-5" />
          <span className="text-sm">List</span>
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-14rem)]">
        {notes.map(note => (
          <div
            key={note.id}
            onClick={() => onNoteSelect(note.id)}
            className={`p-4 cursor-pointer ${
              selectedNote?.id === note.id
                ? isDark ? 'bg-gray-700' : 'bg-gray-100'
                : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            } ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <div className="flex items-center gap-2">
              {note.type === 'checklist' ? (
                <ListBulletIcon className="w-4 h-4" />
              ) : (
                <DocumentTextIcon className="w-4 h-4" />
              )}
              <h3 className="font-medium truncate flex-1">{note.title}</h3>
            </div>
            <p className={`text-sm truncate mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {note.type === 'checklist' 
                ? `${note.content.length} items`
                : note.content || 'Empty note...'}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNoteDelete(note.id);
              }}
              className={`mt-2 text-sm ${isDark ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'}`}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}