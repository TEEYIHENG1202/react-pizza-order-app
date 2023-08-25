import {nanoid} from 'nanoid'
import {Fragment, useState,useContext} from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Result from './Result';

function Order({UserContext})
{
    const user = useContext(UserContext);

    const [addOrderData,setAddOrderData] = useState({
        type:"",
        size:"",
        count:""
    });

    const [editOrderData,setEditOrderData] = useState({
        type:"",
        size:"",
        count:"" 
    });

    const [editOrderId,setEditOrderId] = useState(null);

    const [show,setShow]=useState(false);

    const handleAddOrderChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newOrderData = {...addOrderData,[fieldName]:fieldValue};

        setAddOrderData(newOrderData);
    }

    const handleEditOrderChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newOrderData = {...editOrderData,[fieldName]:fieldValue};

        setEditOrderData(newOrderData);
    }

    const handleAddOrderSubmit = (event) => {
        event.preventDefault();

        const newOrder = {
            id: nanoid(),
            type: addOrderData.type,
            size: addOrderData.size,
            count: addOrderData.count
        };

        const newOrders = [...user.orders,newOrder];
        user.setOrders(newOrders);

        event.target.count.value="";
        event.target.type.value="";
        event.target.size.value="";
    }

    const handleEditOrderSubmit = (event) => {
        event.preventDefault();

        const editedOrder = {
            id:editOrderId,
            type:editOrderData.type,
            size:editOrderData.size,
            count:editOrderData.count
        };

        const newOrders = [...user.orders];

        const index = user.orders.findIndex((order)=>order.id === editOrderId);

        newOrders[index] = editedOrder;

        user.setOrders(newOrders);
        setEditOrderId(null);
    }

    const handleEditClick = (event,order) => {
        event.preventDefault();
        setEditOrderId(order.id);

        const orderValues = {
            type: order.type,
            size: order.size,
            count: order.count
        }

        setEditOrderData(orderValues);
    }

    const handleCancelClick = () => {
        setEditOrderId(null);
    }

    const handleDeleteClick = (orderId) => {
        const newOrders = [...user.orders];

        const index = user.orders.findIndex((order)=>order.id === orderId);

        newOrders.splice(index,1);

        user.setOrders(newOrders);
    }

    const display = ()=>{
        setShow(true);
    }

    return (
    <>
    <div className="order">
        <h1>Add New Order</h1>
        <form onSubmit={handleAddOrderSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <select name="type" onChange={handleAddOrderChange} required>
                                <option value=""></option>
                                <option value="California Pizza">California Pizza</option>
                                <option value="Chicago Pizza">Chicago Pizza</option>
                                <option value="Detroit Pizza">Detroit Pizza</option>
                                <option value="Greek Pizza" >Greek Pizza</option>
                                <option value="Neapolitan Pizza">Neapolitan Pizza</option>
                                <option value="New York-Style Pizza">New York-Style Pizza</option>
                                <option value="Sicilian Pizza">Sicilian Pizza</option>
                                <option value="St. Louis Pizza">St. Louis Pizza</option>
                            </select>
                        </td>
                        <td>
                            <select name="size" onChange={handleAddOrderChange}  required>
                                <option value=""></option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </td>
                        <td>
                            <input type="number" name="count" min="1" onChange={handleAddOrderChange} required/>
                        </td>
                        <td className="buttonContainer">
                            <input type="submit" value="Add"/>
                            <input type="reset" value="Reset"/>
                            <input type="button" value="Finish" onClick={display}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

        <h1>Order</h1>
        <form onSubmit={handleEditOrderSubmit}>
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {user.orders.map((order,index)=>(
                        <Fragment key={index}>
                            {editOrderId === order.id ? (
                            <EditableRow editOrderData={editOrderData} handleEditOrderChange={handleEditOrderChange} handleCancelClick={handleCancelClick}/>
                            ) : (
                            <ReadOnlyRow order={order} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
                            )}
                        </Fragment>
                    ))}
                </tbody> 
            </table>
        </form>
    {show?<Result orders={user.orders} show={show} setShow={setShow} UserContext={UserContext}/>:""}
    </div>
    </>)
}
export default Order;