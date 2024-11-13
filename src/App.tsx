import React from 'react';
import { NoteList } from './components/NoteList';
import { NoteEditor } from './components/NoteEditor';
import { NewNoteButton } from './components/NewNoteButton';
import { useNotes } from './hooks/useNotes';

function App() {
  const {
    notes,
    selectedNote,
    selectedNoteId,
    createNote,
    updateNote,
    deleteNote,
    setSelectedNoteId,
  } = useNotes();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex h-[calc(100vh-8rem)]">
          <div className="flex flex-col">
            <NewNoteButton onClick={createNote} />
            <NoteList
              notes={notes}
              selectedNoteId={selectedNoteId}
              onNoteSelect={(note) => setSelectedNoteId(note.id)}
              onNoteDelete={deleteNote}
            />
          </div>
          <NoteEditor selectedNote={selectedNote} onNoteUpdate={updateNote} />
        </div>
      </div>
    </div>
  );
}

export default App;