import { ActionButton } from 'components/ActionButton';
import s from './HeaderButtons.module.css';

export const HeaderButtons = () => {
  return (
    <div className={s.buttonsWrapper}>
      <ActionButton />
      <ActionButton />
      <ActionButton />
    </div>
  );
};
