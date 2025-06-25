import "../css/Progress.css"

function Progress(){
    return (
    <div>
        <div className="progressBox">
        <h1 className="progressTitle">Progress</h1>
        </div>
        <div className="body">
            <p className="progressBody">“A Fleet Among Angels” is actively under development. The game is still in the early stages of development. 
            <br/><br/><br/> While there is no current progress to show, here is what we are working on:
		    <br/><br/>- Establishing core gameplay mechanics (Movement, attacks, abilities)
            <br/>- Designing and implementing the initial set of units and their skills
            <br/>- Developing the first playable levels and enemy AI to publish our demo.
            <br/>- Crafting the art style and user interface.
        </p>
        </div>
    </div>
    );
}

export default Progress;