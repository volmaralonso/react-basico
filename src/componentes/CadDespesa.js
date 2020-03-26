import React, { Component } from 'react';
import { Form, Table, Button } from 'semantic-ui-react';


export const ListaDespesas = () => (
    <Table striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Despesa</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Valor</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {JSON.parse(localStorage.getItem('despesas')).map(despesa => (
                <Table.Row>
                    <Table.Cell>{despesa.descricao}</Table.Cell>
                    <Table.Cell textAlign='right'>R$ {despesa.valor}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
)

const campos = [
    { label: 'Descrição', ph: 'Descrição da despesa', name: 'descricao', type: 'text' },
    { label: 'Valor', ph: 'Valor da despesa', name: 'valor', type: 'number' }
]

class CadDespesa extends Component {

    state = {
        descricao: '',
        valor: ''
    }


    salvarDespesa = () => {
        const { descricao, valor } = this.state;
        var despesas = localStorage.getItem('despesas') || '[]'
        despesas = JSON.parse(despesas)
        despesas.push({ descricao: descricao, valor: valor })
        localStorage.setItem('despesas', JSON.stringify(despesas))
    }

    handleChange = (e) => {
        var valor = e.target.value
        var name = e.target.name
        this.setState({ [name]: valor })
    }


    render() {
        return (
            <>
                <Form onSubmit={this.salvarDespesa}>
                    <Form.Group>
                        {campos.map(campo => (
                            <Form.Field width={6}>
                                <label>{campo.label}</label>
                                <input placeholder={campo.ph} name={campo.name} onChange={this.handleChange} type={campo.type} />
                            </Form.Field>
                        ))}
                        <Form.Field width={4}>
                            <Button content='Salvar' type='submit'></Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
                <ListaDespesas />
            </>
        )
    }
}

export default CadDespesa;