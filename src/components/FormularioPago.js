import React, { useContext, useState } from 'react'
import {contexto} from './Contexto'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'


const FormularioPago = () => {

    const {finalizarCompra} = useContext(contexto)
    const {total} = useContext(contexto)

    const [form, setForm] = useState({nombre:'', telefono:'', email:'', direccion:'',tarjeta:'' , expiracion:'', cvv:''})
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

  return (
    <>
        <h3 className='totalPagar'>Total a pagar: ${total}</h3>
        <Form className='formPago'>
        <FormGroup>
            <div className='flexPago'>
                <Label for="nombre" className='tituloFormPago'>NOMBRE Y APELLIDO</Label>
                <Input onChange={handleChange} type="text" name="nombre" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label onChange={handleChange} for="telefono" className='tituloFormPago'>TELÉFONO</Label>
                <Input type="text" name="telefono" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label onChange={handleChange} for="exampleEmail" className='tituloFormPago'>EMAIL</Label>
                <Input type="email" name="email" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label onChange={handleChange} for="nombre" className='tituloFormPago'>DIRECCIÓN DE ENVÍO</Label>
                <Input type="text" name="direccion" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <div className='columnTarjetas'>
                    <Label onChange={handleChange} for="exampleText" className='tituloFormPago'>NÚMERO DE TARJETA</Label>
                    <div className='iconosTarjetas'>
                        <div className='tarjetaIcono'><img src="../img/maestro.png" alt="iconoMaestro"/></div>
                        <div className='tarjetaIcono'><img src="../img/visa.png" alt="iconoVisa"/></div>
                        <div className='tarjetaIcono'><img src="../img/amex.png" alt="iconoAmex"/></div>
                    </div>
                </div>
                <Input type="text" name="tarjeta" className='inputPago' required/>
            </div>  
        </FormGroup>
        <div className='flexTarjetaCvv'>
            <FormGroup>
                <div className='flexPago'>
                    <Label onChange={handleChange} for="exampleDate" className='tituloFormPago'>
                    EXPIRACIÓN
                    </Label>
                    <Input
                    id="exampleDate"
                    name="expiracion"
                    placeholder="date placeholder"
                    type="month"
                    className='inputPago'
                    required
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <Label onChange={handleChange} for="exampleZip" className='tituloFormPago'>
                    CVV
                </Label>
                <Input
                    id="exampleZip"
                    name="cvv"
                    className='inputPago'
                    required
                />
            </FormGroup>
        </div>
        <Link to='/GraciasCompra'><Button type='submit' onClick={finalizarCompra} className='confirmarCompra'>Confirmar Compra</Button></Link>
      </Form>
    </>
  )
}

export default FormularioPago 