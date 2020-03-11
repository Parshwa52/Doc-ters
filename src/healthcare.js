import web3 from './web3';
import healthcare from './abis/healthcare.json';

const instance = new web3.eth.Contract(
  JSON.parse(healthcare.interface), '0xf2F9D219A0117a65E02cDd1Cb51F33E84Eb72c48');

export default instance;
