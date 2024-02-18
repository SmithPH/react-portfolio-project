import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.cont_wrapper}>
        <div className={styles.cont_con}>
            <div className={styles.cont_info}>
                <h3>Get in touch</h3>
                <p className={styles.cont_desc}>Lorem ipsum blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
                <p className={styles.cont_add}>111 King Street <br/>
                    Adelaide, SA 5000
                </p>
                <p><FaPhone /> (+61) 8 8724 9999</p>
                <p><FaEnvelope /> mail@me.com</p>
            </div>
            <div className={styles.cont_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor='first name'>First name:</label>
                            <input type='text' placeholder='e.g. John' required/>
                        </div>
                        <div>
                            <label htmlFor='last name'>Last name:</label>
                            <input type='text' placeholder='e.g. Doe' required/>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='e.g. johndoe@mail.com' />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='type here'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
