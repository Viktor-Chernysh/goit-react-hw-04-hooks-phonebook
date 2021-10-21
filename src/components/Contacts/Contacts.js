import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ol className={s.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact_item} key={id}>
          {name}:<span>{number}</span>{' '}
          <button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
