import React,{useState} from 'react';
import {Button,Row,Col,Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {encode} from 'base-64';
async function loginUser(credentials,api) {
    return fetch(api+'Users',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
export default function Login({setToken, api}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
    const handleSubmit=async e=>{
        e.preventDefault();
        const token = await loginUser({
            username,
            password
          }, api);
          setToken(token);
    }
    return(
        <div className='container'>
            <h1>Login</h1>
            <Row>
                <Col sm={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='username'>
                            <Form.Control type='text' name='username' placeholder='username' onChange={e => setUserName(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Control type='password' name='password' placeholder='password' onChange={e => setPassword(encode(e.target.value))} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button variant='primary' type='submit'>Acceder</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
