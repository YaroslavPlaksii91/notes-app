import s from './ActionButton.module.css';

export const ActionButton = ({ icon, action, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={action}
      className={s.button}
    >
      {icon}
    </button>
  );
};
