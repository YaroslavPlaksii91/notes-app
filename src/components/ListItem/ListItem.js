import s from './ListItem.module.css';

export const ListItem = ({ note }) => {
  const { title, text, date } = note;

  return (
    <article className={s.note}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <p className={s.date}>{date}</p>
    </article>
  );
};
