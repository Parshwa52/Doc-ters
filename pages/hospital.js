import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowseRouter as Router1,Link,Route} from 'react-router-dom';
import crypt from 'crypto-js';
import localStorage from 'localStorage';
import healthcare from '../ethereum/healthcare';
import {Form,Button,Input,Label,Dropdown,Menu,Message,Segment,Checkbox,Confirm
} from 'semantic-ui-react';

import web3 from '../ethereum/web3';

import {Router} from '../routes';

export default class Edu extends Component {
  constructor(props) {
    super(props);
    let myName = localStorage.getItem('uname');
    this.state = {hid:myName,uid:'',
    infuralink:'https://ipfs.infura.io.ipfs/'
  };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit =  async(event) => {
    event.preventDefault();
    let chked;
    let check;
    let reacth;
    try {
          check=(this.state.uid + this.state.hid).toString();
          console.log(check);
           const accounts = await web3.eth.getAccounts();
           chked = await healthcare.methods.chkper(check).call({
             from: accounts[0]
           });
         } catch (err) {
         }
         if(chked==="1")
         {
           alert("Permission given");
           const accounts = await web3.eth.getAccounts();
           reacth=await healthcare.methods.chkrecord(this.state.uid).call({
               from: accounts[0]
           });
           var bytes  = crypt.AES.decrypt(reacth.toString(),this.state.uid );
           var plaintext = bytes.toString(crypt.enc.Utf8);
           plaintext=plaintext.toString();
           let table=[]
           table=(plaintext.split("_"));

           for(let i=0;i<table.length;i++)
           {
             console.log("hello");
             let str;
             str=(this.state.infuralink+table[i]).toString();
             <Router1>
             <Link to="str">Document+{i}
             </Link>
             <br/>
             </Router1>
           }
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
< link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" / >

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
</Segment>
    );
  }

}
