import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  console.log(props)
  const {commentInfo, toggleLikeBtn, deleteBtn} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentInfo

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'Liked' : 'Like'

  const likeButton = () => {
    toggleLikeBtn(id)
  }

  const deleteButton = () => {
    deleteBtn(id)
  }

  return (
    <li>
      <div className="profile-name">
        <div className={`profileBg ${initialClassName}`}>
          <p style={{fontSize: '16px'}}>{name[0].toUpperCase()}</p>
        </div>
        <p style={{fontWeight: 500, fontSize: '20px', color: '#334155'}}>
          {name}
        </p>
        <div>
          <p style={{marginLeft: '24px', color: '#94a3b8', fontWeight: 500}}>
            {formatDistanceToNow(date)}
          </p>
        </div>
      </div>

      <div className="comment-section">
        <p style={{color: '#334155'}}>{comment}</p>
      </div>

      <div className="like-delete">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button onClick={likeButton} className="btn" type="button">
            <img className="logo" src={likeImg} alt="like" />
          </button>
          <p className={likeText} style={{marginLeft: '4px', fontWeight: 500}}>
            {likeText}
          </p>
        </div>
        <button
          onClick={deleteButton}
          data-testid="delete"
          className="btn"
          type="button"
        >
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
