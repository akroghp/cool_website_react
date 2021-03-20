import React, {Component} from 'react';
import './App.css';
import NavigationBar from "./components/navigationBar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 2},
            {id: 2, value: 2},
            {id: 3, value: 0},
            {id: 4, value: 6}
        ]
    };

    constructor() {
        super();
        console.log("App - Constructor")
    }
    // called when component is rendered into the DOM and is perfect place to get data from server!
    componentDidMount() {
        // Ajax Call
        // this.setState{...}
    }
    // Called when removing components from DOM. Here we can clean up different trackers to limit memory leaks.
    componentWillUnmount() {

    }

    // If theres is changes, we can update the server (send receive data)
    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    handleIncrement = counter => {
        const counters = [...this.state.counters]; // cloning array
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c;
        });
        this.setState({counters})

    }

    render() {
        return(
            <React.Fragment>
                <NavigationBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>

        )

    }
}
export default App;