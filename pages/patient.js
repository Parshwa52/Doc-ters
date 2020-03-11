import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import {Form,Button,Input,Label,Dropdown,Menu,Message,Segment,Checkbox,Confirm} from 'semantic-ui-react';
import {  DateInput } from 'semantic-ui-calendar-react';
import healthcare from '../ethereum/healthcare';
import web3 from '../ethereum/web3';
import gender from '../components/option';
import {Link,Router} from '../routes';
import localStorage from 'localStorage';
export default class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home', gen:'', dob:'',pid:'',pname:'',age:'',date:'',rdoc:'',rid:'',repon:'',repno:'',open:false,loading:false
  }
    this.handleItemClick = this.handleItemClick.bind(this);

  }

  handleview(event) {
    event.preventDefault();
    Router.pushRoute(`/view`);
  }

  handleSubmit = async (event) => {
    this.setState({
      loading: true,
      open: true})
      let myName = localStorage.getItem('uname');
      console.log(myName);
}

handleCancel = () => this.setState({
  open: false,
  loading: false
})
handleChange = (event, {
  name,
  value
}) => {
  if (this.state.hasOwnProperty(name)) {
    this.setState({
      [name]: value
    });
  }
}
handleChange2 = (event, {
  name,
  value
}) => {
  if (this.state.hasOwnProperty(name)) {
    this.setState({
      [name]: value
    });
  }
}

handleconf = async (event) => {
    this.setState({
      open: false
    });
    let etext;
    try {
      const accounts = await web3.eth.getAccounts();
      etext=(this.state.pid+" "+this.state.pname+" "+this.state.age+" "+this.state.date+" "+this.state.rdoc+" "+this.state.rid+" "+this.state.repon+" "+this.state.repno).toString();
      password = await healthcare.methods.addrecord(etext,this.state.pid).call({
        from: accounts[1]
      });


      this.setState({
        loading: false
      });
    } catch (err) {
      this.setState({
        loading: false,
        open: false
      });
    }
  }

  handleper(event) {
    event.preventDefault();
    Router.pushRoute(`/permission`);
  }

  handlelogout(event) {
    event.preventDefault();
    localStorage.setItem('uname','');
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
< link rel = "stylesheet" href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" / >
<Segment inverted>
<b>
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
       </b>
     </Segment>
     <Form >

     <Form.Field>
      <
      label color = "black"
      style = {
        {
          fontSize: '20px'
        }
      } > Patient Details < /label>
      </Form.Field>

      <Form.Group widths = 'equal' >
      < Form.Field >
      <Input fluid label = "Patient ID"  ref = {  (input) => {    this.pid = input;  }  }  value = {  this.state.pid }  onChange = {event => this.setState({  pid: event.target.value  })  }/>
      </Form.Field>
      <Form.Field>
      <Input fluid label = "Patient Name"  ref = {  (input) => {    this.pname = input;  }  }  value = {  this.state.pname }  onChange = {event => this.setState({  pname: event.target.value  })  }/>
      </Form.Field>
      <Form.Field>
      <Input fluid label = "Patient Age"  ref = {  (input) => {    this.age = input;  }  }  value = {  this.state.age }  onChange = {event => this.setState({  age: event.target.value  })  }/>
      </Form.Field>

      </Form.Group>

      <br/>

      <Form.Group widths='equal'>

      <DateInput name = "date" placeholder = "Date"  value = {this.state.date  }  iconPosition = "left" onChange = {  this.handleChange}  />

      <Dropdown placeholder = 'Select Gender' fluid selection options = {gender }
      onChange = { (e, { value   }) => this.setState({   gen: value   }) }/>

      <Form.Field>
        < DateInput name = "dob" fluid placeholder = "Date of Birth"  value = {  this.state.dob  } iconPosition = "right" onChange = { this.handleChange2}  />
      </Form.Field>
      </Form.Group>

      <br />

    <Form.Group widths='equal'>

     <Form.Field>
     <Input fluid label = "Referring Doctor"  ref = {  (input) => {    this.rdoc = input;  }  }  value = {  this.state.rdoc }  onChange = {event => this.setState({  rdoc: event.target.value  })  }/>
     </Form.Field>

     <Form.Field>
    <Input fluid label = "Registration id"  ref = {  (input) => {    this.rid = input;  }  }  value = {  this.state.rid }  onChange = {event => this.setState({  rid: event.target.value  })  }/>
    </Form.Field>
    </Form.Group>

     <br />

     <Form.Group widths='equal'>
     <Form.Field>
    <Input fluid label = "Reported On"  ref = {  (input) => {    this.repon = input;  }  }  value = {  this.state.repon }  onChange = {event => this.setState({  repon: event.target.value  })  }/>
    </Form.Field>

     <Form.Field>
     <Input fluid label = "Reported Number"  ref = {  (input) => {    this.repno = input;  }  }  value = {  this.state.repno}  onChange = {event => this.setState({  repno: event.target.value  })  }/>
     </Form.Field>

     </Form.Group>

     <div style={{color:'Black',fontSize:'22px', FontFamily:'Arial'}} > Comments < /div>
     <br/>
     <Form.Field><textarea rows="3" placeholder=''/></Form.Field>

     <div style={{color:'Black',fontSize:'22px', FontFamily:'Arial'}} > Test Results < /div>
    <br/>

     <Form.Field><textarea rows="3" placeholder=''/></Form.Field>

     <center>
     <br/>
     <Button color='black' loading = { this.state.loading }
      onClick = {this.handleSubmit}>
     Submit < /Button>

     <
     Confirm open = { this.state.open }
     cancelButton = 'Go Back'
     confirmButton = "Let's do it"
     onCancel = { this.handleCancel }
     onConfirm = {this.handleconf }
     />
     </center>
     </Form>
     </Segment>
    );
  }

}
