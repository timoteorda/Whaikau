import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Formulario = () => {
  return (
    <Form className='form'>
        <FormGroup>
          <Label for="nombre" className='tituloForm'>NOMBRE</Label>
          <Input type="text" name="nombre"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" className='tituloForm'>EMAIL</Label>
          <Input type="email" name="email"/>
        </FormGroup>
        <FormGroup>
          <Label for="telefono" className='tituloForm'>TELEFONO</Label>
          <Input type="text" name="telefono"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText" className='tituloForm'>MENSAJE</Label>
          <Input type="textarea" name="text" className='cuadradoMensaje'/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
  )
}

export default Formulario