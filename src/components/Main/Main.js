import s from './Main.module.css';

export const Main = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};
