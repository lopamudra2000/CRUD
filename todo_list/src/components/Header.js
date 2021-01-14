import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    Button
} from 'reactstrap'

import {fetchTasks} from '../actions';
import {connect} from 'react-redux';

class Header extends React.Component{
    renderAdd(){
        if(this.props.isSignedIn){
            return(
                <Nav>
                    <NavItem>
                        <Link to="/add">
                            <Button style={{borderRadius:"50%",height:"50px",width:"50px"}}>+</Button>
                        </Link>
                    </NavItem>
                </Nav>
            );
        }
    }
    render(){return(
        <Navbar color="light" light>
            <Container>
                <NavbarBrand href="/"><strong>LIST</strong></NavbarBrand>
                {this.renderAdd()}
            </Container>
        </Navbar>
    )
    }
}

const mapStateToProps=(state)=>{
    return {isSignedIn :state.auth.isSignedIn};
};
export default connect (mapStateToProps,{fetchTasks})(Header);