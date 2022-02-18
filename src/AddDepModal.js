import React,{Component,useState } from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Receipts',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                receiptId: 0,
                proveedor: event.target.Proveedor.value,
                monto: event.target.Monto.value,
                moneda: event.target.Moneda.value,
                Fecha: event.target[3].value,
                comentario: event.target.Comentario.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        });
    }
    render(){

        return(
            <div className='container'>
                <Modal {...this.props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            Nuevo Recibo
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId='Proveedor'>
                                        <Form.Label>Proveedor</Form.Label>
                                        <Form.Control type='text' name='Proveedor' placeholder='Proveedor' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='Monto'>
                                        <Form.Label>Monto</Form.Label>
                                        <Form.Control type='text' name='Monto' placeholder='Monto' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='Moneda'>
                                        <Form.Label>Moneda</Form.Label>
                                        <Form.Control type='text' name='Moneda' placeholder='Moneda' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='Fecha'>
                                        <Form.Label>fecha</Form.Label>
                                        <Calendar/>
                                    </Form.Group>
                                    <Form.Group controlId='Comentario'>
                                        <Form.Label>Comentario</Form.Label>
                                        <Form.Control type='text' name='Comentario' placeholder='Comentario' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Agregar</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={this.props.onHide}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };