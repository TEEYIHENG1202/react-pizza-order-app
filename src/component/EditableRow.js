function EditableRow({editOrderData,handleEditOrderChange,handleCancelClick})
{
    return (
    <>
    <tr>
        <td>
        <select name="type" onChange={handleEditOrderChange} value={editOrderData.type} required>
            <option value="California Pizza">California Pizza</option>
            <option value="Chicago Pizza">Chicago Pizza</option>
            <option value="Detroit Pizza">Detroit Pizza</option>
            <option value="Greek Pizza" >Greek Pizza</option>
            <option value="Neapolitan Pizza">Neapolitan Pizza</option>
            <option value="New York Pizza">New York Pizza</option>
            <option value="Sicilian Pizza">Sicilian Pizza</option>
            <option value="St.Louis Pizza">St.Louis Pizza</option>
        </select>
        </td>
        <td>
        <select name="size" value={editOrderData.size} onChange={handleEditOrderChange} required>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>
        </td>
        <td>
        <input type="number" name="count" min="1" value={editOrderData.count} onChange={handleEditOrderChange} required/>
        </td>
        <td className="buttonContainer">
            <input type="submit" value="Save"/>
            <input type="button" value="Cancel" onClick={handleCancelClick}/>
        </td>
    </tr>
    </>)
}

export default EditableRow;