import { Component } from "react";
import {Form, Button} from 'react-bootstrap'


class AddComment extends Component {

    state = {
        newComment: {
            name: "", 
            comment: "",
            rate: "1", 
            elementId: this.props.asin
        }
    }

    addComment = async (e) => {
        e.preventDefault()
        try{
            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", 
                {method: 'POST', 
                body: JSON.stringify(this.state.newComment),     
                headers: {
                    "Content-Type": "application/json",
                Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg"
            }} )
            if (resp.ok) {
                
            }
            else {
                console.log("Errore nel caricamento dei dati")
            }
        } catch (err) {
            console.log(err)
        }
        
    }

  
    
    render() {
        return(
            <Form onSubmit={(e) => this.addComment(e)}>
            <Form.Group className="mb-3" controlId="formBasicNome">
              <Form.Control type="text" placeholder="Nome" value={this.state.newComment.name} onChange={(e) => this.setState({ newComment: { ...this.state.newComment, name: e.target.value } })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicComment">
              <Form.Control
                type="text"
                placeholder="Commento"
                value={this.state.newComment.comment}
                onChange={(e) => this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } })}
              />
            </Form.Group>
            <Form.Select aria-label="Default select example" value={this.state.newComment.rate} onChange={(e) => this.setState({ newComment: { ...this.state.newComment, rate: e.target.value } })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
    
            <Button variant="primary" type="submit" className="mt-3">
              Invia
            </Button>
          </Form>
        )
    }
}

export default AddComment