import React,{ useEffect, useState  } from "react";
import { useParams } from "react-router-dom";

    function TransferRequest() {
     const [balance, setBalance] = useState("");
     const [transfered, setTransfered] = useState(false);
     const [tranfser_response, setTranfser_response] = useState("transfer failed");

     const {id_one} = useParams()
     const {id_two} = useParams()
    
    async function transfer(){
         setTransfered(true);
        const formData = new FormData();
        formData.append('balance',balance);
         let result = await fetch('http://127.0.0.1:8000/api/show/'+id_one + '/transfer/'+id_two,{
             method:'POST',
             body:formData
            
         }).then(data => {
             console.log(data)
            if(data.status === 200)  {setTranfser_response('transfer sucesss')};
                  });

        setTransfered(false);

     }
    return (
        <>            
                <div className='col-sm-8 offset-sm-2 '>
                 <div>
                    <h1 className='tranfer_title'>You Can Transfer money below </h1>
                    <div>
                        <input type="number" name='balance' className='form-control' 
                        placeholder='enter your money' id='amount'
                         onChange={(e) => setBalance(e.target.value)}/>
                        <button className='btn btn-primary' onClick={()=>transfer()}
                        >Transfer Money</button>
                    </div>
                </div>
                
                <h1>ss {tranfser_response}</h1>
                </div>

        </>
    )

}
export default TransferRequest