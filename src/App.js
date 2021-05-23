//import logo from './logo.svg';
import './App.css';
import React from 'react'
import { CardList } from './components/card-list/card-list.component' 
import { SearchBox } from './components/search-box/search-box.component'
class App extends React.Component{
constructor(){
  super()
  this.state = {
    monsters:[],
    searchField:''
}

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(users=>{//console.log(users)
    this.setState({monsters:users})})
}

handleChange = (e)=>{
  console.log(e.target.value)
  this.setState({ searchField : e.target.value },()=>console.log(this.state))
}
  // render(){
  //   return (
  //     <div className="App">
  //       <CardList name='arnab'>  {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
  //       </CardList>
       
  //     </div>
  //   );
  // }

  render(){
    const {monsters , searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filteredMonsters)
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox placeholder = 'search monsters' handleChange = {this.handleChange}></SearchBox>
        <CardList monsters = {filteredMonsters}>  
        </CardList>
       
      </div>
    );
  }
}

export default App;
