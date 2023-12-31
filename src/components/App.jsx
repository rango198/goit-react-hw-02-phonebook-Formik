import { Component } from 'react';
import initialContacts from './contacts.json';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContacts = newContact => {
    const id = nanoid();
    const contactWithId = { ...newContact, id };

    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? Notify.warning(`${newContact.name}: is already in contacts`, {
          width: '400px',
          position: 'center-center',
          timeout: 3000,
          fontSize: '20px',
        })
      : this.setState(prevState => {
          return {
            contacts: [contactWithId, ...prevState.contacts],
          };
        });
  };

  onChangeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  };

  onDeleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.filterByName();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <div>
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
          <ContactsList
            contacts={visibleContacts}
            onDelete={this.onDeleteContacts}
          />
        </div>
      </div>
    );
  }
}
