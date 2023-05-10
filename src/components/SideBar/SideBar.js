import { useNotes } from 'services/context';
import { NotesList } from 'components/NotesList';
import s from './SideBar.module.css';

export const SideBar = () => {
  const { getVisibleNotes } = useNotes();
  const notes = getVisibleNotes();

  return (
    <aside className={s.sidebar}>
      <NotesList notes={notes} />
    </aside>
  );
};
