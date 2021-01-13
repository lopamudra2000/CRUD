import React from 'react';
import {Link} from 'react-router-dom';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap';
import {connect} from 'react-redux';

const EditTask = (props) =>{
    console.log(props);
    return(
        <Form>
            <FormGroup>
                <Label>
                   Edit
                </Label>
                <Input type="text" placeholder="Update Your Task"></Input>
            </FormGroup>
            <Button style={{borderRadius:"50%",height:"60px",width:"60px"}} type="submit">DONE</Button>
            <Link to="/">
                <Button className="ml-2" style={{borderRadius:"50%",height:"60px",width:"60px"}}>
                    <strong>X</strong>
                </Button>
                </Link>
        </Form>
    )
};
const mapStateToProps= (state, ownProps)=>{
    console.log(ownProps);
    return {task:state.tasks[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(EditTask);