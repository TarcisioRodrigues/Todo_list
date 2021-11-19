import React, { useState } from 'react'
import styles from './styles.module.scss'
import {FiActivity} from 'react-icons/fi'
type Props={
    onEnter:(taskName:string)=>void
    
    
}

export function AddTask ({onEnter}:Props){
 const [task,setTask]=useState('')
 //Função mapear a tecla digitadda
 function handleKeyUp(e: React.KeyboardEvent<HTMLElement>){
    if(e.code==='Enter'&& task !==''){
            onEnter(task)
    }

 }
    return(
       <div className={styles.Container}>
           <div className={styles.Image}>
               <FiActivity />

           </div>
           <input type="text" placeholder="Digite a sua tarefa" value={task} onChange={e=>setTask(e.target.value)} onKeyUp={handleKeyUp} />
       </div>
    )
}