import { useState, useEffect } from 'react';
import { Note } from '../types/Note';

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: '',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (selectedNoteId === id) {
      setSelectedNoteId(null);
    }
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId) || null;

  return {
    notes,
    selectedNote,
    selectedNoteId,
    createNote,
    updateNote,
    deleteNote,
    setSelectedNoteId,
  };
}