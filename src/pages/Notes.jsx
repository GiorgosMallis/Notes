import React from 'react';
import { NoteList } from '../components/NoteList';
import { NoteEditor } from '../components/NoteEditor';
import { ThemeToggle } from '../components/ThemeToggle';
import { ThemeSelector } from '../components/ThemeSelector';
import { useNotes } from '../hooks/useNotes';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export function Notes() {
  const { notes, selectedNote, selectedNoteId, createNote, updateNote, deleteNote, setSelectedNoteId } = useNotes();
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Notes
            </h1>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {user.username}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSelector />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={logout}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
        <div className={`rounded-lg shadow-lg overflow-hidden flex h-[calc(100vh-10rem)] ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <NoteList
            notes={notes}
            selectedNoteId={selectedNoteId}
            onNoteSelect={setSelectedNoteId}
            onNoteCreate={createNote}
            onNoteDelete={deleteNote}
            isDark={isDark}
          />
          <NoteEditor
            selectedNote={selectedNote}
            onNoteUpdate={updateNote}
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
}