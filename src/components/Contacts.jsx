import React from 'react'
import "../styles/contact.scss"

const Contacts = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us!</h1>

        <form action="#">
          <div>
            <label>Name</label>
            <input type="text" required placeholder='Enter Name...' />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder='abc@xyz.com' />
          </div>
          
          <div>
            <label>Message</label>
            <input type="text" required placeholder='type a message' />
          </div>

          <button type='submit'>Send</button>

        </form>
      </main>

    </div>
  )
}

export default Contacts
