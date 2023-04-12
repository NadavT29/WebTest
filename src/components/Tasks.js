import { clear } from "@testing-library/user-event/dist/clear";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Task from "./Obj";

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                <Task text="task1" id={0} onRemove={this.onRemove.bind(this)} color="blue" />,
                <Task text="task2" id={2} onRemove={this.onRemove.bind(this)} color="green" />,
                <Task text="task3" id={3} onRemove={this.onRemove.bind(this)} color="orange" />,
                <Task text="task4" id={4} onRemove={this.onRemove.bind(this)} color="red" />
            ],
            colors: ["blue", "green", "orange", "red"],
            i: 0
        }
    }

    randomcolor() {
        let i = this.state.i;

        if (i >= this.state.colors.length - 1) {
            this.state.i = 0;

        }


        else {
            this.state.i++;
        }

        return this.state.colors[i];

    }

    onRemove(currentTaskId) {
        let newTasks = this.state.tasks;
        newTasks = newTasks.filter((task => task.props.id !== currentTaskId))
        this.setState({ tasks: newTasks })
    }

    add() {
        let newTasks = this.state.tasks;

        newTasks.push(<Task text={this.state.query} onRemove={this.onRemove.bind(this)} color={this.randomcolor()} id={newTasks.length + 1}></Task>)
        this.setState({ tasks: newTasks, query: "" })
    }

    render() {
        return (
            <div>
                <div className="box">
                    <label>
                        <input
                            type="text"
                            placeholder="write here"
                            className="form-control"
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={event => {
                                if (event.key === 'Enter' && this.state.query != null & this.state.query != "") {
                                    console.log(this.state.query)
                                    this.add()

                                }
                            }}
                            value={this.state.query}
                        />

                    </label>

                </div>
                <div className="box">

                    <div className="parent">
                        {this.state.tasks.map((task, index) => {
                            return (
                                <div className="child" key={index}>
                                    {task}
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        )
    }
}
