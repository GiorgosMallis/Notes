import React from 'react';
import { Note } from '../types/Note';
import { format } from 'date-fns';
import { TrashIcon } from '@heroicons/react/24/outline';

interface NoteListItemProps {
  note: Note;
  isSelected: boolean;
  onSelect: (note: Note) => void;
  onDelete: (id: string) => void;
}

export function NoteListItem({ note, isSelected, onSelect, onDelete }: NoteListItemProps) {
  return (
    <div
      className={`p-4 cursor-pointer hover:bg-gray-100 transition-colors ${
        isSelected ? 'bg-white shadow-sm' : ''
      }`}
      onClick={() => onSelect(note)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {note.title || 'Untitled'}
          </h3>
          <p className="mt-1 text-sm text-gray-500 truncate">{note.content}</p>
          <p className="mt-1 text-xs text-gray-400">
            {format(new Date(note.updatedAt), 'MMM d, yyyy')}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="ml-2 text-gray-400 hover:text-red-500"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}