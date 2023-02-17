
import React from 'react'
import './Info.css'
import styles from './Info.module.css'

// console.log(styles)   // {info: 'Info_info__s8vxq', myOtehrButton: 'Info_myOtehrButton__o9+SZ'}

const Info = () => {
  return (
    <div className={styles.info}>  
     <h1>Info component</h1> 
     <button className={styles.myOtherButton}>Info button</button>
     <h2>h2 in the info component</h2>
    </div>
  )
}

export default Info
