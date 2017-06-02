import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddToDoComponent from './Components/AddToDoComponent';


import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './Components/ToDoListComponent';
import NavBarComponent from './Components/NavBarComponent';
const style = {
    divStyle: {
        padding: '15px'

    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = { toDoList: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(response => this.setState({ toDoList: response }))
    }

    render() {

        return (

            <div style={style.divStyle} className="container-fluid">
                <NavBarComponent />
                <ToDoList tasks={this.state.toDoList} />
            </div>

        )
    }
}
render(
    <Router>
        <div>
            <Route path="/" component={App}>
            </Route>
        </div>
    </Router>, document.getElementById('app'));

