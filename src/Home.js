import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';
import Moment from 'moment';
export class Home extends Component{
    constructor(props){
        super(props);
        this.state={receipts:[], addModalShow:false}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'receipts')
        .then(response=>response.json())
        .then(data=>{
            this.setState({receipts:data});
        })
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }
    render(){
        Moment.locale('es');
        const {receipts}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
            <ButtonToolbar>
                <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>Nuevo Recibo</Button>
                <AddDepModal show={this.state.addModalShow} onHide={addModalClose}></AddDepModal>
            </ButtonToolbar>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Recibo</th>
                            <th>Proveedor</th>
                            <th>Monto</th>
                            <th>Moneda</th>
                            <th>Fecha</th>
                            <th>Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map(r=>
                            <tr key={r.receiptId}>
                                <td>{r.receiptId}</td>
                                <td>{r.proveedor}</td>
                                <td>{r.monto}</td>
                                <td>{r.moneda}</td>
                                <td>{Moment(r.fecha).format('DD/MM/yyyy')}</td>
                                <td>{r.comentario}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
