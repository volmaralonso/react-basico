import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';
import CadDespesa from './componentes/CadDespesa';
import Header from './componentes/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container fluid className="container">
          <CadDespesa />
        </Container>
      </>
    )
  }
}

export default App;
