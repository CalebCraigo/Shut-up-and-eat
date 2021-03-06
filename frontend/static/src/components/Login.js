import React, {Component} from 'react';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();

    axios.post('/api/v1/rest-auth/login/', this.state)
    .then(res => {
        localStorage.setItem('my-app-user', JSON.stringify(res.data));
        console.log('local storage', localStorage);
        this.props.history.push('/profile/');
    })
    .catch(error => {
        console.log(error);
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

    return  (
      <React.Fragment>
        <h1 className='header'>Shut Up & Eat</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username</label>
            <input className='usernameinput' id='username' type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='Enter username' required />
          </p>
          <p>
            <label className='emaillabel' htmlFor="email">Email</label>
            <input className='emailinput'id='email' type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Enter email' required />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input className='passwordinput' id='password' type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required/>
          </p>
          <button className='buttons btn btn-secondary'>Login</button>
          <a className='backbtn btn btn-secondary' href='/'>Back</a>
        </form>
      </React.Fragment>
    )
  }
}

export default Login;
