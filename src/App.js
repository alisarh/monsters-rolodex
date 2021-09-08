import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox  } from './components/search-box/search-box.component';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
    };
  }
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState( {monsters: users}))
  .then(res => console.log(this.state.monsters))
}
  render() {
    return(
      <div className="App">
        <SearchBox placeholder="search a monster" />
          <CardList monsters={this.state.monsters} />
       
      </div>
    )
  }
}

export default App;
