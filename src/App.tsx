import React, {useState}from 'react';

import styles from './styles/App.module.scss'
import {Item}from './types/item'
import {ListItem} from './components/ListItem';
import { AddTask } from './components/Addtask';
function App() {
  const [list,setList]=useState<Item[]>([])
  function addTask(taskName:string){
    let newList=[...list]
    newList.push({
      id:list.length+1,
      name:taskName,
      done:false
    })
    setList(newList)
  }
  //funçao para pegar o id
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Area}>
       <div className={styles.Header}>
         <h1>Lista de tarefas</h1>


       </div>
       <AddTask onEnter={addTask} />
       {list.map((item,index)=>(
         <ListItem key={index} item={item} onChange={handleTaskChange} />
       ))}
      </div>
    </div>
  );
}

export default App;
