import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'


class SingleBook extends Component {
  state = {
    isSelected: false,
  }

  render() {
    return (
      <>
      <Card
        onClick={() => this.setState({ isSelected: !this.state.isSelected })}
        style={{ border: this.state.isSelected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
        {this.state.isSelected && <CommentArea asin={this.props.book.asin}/>}
      </>
    )
  }
}

export default SingleBook
