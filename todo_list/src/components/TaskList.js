import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button

} from 'reactstrap';
import {fetchTasks} from '../actions';

class TaskList extends React.Component{
    componentDidMount(){
        this.props.fetchTasks();
    }
    renderCheck(task){
        if (task.userId===this.props.currentUserId){
            return(<div className="ml-auto">
            <Link to={`/edit/${task.id}`}>
                <Button className="mr-1" >
                    Edit
                </Button>
            </Link>
            <Link to={`/delete/${task.id}`}>
            <Button>Delete</Button>
            </Link>
            
            </div>
            );
        }
    }
    renderList(){
        return this.props.tasks.map(task=>{
            return(
            <ListGroupItem className="d-flex"key={task.id}>
               <p style={{fontSize:"25px"}}>{task.title}</p>
               {this.renderCheck(task)}
            </ListGroupItem>
            )
        })
    }
    
    render(){
        console.log(this.props.tasks);
    return(
        <ListGroup className="mt-4">
            {this.renderList()}
        </ListGroup>
    )
}
}

const mapStateToProps=(state)=>{
    return {tasks:Object.values(state.tasks),
            currentUserId:state.auth.userId,
            isSignedIn :state.auth.isSignedIn};
};
export default connect (mapStateToProps,{fetchTasks})(TaskList);