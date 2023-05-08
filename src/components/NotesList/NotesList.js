import { ListItem } from 'components/ListItem';
import s from './NotesList.module.css';

export const NotesList = ({ notes }) => {
  return (
    <ul className={s.list}>
      {notes.map(note => (
        <li key={note.id} className={s.item}>
          <ListItem note={note} />
        </li>
      ))}
    </ul>
  );
};
