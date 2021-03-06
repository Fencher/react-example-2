import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import My404Component from './componentes/My404Component';
import { Router, Route, browserHistory } from 'react-router';
import { matchPattern } from 'react-router/lib/PatternUtils';

function verificarAutenticacao(nextState, replace) {
  const resultado = matchPattern('/timeline(/:login)', nextState.location.pathname);
  const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;

  if (enderecoPrivadoTimeline && localStorage.getItem('auth-token') === null) {
    replace('/?msg=você precisa estar logado para acessar o endereço');
  }
}

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/timeline" component={App} onEnter={verificarAutenticacao} />
      <Route path="/timeline(/:login)" component={App} onEnter={verificarAutenticacao} />
      <Route path="/logout" component={Logout} />
      <Route path='*' exact={true} component={My404Component} />
    </Router>
  ),
  document.getElementById('root')
);
