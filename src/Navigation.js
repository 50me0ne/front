import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
export class Navigation extends Component{
    handleClick(){
        localStorage.removeItem('token');
        window.location.reload(false);
    }
    render(){
        return(
            <Navbar bg='dark' expand='lg'>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/'>
                            Home
                        </NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/LogIn' onClick={this.handleClick} >
                            Salir
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
