import { useState } from 'react';
import Calculation from './Calculation';

function Result({orders,show,setShow,UserContext})
{
    const [total,setTotal] = useState(0);

    return (<>
        <>
        {show?
            <div className="resultContainer">
                <div className="result">
                    <div className="close" onClick={()=>setShow(false)}>X</div>
                    <table>
                        <tbody>
                        <tr><th>Type</th><th>Size</th><th>Count</th><th>Amount</th></tr>
                        {orders.map((order,index)=>(<tr key={index}><td>{order.type}</td><td>{order.size}</td><td>{order.count}</td><td><Calculation type={order.type} size={order.size} count={order.count} setTotal={setTotal} UserContext={UserContext}/></td></tr>))}
                        <tr><th colSpan="3">Total</th><th>{total/2}</th></tr>
                        </tbody>
                    </table>
                </div>
            </div>:""
        }
        </>
    </>)
}

export default Result;