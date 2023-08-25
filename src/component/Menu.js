import { useContext, useState } from 'react'
import MenuImage from './MenuImage';


function Menu({UserContext})
{
    const [num,setNum]=useState();
    const [show,setShow]=useState(false);

    const user = useContext(UserContext);
    var x=[0,1,2,3,4,5,6,7];
    var index;
    const popup =(event)=>{
        index = user.imgName.indexOf(event.target.name);
        setNum(index);
        setShow(!show);
    }
    
    return (
        <>
        <div className="menuContainer">
            <h1>Menu</h1>
            <div className="imgList">
                {x.map(i=>{ return <MenuImage key={i} i={i} price={user.price} imgName={user.imgName} imgSrc={user.imgSrc} popup={popup} show={show}/>})}
            </div>
            {show?
                (<div className="show">
                    <div className="close" onClick={popup}>X</div>
                    <img className="menuImg" src={user.imgSrc[num]} alt={user.imgName[num]}/>
                    <div className="definition">
                        <p>{user.definition[num]}</p>
                    </div>
                </div>):""
            }
        </div>
    </>)
}
export default Menu;