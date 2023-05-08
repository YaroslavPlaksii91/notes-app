import { IoAddOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { ActionButton } from 'components/ActionButton';
import s from './HeaderButtons.module.css';

export const HeaderButtons = () => {
  return (
    <div className={s.buttonsWrapper}>
      <ActionButton label={'Add note'}>
        <IoAddOutline size={'25px'} />
      </ActionButton>
      <ActionButton label={'Delete note'}>
        <AiOutlineDelete size={'20px'} />
      </ActionButton>
      <ActionButton label={'Edit note'}>
        <MdOutlineEditNote size={'25px'} />
      </ActionButton>
    </div>
  );
};
