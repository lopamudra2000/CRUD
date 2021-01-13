import React from 'react';
import TaskForm from './TaskForm';
import {connect} from 'react-redux';
import {createTask} from '../actions/index'

class AddTask extends React.Component{
    
    onSubmit=(formValues)=>{
        this.props.createTask(formValues);
    }
    render(){
    return(
        <div>
             <h3>Create a task</h3>
             <TaskForm onSubmit={this.onSubmit}/>
        </div>
       

    );
}
}

export default connect(null,{createTask})(AddTask);