import React from 'react';
import axios from 'axios';


class Todolist extends React.Component {
    state = {
        task: ""
    }

    onDeleteClick =() =>{
        console.log('inside Delete')
    }
    onSubmitClick=() =>{
        axios.post('https://localhost:4000/addTasks',{
           task:this.stgate.task
        })
    }
    render() {
        console.log(this.state.task)
        return (
            <div>
                <h3>Todo list </h3>
                <div className="ui input">
                    <input value={this.state.task} onChange={e => this.setState({
                        task: e.target.value
                    })} placeholder="Tasks to do.." />
                </div>
                <button className="ui primary button basic" onClick={()=>this.onSubmitClick()}>Submit</button>
                <hr />
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                item added
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui basic green button">Done</div>
                                    <div className="ui basic red button" onClick={ 
                                        () => this.onDeleteClick()
                                    }>Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todolist