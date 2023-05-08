import s from './ActionButton.module.css';

export const ActionButton = ({ children, action, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={action}
      className={s.button}
    >
      {children}
    </button>
  );
};
