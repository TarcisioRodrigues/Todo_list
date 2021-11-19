import React from 'react'
import *as styles from './styles'
import {Item} from '../../types/item'
type Props={
item:Item
onChange: (id: number, done: boolean) => void
}
export function ListItem({item,onChange}:Props){

return(
    <styles.Container done={item.done}> 
    <input type="checkbox" checked={item.done}  onChange={e => onChange(item.id, e.target.checked)} />
    <label>{item.name}</label>
    </styles.Container>
)
}

