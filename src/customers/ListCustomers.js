import { Table } from 'react-bootstrap';
import "./customers.css";
import React,{ useEffect, useState } from "react";
function ListCustomers() {
    const [data, setData] = useState([]);

    useEffect(async ()=> {
            let result = await fetch("http://127.0.0.1:8000/api/list");
            result = await result.json();
            setData(result);
    }, [])
    return (
        <>            
                <h1>List customers site</h1>
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
                                    <td className="tranfser_link"><a  className="btn btn-info" href={`http://localhost:3000/show/${item.customer_id} `} > view </a> </td>
                                </tr>
                            )
                        }   

                </Table>

                </div>

        </>
    )

}
export default ListCustomers