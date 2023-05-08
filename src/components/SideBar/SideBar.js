import { useNotes } from 'services/context';
import { NotesList } from 'components/NotesList';
import s from './SideBar.module.css';

export const SideBar = () => {
  const { notes } = useNotes();

  return (
    <aside className={s.sidebar}>
      <NotesList notes={notes} />
    </aside>
  );
};
