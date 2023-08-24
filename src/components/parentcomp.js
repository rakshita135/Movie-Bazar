import ChildComp from "./childcomp";

function ParentComp(){
    const myCardData = [
        {name:"Rakshita", title:"Student", Message:"Hello!",imagesrc:"img_avatar2.png"},
        {name:"Atishay", title:"Student", Message:"Hello!",imagesrc:"img_avatar.png"},
        {name:"tanisha", title:"Student", Message:"Hello!" ,imagesrc:"img_avatar2.png"},
        {name:"Ati", title:"Student", Message:"Hello!",imagesrc:"img_avatar.png"},
        {name:"Shubham", title:"Student", Message:"Hello!",imagesrc:"img_avatar.png"},
    ]
    return(
<>
{myCardData.map((obj)=>{
    return(
    
        <ChildComp name={obj.name} message={obj.message} title={obj.title} imagesrc={obj.imagesrc}/>
        
    )
})}


</>
    );
}
export default ParentComp;