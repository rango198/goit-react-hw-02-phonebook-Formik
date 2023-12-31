import { Component } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { GiGingerbreadMan } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handelSubmit}>
          <label>
            <div>
              <GiGingerbreadMan /> Name
            </div>
            <input
              name="name"
              type="text"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            <div>
              <FaPhoneAlt /> Number
            </div>
            <input
              name="number"
              type="tel"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">
            Add contact <AiOutlineUserAdd />
          </button>
        </Form>
      </div>
    );
  }
}
