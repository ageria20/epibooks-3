import { Component } from "react";

import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";
import AddComment from "./AddComment";


class CommentArea extends Component {

    state = {
        isSelected: false,
        comments: []
    }

    fetcComments = async () => {
        this.setState({isSelected: true});

        try {
            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {headers: {
                Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg"
            }} )
            if (resp.ok) {
                this.setState({comments: await resp.json()})
                
            }
            else {
                console.log("Errore nel caricamento dei dati")
            }
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetcComments()
    }
    render() {
        return (
            <>
            <h3>Commenti</h3>
            {this.state.comments.length > 0 ?  <CommentList comments={this.state.comments}/> : <Alert> Non sono presenti recensioni </Alert>}
            <h3>Aggiungi Commento</h3>
            <AddComment asin={this.props.asin}/>
            </>
        )
    }
}

export default CommentArea