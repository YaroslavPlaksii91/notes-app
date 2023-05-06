import { createContext, useContext } from 'react';

export const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);
