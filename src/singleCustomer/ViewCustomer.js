import { Table } from 'react-bootstrap';
import React,{ useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import './customer.css';
function ViewCustomer() {
    const [data, setData] = useState([]);
    const [balance, setBalance] = useState("");
    const [transfered, setTransfered] = useState(false);
    const {id} = useParams()
    async function getData(){
        let result = await fetch("http://127.0.0.1:8000/api/show/" + id);
        result = await result.json();
        setData(result);
    }
    useEffect(async ()=> {
            getData()
    }, [transfered])
    async function transfer(){
        setTransfered(true);
        const formData = new FormData();
        formData.append('balance',balance);
        let result = await fetch('http://127.0.0.1:8000/api/transfer/'+id,{
            method:'POST',
            body:formData
            
        });
        setTransfered(false);

    }
    return (
        <>            
                <h1>Single customer</h1>
                <div className='col-sm-8 offset-sm-2 '>
                <Table >
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Balance</th>
                        </tr>
                    
                        {
                            data.map((item)=>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.balance}$</td>
                                    <td className="tranfser_link"><a  className="btn btn-info" href={window.location.href + '/transfer/' +`${item.customer_id}`} > transfer </a> </td>
                                </tr>
                            )
                        }   

                </Table>
                {/* <div>
                    <h1 className='tranfer_title'>You Can Transfer money below </h1>
                    <div>
                        <input type="number" name='balance' className='form-control' 
                        placeholder='enter your money' id='amount'
                         onChange={(e) => setBalance(e.target.value)}/>
                        <button className='btn btn-primary' onClick={()=>transfer()}
                        >Transfer Money</button>
                    </div>
                </div> */}
                </div>

        </>
    )

}
export default ViewCustomer