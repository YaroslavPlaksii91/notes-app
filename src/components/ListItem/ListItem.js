import { useNotes } from 'services/context';
import s from './ListItem.module.css';

export const ListItem = ({ note }) => {
  const { title, content, date } = note;
  const { setActiveNote } = useNotes();

  return (
    <article className={s.note} onClick={() => setActiveNote(note)}>
      <h3 className={s.title}>{title || 'Add some title'}</h3>
      <p className={s.content}>{content || 'Add some content'}</p>
      <p className={s.date}>{date}</p>
    </article>
  );
};
