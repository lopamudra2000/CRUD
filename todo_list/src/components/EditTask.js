import React from 'react'
import {connect} from 'react-redux';
import {fetchTask,editTask} from '../actions';
import TaskForm from './TaskForm';
import _ from 'lodash';

class EditTask extends React.Component{
    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        this.props.editTask(this.props.match.params.id, formValues);
    }
    render(){
            if (!this.props.task){
                return<div>loading.....</div>;
            }
            return(
                <div>
                    <h3>
                        edit task
                    </h3>
                    <TaskForm initialValues={_.pick(this.props.task, 'title')} 
                    onSubmit={this.onSubmit}/>
                </div>
            )
    }
}
const mapStateToProps= (state, ownProps)=>{
    return {task:state.tasks[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{fetchTask,editTask})(EditTask);