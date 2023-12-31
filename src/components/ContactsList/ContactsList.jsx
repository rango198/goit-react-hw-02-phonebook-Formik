
import { AiOutlineUserDelete } from 'react-icons/ai';
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>
              <AiOutlineUserDelete />
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
