import { useState, useEffect } from 'react';
import { useNotes } from 'services/context';
import { Section } from 'components/Section';
import s from './Workspace.module.css';

export const Workspace = ({ note }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { updateNote } = useNotes();

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

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
      <div className={s.note}>
        <p className={s.date}>{note.date}</p>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          className={s.title}
          value={title}
          onChange={handlerChange}
        />
        <textarea
          name="content"
          className={s.content}
          value={content}
          onChange={handlerChange}
        ></textarea>
      </div>
    </Section>
  );
};
