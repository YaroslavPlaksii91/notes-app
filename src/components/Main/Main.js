import { Container } from 'components/Container';
import s from './Main.module.css';

export const Main = ({ children }) => {
  return (
    <main className={s.main}>
      <Container className="mainContainer">{children}</Container>
    </main>
  );
};
