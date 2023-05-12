import { useNotes } from 'services/context';
import s from './ListItem.module.css';

export const ListItem = ({ note }) => {
  const { title, content, date } = note;
  const { activeNote, setActiveNote } = useNotes();

  const handleClick = () => {
    setActiveNote(note);
  };

  return (
    <article
      className={activeNote === note ? s.active : s.note}
      onClick={handleClick}
      tabIndex={1}
    >
      <h3 className={s.title}>{title || 'Add some title'}</h3>
      <p className={s.content}>{content || 'Add some content'}</p>
      <p className={s.date}>{date}</p>
    </article>
  );
};
