import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    commentCount: 0,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      commentCount: prevState.commentCount + 1,
      name: '',
      comment: '',
    }))
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
      commentCount: prevState.commentCount - 1,
    }))
  }

  render() {
    const {name, comment, commentsList, commentCount} = this.state

    return (
      <div>
        <h1>Comments</h1>
        <div className="top-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="top-img"
            />
          </div>
          <form className="top-comment">
            <p>Say something about 4.0 Technologies</p>
            <input
              type="name"
              onChange={this.onChangeName}
              placeholder="Your Name"
              value={name}
            />
            <br />
            <textarea
              type="textarea"
              onChange={this.onChangeComment}
              placeholder="Your Comment"
              value={comment}
            />
            <br />
            <button type="submit" onClick={this.addComment}>
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <div>
          <div className="comment-count-container">
            <div className="comment-count">
              <p>{commentCount}</p>
            </div>
            <p className="comment-heading">Comments</p>
          </div>
          <div style={{padding: '10px'}}>
            <ul className="comments-display-section">
              {commentsList.map(eachItem => (
                <CommentItem
                  commentInfo={eachItem}
                  toggleLikeBtn={this.toggleLikeButton}
                  deleteBtn={this.deleteComment}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
