import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1ffE183e477Cdb5a6E4d8B6b115aBBeFc5B314C2"
);
export default instance;