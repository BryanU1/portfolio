import React from 'react';

function Contact() {
  return (
    <section id='contact' className='align-self-center d-flex flex-column align-items-center'>
      <h2 className='text-md secondary fw-700'>Be In Touch</h2>
      <p>I am currently looking for new opportunities to learn more interesting technologies and refine my skills as a software developer. If you have any questions or just want to have a chat, feel free to send me an email.</p>
      <a href='mailto:ungbryan01@gmail.com' target='_blank'>
        <button>Send an Email</button>
      </a>
    </section>
  )
}

export default Contact;