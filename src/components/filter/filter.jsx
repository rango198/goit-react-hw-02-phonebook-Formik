import { IoIosSearch } from 'react-icons/io';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      <div>
        <IoIosSearch />
        Find contacts by name
      </div>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
