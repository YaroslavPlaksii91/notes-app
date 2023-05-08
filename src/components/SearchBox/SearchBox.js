import { useState } from 'react';
// import { useNotes } from 'services/context';
import s from './SearchBox.module.css';

export const SearchBox = () => {
  const [value, setValue] = useState('');
  // const { notes, setNotes } = useNotes();

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        className={s.input}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
