import React, { useState, useEffect } from 'react';
import { Note } from '../types/Note';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

interface NoteEditorProps {
  selectedNote: Note | null;
  onNoteUpdate: (note: Note) => void;
}

export function NoteEditor({ selectedNote, onNoteUpdate }: NoteEditorProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedNote]);

  const handleUpdate = () => {
    if (selectedNote) {
      onNoteUpdate({
        ...selectedNote,
        title,
        content,
        updatedAt: new Date().toISOString(),
      });
    }
  };

  if (!selectedNote) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <p className="text-gray-500">Select a note or create a new one</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <CalendarIcon className="h-4 w-4 mr-1" />
          Created {format(new Date(selectedNote.createdAt), 'MMMM d, yyyy')}
          {selectedNote.updatedAt !== selectedNote.createdAt && (
            <span className="ml-2">
              • Updated {format(new Date(selectedNote.updatedAt), 'MMMM d, yyyy')}
            </span>
          )}
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleUpdate();
          }}
          placeholder="Note title"
          className="w-full text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-2 py-1"
        />
      </div>
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          handleUpdate();
        }}
        placeholder="Start writing your note..."
        className="flex-1 p-4 text-gray-800 focus:outline-none resize-none"
      />
    </div>
  );
}