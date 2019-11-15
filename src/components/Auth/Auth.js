import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            user_img: ''
        }

    }

    clearInputs() {
        this.setState({
            username: '',
            password: '',
            user_img: ''
        })
        this.clearInputs();
    }

    addUser() {
        axios.post('http://localhost:6660/', {
            username: this.state.username,
            password: this.state.password,
            user_img: this.state.user_img
        })
        this.clearInputs();
    }

    usernameHandler(event) {
        this.setState({ username: event.target.value })
    }

    passwordHandler(event) {
        this.setState({ password: event.target.value })
    }

    imgHandler(event) {
        this.setState({ user_img: event.target.value })
    }

    render() {
        const { username, password, user_img } = this.state;
        return (
            <div>
                <input
                    value={username}
                    placeholder='username'
                    type='text'
                    onChange={e =>
                        this.usernameHandler(e)}
                />
                <input
                    value={password}
                    placeholder='password'
                    type='text'
                    onChange={e => this.passwordHandler(e)}
                />
                <input
                    value={user_img}
                    placeholder='image URL'
                    type='text'
                    onChange={e =>
                        this.imgHandler(e)}
                />

                <button>
                    Login
               </button>
                <button onClick={() =>
                    this.addUser()}>
                    Register
               </button>
            </div>
        )
    }
}