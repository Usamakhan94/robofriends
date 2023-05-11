import React, { Component } from "react";
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            searchfield: '',
            robot: []
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({ robot : users}))
}

    OnSearchChange = (evt) => {
        this.setState({ searchfield : evt.target.value })
}

render(){
    const { searchfield, robot} = this.state;

    const demandedRobot = robot.filter(desiredRobot =>{
        return desiredRobot.name.toLowerCase().includes(searchfield.toLowerCase()
        )
    }
    );
    return !robot.length ?
        <h1>Loading</h1>:    
    (
        <section className="container">
            <div className="header">
                <h1>
                    ROBOFRIENDS
                </h1>
                <SearchBox searchChange = { this.OnSearchChange }/>
            </div>
            <Scroll>
                <CardList robots={demandedRobot}/>
            </Scroll>
        </section>
    );
}
}
export default App;