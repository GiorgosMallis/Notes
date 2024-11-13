import { useState, useEffect } from 'react';

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = (type = 'text') => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      type,
      content: type === 'checklist' ? [] : '',
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  return {
    notes,
    selectedNote,
    createNote,
    updateNote,
    deleteNote,
    setSelectedNoteId
  };
}