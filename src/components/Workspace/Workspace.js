import s from './Workspace.module.css';

export const Workspace = () => {
  return (
    <div className={s.note}>
      <label htmlFor="title"></label>
      <input type="text" id="title" name="title" className={s.title} />
      <textarea name="text" className={s.text}></textarea>
    </div>
  );
};
