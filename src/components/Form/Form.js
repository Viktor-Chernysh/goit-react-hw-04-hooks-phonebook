import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactObject = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    // this.setState({});
    this.props.AddNewContact(contactObject);
    this.resetForm();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  render() {
    const { nameInputId, numberInputId, handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
        />
        <label htmlFor={numberInputId}>Number</label>
        <input
          className={s.input}
          id={numberInputId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
