import React, { Component } from "react";
import { withRouter } from "react-router";
import "./EditCocktail.css";
import PostsContext from '../contexts/PostsContext';
import config from '../config';
import TokenService from '../services/token-service';


class EditCocktail extends Component {
  static contextType = PostsContext;

  state = {
    error: null,
    id: '',
    usernotes: '',
    rating_rating: 1,
  };

  componentDidMount() {
    const { post_id } = this.props.match.params
    fetch(config.API_ENDPOINT + `/drinks/${post_id}`, {
        method: 'GET',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
    })
    .then(res => {
        if (!res.ok)
            return res.json().then(error => Promise.reject(error))
            return res.json()
    })
    .then(responseData => {
        this.setState({
            id: responseData.id,
            usernotes: responseData.usernotes,
            rating: Number(responseData.rating),
        })
    })
    .catch(error => {
        console.error(error)
        this.setState({error})
    })
  }

  handleChangeUsernotes = e => {
    this.setState({ usernotes: e.target.value })
  };

  handleChangeRating = e => {
    this.setState({ rating: Number(e.target.value) })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { post_id } = this.props.match.params
    //this.state was updated by above handler functions
    const { id, usernotes, rating } = this.state
    const newPost = { id, usernotes, rating }
    fetch(config.API_ENDPOINT + `/drinks/${post_id}`, {
        method: 'PATCH',
        body: JSON.stringify(newPost),
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then((res) => {
          this.resetFields(newPost)
          this.context.updateDrink(newPost)
          this.props.history.push('/cocktails')
      })
      .catch(error => {
          console.error(error)
          this.setState({error})
      })
  }

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || '',
      usernotes: newFields.usernotes || '',
      rating: Number(newFields.rating) || '',
    })
  }

 handleClickCancel = () => {
        this.props.history.push("/cocktails");
      };
    
  render() {
    const {id, usernotes, rating, error} = this.state
    return (
      <div> 
        <main role="main">
      <header>
        <h1 className='edit-location-header'>Edit Cocktail Details</h1>
      </header>
      <section className="edit-post-section">
        <form id="edit-post" onSubmit={this.handleSubmit}>
        <div className='EditPost__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <input
            type='hidden'
            name='id'
          />
          <div className="form-section">
            <label htmlFor="usernotes">Add your notes:</label>
            <textarea id="usernotes" name="usernotes" rows="15" placeholder="Notes go here..." value={usernotes || ''} onChange={this.handleChangeUsernotes}></textarea>
          </div>
          
          <button type="submit">Submit Changes</button>
          <button type="button" onClick={this.handleClickCancel}>Cancel</button>
        </form>
      </section>
    </main>
      </div>
    );
  }
}

export default withRouter(EditCocktail);