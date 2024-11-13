import React from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export function NoteEditor({ selectedNote, onNoteUpdate, isDark }) {
  if (!selectedNote) {
    return (
      <div className={`flex-1 flex items-center justify-center ${
        isDark ? 'text-gray-400' : 'text-gray-500'
      }`}>
        Select a note or create a new one
      </div>
    );
  }

  const addChecklistItem = () => {
    if (selectedNote.type !== 'checklist') return;
    const newItem = { id: Date.now(), text: '', completed: false };
    onNoteUpdate({
      ...selectedNote,
      content: [...selectedNote.content, newItem]
    });
  };

  const updateChecklistItem = (itemId, updates) => {
    onNoteUpdate({
      ...selectedNote,
      content: selectedNote.content.map(item =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    });
  };

  const deleteChecklistItem = (itemId) => {
    onNoteUpdate({
      ...selectedNote,
      content: selectedNote.content.filter(item => item.id !== itemId)
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      <input
        type="text"
        value={selectedNote.title}
        onChange={(e) => onNoteUpdate({ ...selectedNote, title: e.target.value })}
        className={`p-4 text-xl font-semibold focus:outline-none ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        placeholder="Note title"
      />
      
      {selectedNote.type === 'checklist' ? (
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedNote.content.map(item => (
            <div key={item.id} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => updateChecklistItem(item.id, { completed: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300"
              />
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateChecklistItem(item.id, { text: e.target.value })}
                className={`flex-1 p-2 rounded ${
                  isDark 
                    ? 'bg-gray-700 text-white focus:bg-gray-600' 
                    : 'bg-gray-50 text-gray-900 focus:bg-white'
                } focus:outline-none`}
                placeholder="List item"
              />
              <button
                onClick={() => deleteChecklistItem(item.id)}
                className={`p-1 rounded hover:bg-gray-100 ${
                  isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={addChecklistItem}
            className={`mt-2 flex items-center gap-2 p-2 rounded ${
              isDark 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <PlusIcon className="w-4 h-4" />
            Add Item
          </button>
        </div>
      ) : (
        <textarea
          value={selectedNote.content}
          onChange={(e) => onNoteUpdate({ ...selectedNote, content: e.target.value })}
          className={`flex-1 p-4 resize-none focus:outline-none ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
          placeholder="Start typing your note..."
        />
      )}
    </div>
  );
}