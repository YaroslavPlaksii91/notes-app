import { Section } from 'components/Section';
import s from './Workspace.module.css';

export const Workspace = ({ note }) => {
  return (
    note && (
      <Section>
        <div className={s.note}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            className={s.title}
            value={note.title}
          />
          <textarea name="text" className={s.text} value={note.text}></textarea>
        </div>
      </Section>
    )
  );
};
