import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'
// export const CardList = (props)=>{
//     console.log(props)
//  return <div className='card-list'>{props.children}</div>
// }

// export const CardList = (props)=>{
//  console.log(props)
//  return <div className='card-list'>{props.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}</div>
// }

export const CardList = (props)=>(
    // console.log(props);
     <div className='card-list'>{props.monsters.map(monster => <Card monster={monster} key={monster.id}></Card>)}</div>
)