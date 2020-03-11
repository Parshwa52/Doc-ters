import React,{Component} from 'react'
import { Button, Form, Grid, Header, Radio,Image, Message, Segment, Input} from 'semantic-ui-react';
import {Link,Router} from '../routes';
import healthcare from '../ethereum/healthcare';
import web3 from '../ethereum/web3';
import crypt from 'crypto-js';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname:'',
            passwd:'',
            confpasswd:'',
            value:''
        };
        this.handleChange = (e, {
          value
        }) => this.setState({
          value
        });
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = async (event)=> {
        if(this.state.passwd===this.state.confpasswd)
        {
          let uid;
          const accounts = await web3.eth.getAccounts();
          uid = await healthcare.methods.login(this.state.uname).call({from:accounts[0]});

          if(uid !== "")
          {
            alert("Username already exists")
          }
          else {
            let test;
            let reacth;
            test = (this.state.uname + this.state.passwd + this.state.value ).toString();
            reacth = crypt.SHA256(test).toString();
            console.log(reacth);
            await healthcare.methods.register(reacth,this.state.uname).send({from: accounts[0]});
            Router.pushRoute('/login');
          }
        }
        else
          alert("Password and Confirm password doesn't match!!!");
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
    render() {
        return (
            <div>
                <link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='teal' textAlign='center'>
                         Create your account
                    </Header>
                    <Segment stacked>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Input icon="user" iconPosition='left' placeholder="Username" fluid ref = {(input) => {this.uname = input;}} value = {this.state.uname} onChange = { event => this.setState({uname: event.target.value }) } required="required" />
                            </Form.Field>
                            <Form.Field>
                                <Input icon="unlock" iconPosition='left' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" placeholder="Password" type="password" fluid ref = {(input) => {this.passwd = input;}} value = {this.state.passwd} onChange = { event => this.setState({passwd: event.target.value }) } required="required" />
                            </Form.Field>
                            <Form.Field>
                                <Input icon="unlock" iconPosition='left' placeholder="Confirm Your Password" type="password" fluid ref = {(input) => {this.confpasswd = input;}} value = {this.state.confpasswd} onChange = { event => this.setState({confpasswd: event.target.value }) } required="required" />
                            </Form.Field>

                                <Form.Field >You are a?</Form.Field> 
                                <Form.Field >
                                <Radio label = 'Doctor'
                                name = 'radioGroup'
                                value = 'doctor'
                                checked = {this.state.value === 'doctor'} onChange = {this.handleChange}/>
                                </Form.Field>
                                <Form.Field >
                                < Radio label = 'Patient'
                                name = 'radioGroup'
                                value = 'patient'
                                checked = {
                                  this.state.value === 'patient'
                                }
                                onChange = {
                                  this.handleChange}/> </Form.Field>
                                <Button type="submit" color='teal' fluid size='large'>SignUp</Button>

                        </Form>
                    </Segment>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}
