import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";
import "../styles/Marketplace.css"

function Marketplace() {
  const { state: { web3,contract, accounts,address } } = useEth();
  const [nftCount,setNftCount]=useState(0)

//   useEffect(()=>{
//     const getNfts=async()=>{
//        let nftLength=await contract.methods.s_tokenCounter().call()
//        let nfts=[]

//       for(let i=0;i<nftLength;i++){
//        await contract.methods.getNft(i).call().then((res)=>{
//           console.log(res)
//        })
//        .catch((err)=>{
//           console.log(err)
//        })
//       }
       
//     }
//     getNfts()
//  },[])



  const mintAndListNft=
  async()=>{

   
    await contract.methods.listItem(accounts[0],15).send({from:accounts[0]})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  const buyNft=async(serial)=>{
    await contract.methods.buyItem(serial).send({from:accounts[0],value:web3.utils.toWei('15','ether')}).then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
    <div className="Market">

      <button className="btns" 
      // onClick={()=>console.log("hello")}
      onClick={mintAndListNft}
      
      >
        MINT NFT
      </button>
      
      <button className="btns" 
      onClick={()=>{buyNft(1)}}
      
      >
        BUY NFT
      </button>

    </div>
    <div className="Market">
      <h1 style={{color:"white",fontSize:"20px",fontStyle:"italic"}}>"Revolutionalizing the way you think about carbon footprint"</h1>
    </div>
    </div>
  );
}

export default Marketplace;
