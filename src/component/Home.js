import logo from './../image/logo.png';
function Home()
{
    return (
        <>
    <div className="homeContainer">
        <div className="homeContainer1">
            <img src={logo} alt="Pizza"/>
        </div>
        <div className="homeContainer2">
            <h1>Welcome Super Pizza</h1>
            <ul>
                <li>The price of pizza is cheap and reasonable!!!</li>
                <li>Provide three sizes of pizza which are "Small", "Medium" and "Large"!!!</li>
            </ul>
        </div>
    </div>
    </>)
}
export default Home;