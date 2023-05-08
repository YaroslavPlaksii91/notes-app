import { useNotes } from 'services/context';
import s from './ActionButton.module.css';

export const ActionButton = ({ children, action, label, disabled }) => {
  const { activeNote } = useNotes();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={action}
      className={s.button}
      disabled={!activeNote && disabled}
    >
      {children}
    </button>
  );
};
