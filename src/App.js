import './App.scss';
import Menu from './components/shared/Menu'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from './AppRouter'
import {MDCTextField} from '@material/textfield';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.querySelectorAll('.mdc-text-field').forEach(el => { new MDCTextField(el) });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Router>
            <Menu></Menu>
            <AppRouter></AppRouter>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
