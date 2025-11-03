import './Comment.css'

/**
 * Comment Component
 * Displays individual comments with user info and content
 */
<<<<<<< HEAD

=======
>>>>>>> 1ae2137eee190e40f135f32b4f7577d2fb807248
function Comment({ comment }) {
  // Format timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInSeconds = Math.floor((now - date) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  // Generate user avatar with initials
  const getUserAvatar = (userName) => {
    const initials = userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
    
    return initials
  }

  // Generate random color for avatar
  const getAvatarColor = (userId) => {
    const colors = [
      '#667eea', '#764ba2', '#f093fb', '#4facfe',
      '#43e97b', '#fa709a', '#fee140', '#30cfd0'
    ]
    const index = typeof userId === 'number' ? userId % colors.length : 0
    return colors[index]
  }

  return (
    <div className="comment">
      <div 
        className="comment-avatar"
        style={{ background: getAvatarColor(comment.user?.id || Math.random() * 8) }}
      >
        {getUserAvatar(comment.user?.username || comment.user?.fullName || 'Anonymous')}
      </div>
      
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-author">
            {comment.user?.username || comment.user?.fullName || 'Anonymous User'}
          </span>
          <span className="comment-timestamp">
            {formatTimestamp(comment.timestamp || new Date().toISOString())}
          </span>
        </div>
        
        <p className="comment-text">{comment.body}</p>
        
        {comment.likes !== undefined && (
          <div className="comment-likes">
            <span className="comment-likes-count">❤️ {comment.likes}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment

