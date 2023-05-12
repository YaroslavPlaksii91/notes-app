import { useState, useEffect } from 'react';
import { openDB } from 'idb';
import { NotesContext } from 'services/context';
import { Header } from './Header';
import { Main } from './Main';
import { SideBar } from './SideBar';
import { Workspace } from './Workspace';
import { Modal } from './Modal';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [query, setQuery] = useState('');
  const [shouldFocusInput, setShouldFocusInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    const body = { title: '', content: '', date: new Date().toLocaleString() };
    const id = await store.add(body);
    const newNote = { id, ...body };
    setNotes([...notes, newNote]);
    setActiveNote(newNote);
  }

  async function updateNote(id, body) {
    const db = await openDB('notes', 1);
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');

    const note = await store.get(id);

    if (body.title !== undefined) {
      note.title = body.title;
    } else {
      note.content = body.content;
    }

    await store.put(note);

    const updatedNotes = await store.getAll();

    setNotes(updatedNotes);
  }

  async function deleteNote(id) {
    const db = await openDB('notes', 1);
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    await store.delete(id);

    const updatedNotes = await store.getAll();
    setNotes(updatedNotes);
    setActiveNote(null);
  }

  const getVisibleNotes = () => {
    const normalizedQuery = query.toLowerCase();

    return notes.filter(
      ({ title, content }) =>
        title.toLowerCase().includes(normalizedQuery) ||
        content.toLowerCase().includes(normalizedQuery),
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        updateNote,
        deleteNote,
        setActiveNote,
        activeNote,
        setQuery,
        getVisibleNotes,
        shouldFocusInput,
        setShouldFocusInput,
        setShowModal,
      }}
    >
      <Header />
      <Main>
        <SideBar />
        {activeNote && <Workspace note={activeNote} />}
        {showModal && <Modal />}
      </Main>
    </NotesContext.Provider>
  );
};

export default App;
