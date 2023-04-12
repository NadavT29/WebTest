import React from "react";

export default class Obj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ob: "sdddvdvdv",
            done: false,
        }
    }

    onRemove() {
        this.props.onRemove(this.props.id);
    }
    onDone() {
        this.setState({ done: !this.state.done });

        console.log(this.state.done)
    }

    render() {
        let className = this.state.done ? "task-done" : "task";
        return (
            <div className={"task " + className} style={{ backgroundColor: this.props.color }}>
                <div className="task-actions">
                    <button className="btn btn-xsm btn-danger " onClick={this.onRemove.bind(this)}>remove</button>
                    <button className="btn btn-xsm btn-success" onClick={this.onDone.bind(this)}>{this.state.done ? "Undo" : "Done"}
                    </button>
                </div>
                <div>
                    {this.props.text}
                </div>

            </div>
        )
    }
}