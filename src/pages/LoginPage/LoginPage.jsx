import React, {Component} from 'react';
import userService from '../../utils/userService'
import { Link } from 'react-router-dom';
import './LoginPage.css';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleLogin();
      this.props.history.push('/');
    } catch (err) {
      //UPDATE THE ALERT LATER
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="Signup-title">Login</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default signup">Login</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="Signup-cancel">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;