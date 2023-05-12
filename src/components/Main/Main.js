import { Container } from 'components/Container';
import s from './Main.module.css';

export const Main = ({ children }) => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Notes application</h1>
      <Container className="mainContainer">{children}</Container>
    </main>
  );
};
