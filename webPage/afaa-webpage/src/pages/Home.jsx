import '../css/Home.css'
import {Link} from "react-router-dom";

function Home(){
    return ( 
    <>
        <div className="homeContainer">
        <div className="TitleBox">
            <h1 className="homeTitle">A Fleet Among Angels</h1>
        </div>
        <div className="hBody">
            <br/>
            <p className="subtitle">A new tactical SRPG forging its path among the stars!</p>
            <br/>
            <p className="bodyContent">Welcome to the official website for A Fleet Among Angels: a browser-based Tactical Strategy Role-Playing Game currently in active development! <br/><br/>
                                Here you can find our active development progress, learn more about our project, and try out our playable demo.
            </p>
        </div>
        <Link to ="/Progress" className="playButton">PLAY DEMO</Link>
        </div>
    </>    
    );
}

export default Home;