import React from 'react';
import './App.css';
import Header from './componentes/Header'
import 'semantic-ui-css/semantic.min.css'
import { Form, Container, Button } from 'semantic-ui-react';

const campos = [
  {label: 'Descrição', ph: 'Descrição da despesa', name: 'descricao'},
  {label: 'Valor', ph: 'Valor da despesa', name: 'valor'}
]

function App() {
  console.log(campos)
  return (
    <>
      <Header />
      <Container fluid className="container">
        <Form>
          <Form.Group>
            {campos.map(campo => (

              <Form.Field width={6}>
              <label>{campo.label}</label>
              <input placeholder={campo.ph} name={campo.name} />
            </Form.Field>
            ))}
            <Form.Field width={4}>
              <Button content="Salvar"></Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default App;
