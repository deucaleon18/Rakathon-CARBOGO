import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";

function Marketplace() {
  const { state: { contract1,contract2, accounts } } = useEth();
  
  const mintAndListNft = async () => {

    console.log('hello')
    await contract2.methods.mintNft().send({from:accounts[0]})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })

  }

  useEffect(()=>{
    console.log(contract1,accounts,contract2)
  },[])
  return (
    <div className="btns">

      <button onClick={mintAndListNft}>
        MINT NFT
      </button>
      
      

    </div>
  );
}

export default Marketplace;
