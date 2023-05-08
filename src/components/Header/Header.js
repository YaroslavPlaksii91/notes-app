import { SearchBox } from 'components/SearchBox';
import { HeaderButtons } from 'components/HeaderButtons';
import { Container } from 'components/Container';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <HeaderButtons />
        <SearchBox />
      </Container>
    </header>
  );
};
