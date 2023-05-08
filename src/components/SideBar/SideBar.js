import { NotesList } from 'components/NotesList';
import s from './SideBar.module.css';

const notes = [
  {
    id: 1,
    title: 'Note 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-05-08',
  },
  {
    id: 2,
    title: 'Note 2',
    text: 'Nulla facilisi. In hac habitasse platea dictumst.',
    date: '2023-05-09',
  },
  {
    id: 3,
    title: 'Note 3',
    text: 'Suspendisse malesuada aliquam libero, eget lobortis leo volutpat id.',
    date: '2023-05-10',
  },
];

export const SideBar = () => {
  return (
    <aside className={s.sidebar}>
      <NotesList notes={notes} />
    </aside>
  );
};
