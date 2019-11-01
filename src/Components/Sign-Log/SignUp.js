import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      age: 0,
    };
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.firstHandler = this.firstHandler.bind(this);
    this.lastHandler = this.lastHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }
  usernameHandler(text) {
    this.setState({username: text});
  }
  passwordHandler(text) {
    this.setState({password: text});
  }
  emailHandler(text) {
    this.setState({email: text});
  }
  firstHandler(text) {
    this.setState({first_name: text});
  }
  lastHandler(text) {
    this.setState({last_name: text});
  }
  ageHandler(text) {
    this.setState({age: text});
  }
  addNewUser() {
    axios.post('http://192.168.1.85:3001/api/newuser', {
      user_name: this.state.username,
      pass_word: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
    });
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <TextInput
          placeholder="username"
          onChangeText={this.usernameHandler}
          value={this.state.username}
        />
        <TextInput
          placeholder="password"
          onChangeText={this.passwordHandler}
          value={this.state.password}
        />
        <TextInput
          placeholder="email"
          onChangeText={this.emailHandler}
          value={this.state.email}
        />
        <TextInput
          placeholder="first name"
          onChangeText={this.firstHandler}
          value={this.state.first_name}
        />
        <TextInput
          placeholder="last name"
          onChangeText={this.lastHandler}
          value={this.state.last_name}
        />
        <TextInput
          placeholder="age"
          onChangeText={this.ageHandler}
          value={this.state.age}
        />
        <Button onPress={() => this.addNewUser()} title="press me" />
        <Text>{'user input: ' + this.state.username}</Text>
      </View>
    );
  }
}

export default SignUp;
