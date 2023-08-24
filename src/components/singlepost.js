import {useParams} from 'react-router-dom';

const SinglePost = ()=>{
const { id } = useParams();
if(id == 1){

    return (
        <div className="post-container">
        <h2 className="post-title">This is a title</h2>
        <p className="post-para">this is a para</p>
        <p >Likes:</p>
        <button className="post-btn" onClick={'handlelike'}>
            Like
        </button>
    </div>
);
}


}
export default SinglePost;