import React, { Component } from 'react';
//import Web3 from 'web3';
import crypt from 'crypto-js';
import './App.css';
import healthcare from '../healthcare'
import web3 from '../web3';
import healthcare1 from '../abis/healthcare'
import localStorage from 'localStorage';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadBlockchainData()
  }


  async loadBlockchainData() {

    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(this.state.account);


      const contract = web3.eth.Contract(JSON.parse(healthcare1.interface))
      this.setState({ contract1:contract })
          console.log(this.state.contract);
    //  const memeHash = await healthcare.methods.chkrecord("abcd").call()
    //  this.setState({ memeHash })

  }

  constructor(props) {
    super(props);

    this.state = {
      memeHash: '',
      contract1: null,
      web3: null,
      buffer: null,
      account: null,
      myName:'',
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = async(event) => {
    event.preventDefault();
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)


    let uname=localStorage.getItem('uname');
    this.setState({myName:uname});
      console.log("ParshwaShah");
	

    let prevtext;
    let plaintext;
    prevtext=  healthcare.methods.chkrecord("ParshwaShah").call({from:this.state.account});
    if(prevtext==="")
      {
        plaintext=this.state.memeHash+"_";
        console.log(plaintext);
        var ciphertext = crypt.AES.encrypt(plaintext,"ParshwaShah");
        ciphertext=ciphertext.toString();
        console.log(ciphertext);
          healthcare.methods.addrecord(ciphertext,"ParshwaShah").send({
          from: this.state.account
        });
      }
      else {
        var text;
        var bytes  = crypt.AES.decrypt(prevtext.toString(),"ParshwaShah");
        plaintext = bytes.toString(crypt.enc.Utf8);
        text=plaintext+"_"+this.state.memeHash;
        ciphertext = crypt.AES.encrypt(text,"ParshwaShah");
        ciphertext=ciphertext.toString();
        console.log(ciphertext);
         healthcare.methods.addrecord(ciphertext,"ParshwaShah").send({
          from: this.state.account
        });

      }
});

}

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add Records
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="" src={`https://ipfs.infura.io/ipfs/${this.state.memeHash}`} />
                </a>
                <p>&nbsp;</p>
                <h2>Upload File</h2>
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
