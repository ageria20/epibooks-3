import { ListGroup } from "react-bootstrap"

const SingleComment = props => {
    return (
    <ListGroup.Item >
        {props.author} <span>{props.comment}</span>
    </ListGroup.Item>
    )
}
export default SingleComment