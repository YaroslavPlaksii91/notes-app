import s from './SearchBox.module.css';

export const SearchBox = () => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        className={s.input}
      />
    </div>
  );
};
