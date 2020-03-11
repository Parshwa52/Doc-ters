import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import crypt from 'crypto-js';
import Layout from '../components/Layout';
import {Form,Button,Input,Dropdown,Menu,Message,Segment,Checkbox,Confirm,Card,Image
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import healthcare from '../ethereum/healthcare';
import web3 from '../ethereum/web3';
import {Link,Router} from '../routes';
import localStorage from 'localStorage'
let table=[];
let table2 = [];
let k;
let i;
var ed;
export default class Edu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' ,p1:'',p2:'',p3:'',p4:'',d1:'',d2:'',d3:'',d4:'',r1:'',r2:'',r3:'',r4:''}

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handledisplay=this.handledisplay.bind(this);

  }
  handleview(event) {
    event.preventDefault();
    Router.pushRoute(`/view`);
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
  handleSubmit=async (event)=>{
    let rows=[]
    let table1=[]
      let uid = localStorage.getItem('uname');
      console.log(uid);
      let etext;
      const accounts = await web3.eth.getAccounts();
      etext= await healthcare.methods.chkrecord(uid).call({
        from: accounts[0]
      });
      var bytes  = crypt.AES.decrypt(etext.toString(),uid );
      var plaintext = bytes.toString(crypt.enc.Utf8);
      plaintext=plaintext.toString();
      console.log(plaintext);
      table1=plaintext.split("_");
      console.log("hello");

      k=table1[0];
      ed=k.split(" ");
      this.setState({p1:ed[1],d1:ed[4],r1:ed[6]});
      k=table1[1];
      ed=k.split(" ");
      this.setState({p2:ed[1],d2:ed[4],r2:ed[6]});
      k=table1[2];
      ed=k.split(" ");
      this.setState({p3:ed[1],d3:ed[4],r3:ed[6]});
      console.log(table1[1]);
      console.log("hello2");
      //ed=k.split(" ");
      console.log(ed);
      console.log(ed[1]);
      console.log("hello3");
      //this.setState({p1:ed[1],p2:ed[]});
   //for (let i = 0; i < table1.length; i++) {
    //  alert(table1[i].values());
    //  table.push(table1[i].split(" "))
    //}
    return table;

  }
  handledisplay=async (event)=>{
    console.log(table);
  //  const doubled = table.map((table) => table+"2");
//console.log(doubled);
 for (let i = 0; i < table1.length; i++) {
     table2.push( <Card><Card.Content> <Card.Header>{k}</Card.Header>  <Card.Meta>Friends of Elliot</Card.Meta>        <Card.Description>Steve wants to add you to the group <strong>best friends</strong>  </Card.Description>  </Card.Content><Card.Content extra><div className='ui two buttons'><Button basic color='green' onClick={this.handlesubmit} >  View</Button>  </div>  </Card.Content>    </Card>)
     }
     return table2;
  }
  render() {
    const { activeItem } = this.state
    return (

< Segment inverted color = 'blue' onLoad={this.handleSubmit()}>
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
     <br/><br/><br/>
     <Card.Group>
     <Card>
     <Card.Content>
        <Card.Header>{this.state.p1}</Card.Header>
        <Card.Meta>{this.state.d1}</Card.Meta>
        <Card.Description>
          {this.state.r1}
        </Card.Description>
      </Card.Content>
      </Card>
      <Card>
      <Card.Content>
         <Card.Header>{this.state.p2}</Card.Header>
         <Card.Meta>{this.state.d2}</Card.Meta>
         <Card.Description>
           {this.state.r2}
         </Card.Description>
       </Card.Content>
       </Card>
       <Card>
       <Card.Content>
          <Card.Header>{this.state.p3}</Card.Header>
          <Card.Meta>{this.state.d3}</Card.Meta>
          <Card.Description>
            {this.state.r3}
          </Card.Description>
        </Card.Content>
        </Card>
     </Card.Group>
</Layout>
</Segment>
    );
  }

}
