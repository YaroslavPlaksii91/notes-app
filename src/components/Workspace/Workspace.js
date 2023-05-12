import { useState, useEffect, useRef } from 'react';
import { useNotes } from 'services/context';
import { Section } from 'components/Section';
import s from './Workspace.module.css';

export const Workspace = ({ note }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const inputRef = useRef(null);
  const { updateNote, shouldFocusInput, setShouldFocusInput } = useNotes();

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  useEffect(() => {
    shouldFocusInput && inputRef.current.focus();
  }, [shouldFocusInput]);

  const handlerChange = e => {
    const { name, value } = e.target;

    updateNote(note.id, { [name]: value });

    if (name === 'title') {
      setTitle(value);
    } else {
      setContent(value);
    }
  };

  return (
    <Section>
      <h2 className={s.header}>Workspace</h2>
      <div className={s.note}>
        <p className={s.date}>{note.date}</p>
        <textarea
          rows={2}
          name="title"
          className={s.title}
          value={title}
          onChange={handlerChange}
          placeholder="Title"
          ref={inputRef}
          onFocus={() => setShouldFocusInput(false)}
          onBlur={() => setShouldFocusInput(false)}
        />
        <textarea
          name="content"
          className={s.content}
          value={content}
          onChange={handlerChange}
          placeholder="Content"
        ></textarea>
      </div>
    </Section>
  );
};
