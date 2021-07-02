import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react'

export default class User extends Component {
    state = {
        name: this.props.user.name,
        email: this.props.user.email,
        age: this.props.user.age,
        weight: this.props.user.weight,
        password: this.props.user.password,
        display: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditForm = () => {
        this.setState({
            display: !this.state.display
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        let newUser = {
            user_id: this.state.loggedinUser.id,
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            weight: this.state.weight,
            password: this.state.password
        }
        this.props.editUser(newUser)
    }


    render() {
        return(
            <div className="user-info">
                {this.state.display ? 
                <form className="edit-user" >
                <Input onChange={this.handleChange} value={this.state.name} type="text" name="name" className="input-text" />
                <br />
                <Input onChange={this.handleChange} value={this.state.email} type="text" name="email" className="input-text" />
                <br />
                <Input onChange={this.handleChange} value={this.state.password} type="text" name="name" className="input-text" />
                <br />
                <Input onChange={this.handleChange} value={this.state.age} type="text" name="age" className="input-text" />
                <br />
                <Input onChange={this.handleChange} value={this.state.weight} type="text" name="weight" className="input-text" />
                    <br />
                    <Button primary onClick={this.handleEditForm} type="submit" name="submit" value="Submit" className="button" >Submit</Button>
                </form>
                :
                <Card>
                <Card.Content header= {this.state.name} />
                <Card.Content description={this.state.email} />
                <Card.Content description={this.state.age} />
                <Card.Content description={this.state.weight} />
                <Card.Content extra>
                <Button primary onClick={this.handleEditForm}>Edit</Button> 
                </Card.Content>
                </Card> }
            </div>
        )
    }
}