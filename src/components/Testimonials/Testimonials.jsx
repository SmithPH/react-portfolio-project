import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
                <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>James Clears</h4>
                <p className={styles.bio}>Writer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
                <img src="https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Mark Hen</h4>
                <p className={styles.bio}>Photographer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
                <img src="https://images.unsplash.com/photo-1623082574085-157d955f1d35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                <h4>Peter Smith</h4>
                <p className={styles.bio}>Traveler</p>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
