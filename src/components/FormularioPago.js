import React, { useContext } from 'react'
import {contexto} from './Contexto'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


const FormularioPago = () => {

    const {total} = useContext(contexto)

  return (
    <>
        <h3 className='totalPagar'>Total a pagar: ${total}</h3>
        <Form className='formPago'>
        <FormGroup>
            <div className='flexPago'>
                <Label for="nombre" className='tituloFormPago'>NOMBRE Y APELLIDO</Label>
                <Input type="text" name="nombre" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label for="telefono" className='tituloFormPago'>TELÉFONO</Label>
                <Input type="text" name="telefono" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label for="exampleEmail" className='tituloFormPago'>EMAIL</Label>
                <Input type="email" name="email" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <Label for="nombre" className='tituloFormPago'>DIRECCIÓN DE ENVÍO</Label>
                <Input type="text" name="nombre" className='inputPago' required/>
            </div>
        </FormGroup>
        <FormGroup>
            <div className='flexPago'>
                <div className='columnTarjetas'>
                    <Label for="exampleText" className='tituloFormPago'>NÚMERO DE TARJETA</Label>
                    <div className='iconosTarjetas'>
                        <div className='tarjetaIcono'><img src="../img/maestro.png" alt="iconoMaestro"/></div>
                        <div className='tarjetaIcono'><img src="../img/visa.png" alt="iconoVisa"/></div>
                        <div className='tarjetaIcono'><img src="../img/amex.png" alt="iconoAmex"/></div>
                    </div>
                </div>
                <Input type="text" name="numeroTarjeta" className='inputPago' required/>
            </div>  
        </FormGroup>
        <div className='flexTarjetaCvv'>
            <FormGroup>
                <div className='flexPago'>
                    <Label for="exampleDate" className='tituloFormPago'>
                    EXPIRACIÓN
                    </Label>
                    <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="month"
                    className='inputPago'
                    required
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <Label for="exampleZip" className='tituloFormPago'>
                    CVV
                </Label>
                <Input
                    id="exampleZip"
                    name="zip"
                    className='inputPago'
                    required
                />
            </FormGroup>
        </div>
        <Button className='confirmarCompra'>Confirmar Compra</Button>
      </Form>
    </>
  )
}

export default FormularioPago 