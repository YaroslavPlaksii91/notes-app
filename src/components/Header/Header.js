import { SearchBox } from 'components/SearchBox';
import { HeaderButtons } from 'components/HeaderButtons';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <HeaderButtons />
      <SearchBox />
    </header>
  );
};
