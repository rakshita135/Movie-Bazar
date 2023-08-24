import './style.comp.css';
function StyleComp(){
    const styleVar = {
        backgroundColor: "#282c34",
        color:"wheat",
        width:"200px",
    
    }
    return(
        <>
       
        <div>
            <h1 style={{margin:"auto",backgroundColor: "#282c34",
        color:"wheat",
        width:"200px",}}>This is the styleVar.</h1>
            <p className="para">this is the paragraph with class para.</p>
            </div>
            </>
    );
}
export default StyleComp;