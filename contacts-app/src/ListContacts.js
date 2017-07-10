import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
        </div>
      <ol className='contacts-list'>
        {this.props.contacts.map( (contacts) => (
          <li key={contacts.id} className='contact-list-item'>
            <div className='contact-avatar' style={{
                backgroundImage: `url(${contacts.avatarURL})`
              }}/>
            <div className='contact-details'>
              <p>{contacts.name}</p>
              <p>{contacts.email}</p>
            </div>
            <button onClick={() => this.props.onDeleteContact(contacts)} className='contact-remove'>
              Remove
            </button>
          </li>
        ))}
      </ol>
      </div>
    )
  }
}

ListContacts.propTypes = {

}

export default ListContacts
