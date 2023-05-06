import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    async function getNotes() {
      const db = await openDB('notes', 1, {
        upgrade(db) {
          db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
        },
      });
      const tx = db.transaction('notes', 'readonly');
      const store = tx.objectStore('notes');
      const items = await store.getAll();
      setNotes(items);
    }
    getNotes();
  }, []);

  async function addNote() {
    const db = await openDB('notes', 1);
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    const note = { title, content };
    const id = await store.add(note);
    setNotes([...notes, { id, ...note }]);
  }

  async function updateNoteContent(id, content) {
    const db = await openDB('notes', 1);
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    const note = await store.get(id);
    note.content = content;
    await store.put(note);
  }

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <textarea
            value={note.content}
            onChange={e => updateNoteContent(note.id, e.target.value)}
          ></textarea>
        </div>
      ))}
      <h3>Add Note</h3>
      <form
        onSubmit={async event => {
          event.preventDefault();
          await addNote();
          setTitle('');
          setContent('');
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default App;
