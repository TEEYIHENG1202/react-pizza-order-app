import {useContext, useEffect} from 'react';
function Calculation({setTotal,type,size,count,UserContext})
{
    const user = useContext(UserContext);
    let index1= user.imgName.indexOf(type);
    let index2= user.size.indexOf(size);

    let val = user.price[index1][index2]*count;
    useEffect(()=>{
        setTotal((x)=>x+val);
    },[]);
    return (<>
        {val}
    </>);
}

export default Calculation;