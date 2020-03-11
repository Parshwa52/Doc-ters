import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {Form,Button,Input,Dropdown,Menu,Message,Segment,Checkbox,Confirm
} from 'semantic-ui-react';
import {DateInput} from 'semantic-ui-calendar-react';
import healthcare from '../ethereum/healthcare';
import web3 from '../ethereum/web3';
import {Link,Router} from '../routes';
export default class Permission extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home', docid:'' }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleaddper = this.handleaddper.bind(this);
    this.handleremove = this.handleremove.bind(this);
  }
  handleview(event) {
    event.preventDefault();
    Router.pushRoute(`/view`);
  }
  handleaddper = async (event)=> {
      let myName = localStorage.getItem('uname');
      const accounts = await web3.eth.getAccounts();
      let test;
      let reacth;
      test = (myName + this.state.docid).toString();
      await healthcare.methods.addper("1",test).send({from: accounts[0]});
  }
  handleremove = async (event)=> {
    let myName = localStorage.getItem('uname');
    const accounts = await web3.eth.getAccounts();
    let test;
    let reacth;
    test = (myName + this.state.docid).toString();
    await healthcare.methods.register(test,"0").send({from: accounts[0]});
  }
  handleper(event) {
    event.preventDefault();
    Router.pushRoute(`/permission`);
  }
  handlelogout(event) {
    event.preventDefault();
    Router.pushRoute(`/login`);
  }
  handleadd(event) {
    event.preventDefault();
    Router.pushRoute(`/patient`);
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
< Segment inverted color = 'blue' >
< Layout >
< link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" / >
<Segment inverted>
       <Menu inverted secondary>
         <Menu.Item
           name='Add Record'
           active={activeItem === 'add'}
           onClick={this.handleadd}
         />
         <Menu.Item
           name='View Record'
           active={activeItem === 'view'}
           onClick={this.handleview}
         />
         <Menu.Item
           name='Edit Permissions'
           active={activeItem === 'edit'}
           onClick={this.handleper}
         />
         <Menu.Menu position='right'>
           <Menu.Item
             name='Logout'
             active={activeItem === 'logout'}
             onClick={this.handlelogout}
           />
         </Menu.Menu>
       </Menu>
     </Segment>
     <Form>
     <Form.Field><Input label='Doctor ID' placeholder='' value = {this.state.docid  }
       onChange = {  event => this.setState({
           docid: event.target.value
         })
       } /></Form.Field>
  <center>   <Button color='black' size="large" onClick = {this.handleaddper}>Add</Button>
     <Button color='black' size="large"  onClick = {this.handleremove}>Remove</Button>
</center>
     </Form>
</Layout>
</Segment>
    );
  }

}
