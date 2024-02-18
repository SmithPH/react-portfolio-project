import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaSass, FaReact, FaGitAlt, FaNode } from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My skills</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs /></li>
            <li><FaReact /></li>
            <li><FaGitAlt /></li>
            <li><FaSass /></li>
            <li><FaNode /></li>
        </ul>
      
    </div>
  )
}

export default Skills
