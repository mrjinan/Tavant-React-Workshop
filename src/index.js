import React from 'react';
import { render } from 'react-dom';


class Timer extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date().toLocaleTimeString(), index: 0 };
    }

    componentWillMount() {
        console.log('componentWillMount()')
    }

    componentDidMount() {
        setInterval(function () {
            /** TODO - Change this  */
            this.setState({time: new Date().toLocaleTimeString(), index : this.state.index + 1})
        }.bind(this), 1000)
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()')

    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()')
        
        return this.state.index % 2 === 0 ? false: true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()')

    }

    componentDidUpdate() {
        console.log('componentDidUpdate()')

    }
    render() {
        return (<div><div>This is timer</div><div>{this.state.time}</div></div>)
    }
}


const App = function (props) {
    return (
        <div>
            <div>{props.obj.welcomeMessage}</div>
            <div>{props.obj.subTitle}</div>
            <Timer />
        </div>)
}
const obj = {
    welcomeMessage: "Hello World",
    subTitle: "SomeOther Message"

}
render(<App obj={obj} />, document.getElementById('app'));

