import React, {Component} from 'react'


class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const username = this.state.username.trim();
        const name = this.state.name.trim();
        if (!username || !name) {
            return
        }
        this.props.onFormSubmit({username: username, name: name});
        this.setState({username: '', name: ''})
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    render () {
        return (
            <form className="user-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                />
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input type="submit" value="post" />
            </form>
        )
    }

}


export default UserForm
