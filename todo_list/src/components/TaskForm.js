import React from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm} from "redux-form";
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap';

class TaskForm extends React.Component{
    renderError({error,touched}){
        if (touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput=({input, label,meta})=>{
        return(
            <div>
            <Label><h1>{label}</h1></Label>
            <Input  type="text" placeholder="Add Task" name="userInput" {...input} autoComplete="off">
            </Input>
            {this.renderError(meta)}
            </div>
            
        );
    }
    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }
    render(){
    return(
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <FormGroup>
            <Field name="title" component={this.renderInput} label="TASK"/>
            </FormGroup>
            <Button type="submit" style={{borderRadius:"50%",height:"50px",width:"50px"}}><strong>+</strong></Button>
            <Link to="/">
                <Button className="ml-2" style={{borderRadius:"50%",height:"50px",width:"50px"}}>
                    X
                </Button>
            </Link>
        </Form>
    );
}
}

const validate =(formValues)=>{
    const errors ={};
    if (!formValues.title){
        errors.title="You must enter something";
    }
    return errors;
};

export default reduxForm({
    form:'taskForm',
    validate
})(TaskForm);
