function ChildComp(pro){
    return(
<>
<div className="box1">

<div className="card">
<img src={pro.imagesrc} className="image"/>
  <div class="container">
<h1>{pro.name}</h1>
<h2>{pro.title}</h2>
<p>{pro.message}</p>

  </div>
</div>
</div>
</>
    );
}
export default ChildComp;