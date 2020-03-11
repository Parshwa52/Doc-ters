import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import localStorage from 'localStorage';
import healthcare from '../ethereum/healthcare';
import {Form,Button,Input,Label,Dropdown,Menu,Message,Segment,Checkbox,Confirm
} from 'semantic-ui-react';

import web3 from '../ethereum/web3';

import {Link,Router} from '../routes';

export default class Edu extends Component {
  constructor(props) {
    super(props);
    let myName = localStorage.getItem('uname');
    this.state = {hid:myName,uid:''};
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit =  async(event) => {
    event.preventDefault();
    let chked;
    let check;
    let reacth;
    try {
          check=(this.state.uid + this.state.hid).toString();
           const accounts = await web3.eth.getAccounts();
           chked = await healthcare.methods.chkper(check).call({
             from: accounts[0]
           });
         } catch (err) {
         }
         if(chked=="1")
         {

         }
         else
         {

             console.log(this.state.uid);
             console.log(this.state.hid);
             console.log(reacth);
             console.log(chked);
         alert("Permission denied")}

}
handlelogout(event) {
  event.preventDefault();
  localStorage.setItem('uname','');
  Router.pushRoute(`/login`);
}
  render() {
    return (
< Segment inverted color = 'blue' >
< Layout >
<Segment inverted>
       <Menu inverted secondary>
         <Menu.Item
           name="View Patient's Record"
         />
         <Menu.Menu position='right'>
           <Menu.Item
             name='Logout'
             onClick={this.handlelogout}
           />
         </Menu.Menu>
       </Menu>
     </Segment>
     <Form>
     <Form.Field>
     </Form.Field>

      <Form.Field>
      <Input label='Patient ID' fluid ref = {
        (input) => {
          this.uid = input;
        }
      }
      value = {
        this.state.uid
      }
      onChange = {
        event => this.setState({
          uid: event.target.value
        })
      }/>
      </Form.Field>
    <center> <Button color='black'
      onClick = {this.handleSubmit}>
     View < /Button>
     </center>

     </Form>
</Layout>
</Segment>
    );
  }

}
