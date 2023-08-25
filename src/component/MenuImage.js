function MenuImage({i,imgName,imgSrc,price,popup})
{
    return (<>
        <div className="imgContainer" >
            <div className="imgName" >{imgName[i]}</div>
            <img className="menuImg" name={imgName[i]} onClick={(event)=>popup(event)} src={imgSrc[i]} alt={imgName[i]}/>
            <div className="priceContainer">
                <div className="small size">${price[i][0]}</div>
                <div className="medium size">${price[i][1]}</div>
                <div className="large size">${price[i][2]}</div>
            </div>
        </div>
    </>)
}

export default MenuImage;