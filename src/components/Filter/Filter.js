import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter }) {
  const inputId = uuidv4();
  return (
    <label className={s.filter}>
      <div>Find contact by name</div>
      <input type="text" id={inputId} name="filter" onChange={filter} />
    </label>
  );
}
Filter.propType = {
  filter: PropTypes.string,
};
