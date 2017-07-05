import React, { Component } from 'react'

class ListContacts extends Component {
  render () {
    return (
      <ol className='contacts-list'>
        {this.props.contacts.map( (contacts) => (
          <li key={contacts.id}>
            {contacts.name}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts
