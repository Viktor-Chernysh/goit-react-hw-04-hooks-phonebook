import { useState } from 'react';

import './App.css';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';
import useLocalStorage from './hooks/useLocaleStorage';

const contactsArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsArr);
  const [filter, setFilter] = useState('');
  // console.log(contacts);
  const AddNewContact = contact => {
    const addedName = contacts
      .map(el => el.name.toLowerCase())
      .includes(contact.name.toLowerCase());
    const addedNumber = contacts.map(el => el.number).includes(contact.number);
    if (addedName && addedNumber) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    console.log(contacts);
    setContacts(prevState => [...prevState, contact]);
    console.log(contacts);
  };

  const addFilter = e => {
    setFilter(e.target.value.trim());
  };

  const filteredContacts = () => {
    // console.log(contacts);
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Form AddNewContact={AddNewContact} />
      </Section>
      {contacts.length > 0 && (
        <Section>
          <h2>Contacts</h2>
          <Filter filter={addFilter} />
          <Contacts
            contacts={filteredContacts()}
            deleteContact={deleteContact}
          />
        </Section>
      )}
    </>
  );
}

export default App;
