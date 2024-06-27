import { ListGroup } from "react-bootstrap";


const CommentList = props => {
    return (
        <ListGroup>
        {props.comments.map((comment, index) => {
            return(     
            <ListGroup.Item key={index}>
              {comment.author} <span>{comment.comment}</span>
            </ListGroup.Item>
            )
})};
      
      </ListGroup> 
    )
} 
export default CommentList