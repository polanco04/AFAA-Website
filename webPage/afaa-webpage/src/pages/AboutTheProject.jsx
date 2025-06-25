import "../css/AboutTheProject.css"

function AboutTheProject(){
    return (

        <><div className="TitleBox2">
            <h1 className="projectTitle">About the Project</h1>
        </div><div>
                <h1 className ="projectHeadline">About Us</h1>
                <p className="AboutTheProjectBody">
                - We are a development team composed of <span className="highlightGreen">six undergraduate members</span>.
                <br/>- The purpose of this project is to grow our proficiency in our own respective roles through a digital product that anyone can experience.
                <br/>- Our goal is to create a unique and engaging gaming experience that combines tactical strategy with an immersive narrative.
                <br/>- Of the six members, four are pursuing <span className="highlightGreen">computer science</span>, one is pursuing <span className="highlightGreen">graphic design</span>, and one is pursuing <span className="highlightGreen">marketing</span>.
                </p>
                <h1 className="projectHeadline">About the Game</h1>
                <p className="AboutTheProjectBody indented">
                <span className="highlightRed">A Fleet Among Angels</span> is a project that wears its inspirations on its sleeves; Franchises such as <span className="highlightBlue">Legend of the Galactic Heroes</span>, <span className="highlightBlue">Mobile Suit Gundam</span>, and <span className="highlightBlue">Fire Emblem</span> all serve as strong references during the creative process for this game. From the setting to the characters to the gameplay mechanics, many aspects of fantastic works were considered during the development of this project.
                </p>
            </div></>
    );
}

export default AboutTheProject;