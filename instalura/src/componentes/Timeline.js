import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = { fotos: [] };
        this.login = this.props.login;
    }

    componentDidMount() {
        this.carregarFotos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== undefined) {
            this.login = nextProps.login;
            this.carregarFotos();
        }
    }

    carregarFotos() {
        let urlPerfil;
        if (this.login === undefined) {
            urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        } else {
            urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
        }

        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.setState({ fotos: fotos });
            });
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
                }
            </div>
        );
    }
}