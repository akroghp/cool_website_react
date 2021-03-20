import React, {Component} from "react";

class Counter extends Component{
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    render() {
        const {onIncrement, counter, onDelete} = this.props;
        return (
            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(counter.id)}>
                    Delete
                </button>
            </React.Fragment>

        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}

export default Counter;