import {Link} from "react-router-dom";
import ChildComp from "./childcomp";

function Navbar(){
    return(
        <>
<ul className="nav1">
  <li className="comp"><Link class="active" to="/">Home</Link></li>
  <li className="comp"><Link to="/counter">Counter</Link></li>
  <li className="comp"><Link to="/contact">Contact</Link></li>
  <li className="comp"><Link to="/about">About</Link></li>
  <li className="comp"><Link to="/props">Props</Link></li>
  <li className="comp"><Link to="/props"></Link></li>
</ul>

        </>
    );

}
export default Navbar;