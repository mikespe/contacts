import React, { Component } from 'react'

class ListContacts extends Component {
  render () {
    return (
      <ol className='contacts-list'>
        {this.props.contacts.map( (contacts) => (
          <li key={contacts.id} className='contact=list-item'>
            <div className='contact-avatar' style={{
                backgroundImage: `url(${contacts.avatarURL})`
              }}/>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts
