import { IoAddOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { useNotes } from 'services/context';
import { ActionButton } from 'components/ActionButton';
import s from './HeaderButtons.module.css';

export const HeaderButtons = () => {
  const { addNote, deleteNote, activeNote, setShouldFocusInput } = useNotes();

  return (
    <div className={s.buttonsWrapper}>
      <ActionButton label={'Add note'} action={addNote}>
        <IoAddOutline size={'25px'} />
      </ActionButton>
      <ActionButton
        label={'Delete note'}
        action={() => deleteNote(activeNote.id)}
        disabled
      >
        <AiOutlineDelete size={'20px'} />
      </ActionButton>
      <ActionButton
        label={'Edit note'}
        disabled
        action={() => setShouldFocusInput(true)}
      >
        <MdOutlineEditNote size={'25px'} />
      </ActionButton>
    </div>
  );
};
