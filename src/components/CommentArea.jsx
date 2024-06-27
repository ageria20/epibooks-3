import { Component } from "react";

import CommentList from "./CommentList";


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
            <CommentList comments={this.state.comments}/>
        )
    }
}

export default CommentArea