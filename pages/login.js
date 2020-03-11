import React,{Component} from 'react'
import { Button, Form, Grid, Header,Radio, Image, Message, Segment, Input} from 'semantic-ui-react';
import healthcare from '../ethereum/healthcare';
import web3 from '../ethereum/web3';
import {Link,Router} from '../routes';
import crypt from 'crypto-js';
import localStorage from 'localStorage';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname:'',
            passwd:'',value:'',checker:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConf = this.handleConf.bind(this);
        this.handleChange = (e, {
          value
        }) => this.setState({
          value
        });
    }
    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
    handleSubmit = async (event)=> {
      let password;
      let check;
      let reacth;
     try {
            check=(this.state.uname + this.state.passwd + this.state.value ).toString();
            reacth = crypt.SHA256(check).toString();
             const accounts = await web3.eth.getAccounts();
             password = await healthcare.methods.login(this.state.uname).call({
               from: accounts[0]
             });
           } catch (err) {
           }
           if(password===reacth)
           {alert("Login Successful");
             if(this.state.value=='patient')
            {
             Router.pushRoute('/patient');}
             else {
               Router.pushRoute('/hospital')
             }
           }
           else
           {
           alert("Login Unsuccessfull")

}

localStorage.setItem('uname',this.state.uname);


    }

    handleConf = (event)=> {

      event.preventDefault();
      Router.pushRoute('/Signup');

    }

    render() {
        return (
            <div>
                <link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                {/* <https://medicalchain.com/wp-content/uploads/2017/09/waves-bg-11.png */}
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='teal' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Segment stacked>
                        <Form>
                            <Form.Field>
                                <Input icon="user" iconPosition='left' placeholder="Username" fluid ref = {(input) => {this.uname = input;}} value = {this.state.uname} onChange = { event => this.setState({uname: event.target.value }) }/>
                            </Form.Field>
                            <Form.Field>
                                <Input icon="lock" iconPosition='left' placeholder="Password" type="password" fluid ref = {(input) => {this.passwd = input;}} value = {this.state.passwd} onChange = { event => this.setState({passwd: event.target.value }) }/>
                            </Form.Field>
                            <Form.Field>
                            You are a?
                            <  /Form.Field> <
                            Form.Field >
                            <Radio label = 'Doctor' name = 'radioGroup'  value = 'doctor'
                            checked = {
                              this.state.value === 'doctor'
                            }
                            onChange = {
                              this.handleChange
                            }
                            /> <
                            /Form.Field>
                            <  Form.Field >
                            <  Radio label = 'Patient'
                            name = 'radioGroup'
                            value = 'patient'
                            checked = {
                              this.state.value === 'patient'
                            }
                            onChange = {
                              this.handleChange}/> </Form.Field>
                            <Form.Group widths = 'equal' >
                                <Button color='teal' fluid size='large'   onClick = {this.handleSubmit}>Login</Button>
                                <Button color='teal' fluid size='large'  onClick = {this.handleConf}>SignUp</Button>
                            </Form.Group>
                        </Form>
                    </Segment>

                </Grid.Column>
                </Grid>
            </div>
        )
    }
}
