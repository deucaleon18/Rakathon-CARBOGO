import { useState ,useEffect} from "react";
import useEth from "../contexts/EthContext/useEth";
import "../styles/Marketplace.css"

function Marketplace() {
  const { state: { web3,contract1,contract2, accounts,address1,address2 } } = useEth();
  const [tokenId,setTokenId]=useState(0)
  const [nftCount,setNftCount]=useState(0)
//   let nfts=[]
  
//   useEffect(()=>{
   
//     if(contract2!=undefined)
//     {
//         const getNftCount=async()=>{
        
//             let nftc=await contract2.methods.s_tokenCounter().call()
            
//             setNftCount(nftc)
//         } 
//         getNftCount()
//     }
 
  
   
   
//   },[contract2])

//   useEffect(()=>{
   
//     const getNfts=async()=>{

//         let nftc= await contract2.methods.s_tokenCounter().call()
//         setNftCount(nftc)

//         for(let i=0;i<nftc;i++){
//             await contract1.methods.getListing(address2,i)
//             .then((res)=>{
//                 console.log(res)
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//         }
//     }
    
//     getNfts()
    
//   },[])
  
  const mintAndListNft = async () => {

    console.log('hello')
    await contract2.methods.mintNft().send({from:accounts[0]})
    .then(async(res)=>{
        console.log(res.events.CarbonMinted.returnValues.tokenId)
        setTokenId(res.events.CarbonMinted.returnValues.tokenId)
        console.log(address2)
        
        await contract1.methods.listItem(address2,tokenId,web3.utils.toWei('15','ether')).send({from:accounts[0],gas:21000})
        .then((data)=>{
            setNftCount(nftCount+1)
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })

        // await contract1.methods

    })
    
    .catch(err=>{
        console.log(err)
    })

  }


  const buyNft=async()=>{

    console.log('hello')

    await contract1.methods.buyItem(address2,0).send({from:accounts[0],gas:21000}).then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

  }


  return (
    <div className="Market">

      <button className="btns" onClick={mintAndListNft}>
        MINT NFT
      </button>
      
      <button className="btns" onClick={buyNft}>
        BUY NFT
      </button>

    </div>
  );
}

export default Marketplace;
