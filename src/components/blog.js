import { Link } from "react-router-dom";
import { posts } from "./constant/data";
import './blog.css';
const BlogList = ()=>{
    return(
        <div className="blog-list">
            <h2>Welcome to My Blog</h2>
            <ul className="ul">
                
                {posts.map((oneobj)=>{
                    return <li className="blog-item">
                    <Link to={`/posts/${oneobj.id}`}> {oneobj.title}</Link></li>
                })}
            </ul>
        </div>
    )
}
export default BlogList;