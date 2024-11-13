import React from 'react';
import { Note } from '../types/Note';
import { NoteListItem } from './NoteListItem';

interface NoteListProps {
  notes: Note[];
  onNoteSelect: (note: Note) => void;
  onNoteDelete: (id: string) => void;
  selectedNoteId: string | null;
}

export function NoteList({ notes, onNoteSelect, onNoteDelete, selectedNoteId }: NoteListProps) {
  return (
    <div className="bg-gray-50 w-72 overflow-y-auto border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Notes</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {notes.map((note) => (
          <NoteListItem
            key={note.id}
            note={note}
            isSelected={selectedNoteId === note.id}
            onSelect={onNoteSelect}
            onDelete={onNoteDelete}
          />
        ))}
      </div>
    </div>
  );
}