function ReadOnlyRow({order,handleEditClick,handleDeleteClick})
{
    return (
    <>
    <tr>
        <td>{order.type}</td>
        <td>{order.size}</td>
        <td>{order.count}</td>
        <td className="buttonContainer">
            <input type="button" value="Edit" onClick={(event)=>handleEditClick(event,order)}/>
            <input type="button" value="Delete" onClick={(event)=>handleDeleteClick(order.id)}/>
        </td>
    </tr>
    </>)
}

export default ReadOnlyRow;