import { useState } from 'react'
import Comment from './Comment'
import './SocialPost.css'

/**
 * Task 2: Reusable Social Post Component
 * Displays individual posts with user info, content, image, and interactions
 */

function SocialPost({ post, onLike }) {
  const [imageError, setImageError] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])
  const [commentsLoading, setCommentsLoading] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [commentsLoaded, setCommentsLoaded] = useState(false)

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

  // Fetch comments for this post from API
  const fetchComments = async () => {
    if (commentsLoaded) {
      setShowComments(!showComments)
      return
    }

    try {
      setCommentsLoading(true)
      // Fetch comments from DummyJSON API
      const response = await fetch(`https://dummyjson.com/posts/${post.id}/comments`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      
      const data = await response.json()
      setComments(data.comments || [])
      setCommentsLoaded(true)
      setShowComments(true)
      setCommentsLoading(false)
    } catch (error) {
      console.error('Error fetching comments:', error)
      setCommentsLoading(false)
      // Show mock comment if API fails
      setComments([
        {
          id: 1,
          body: 'This is a sample comment. Unable to load real comments.',
          user: { username: 'System', id: 0 },
          timestamp: new Date().toISOString()
        }
      ])
      setShowComments(true)
    }
  }

  // Handle adding a new comment
  const handleAddComment = async (e) => {
    e.preventDefault()
    
    if (!commentText.trim()) return

    // Create new comment object
    const newComment = {
      id: Date.now(),
      body: commentText.trim(),
      user: { 
        username: 'Current User',
        fullName: 'Current User',
        id: 'current'
      },
      timestamp: new Date().toISOString(),
      likes: 0
    }

    // Add comment to the list
    setComments(prev => [...prev, newComment])
    setCommentText('')

    // Optional: Send to API (DummyJSON supports POST but it's simulated)
    try {
      await fetch(`https://dummyjson.com/posts/${post.id}/comments/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: commentText.trim(),
          postId: post.id,
          userId: 1
        })
      })
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  return (
    <article className="social-post">
      {/* Post Header - User Info */}
      <div className="post-header">
        <div 
          className="user-avatar"
          style={{ background: getAvatarColor(post.userId) }}
        >
          {getUserAvatar(post.userName)}
        </div>
        
        <div className="user-info">
          <h3 className="user-name">{post.userName}</h3>
          <time className="post-timestamp">
            {formatTimestamp(post.timestamp)}
          </time>
        </div>

        {/* Badge for current user posts */}
        {post.userId === 'current' && (
          <span className="user-badge">You</span>
        )}
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* Post Image (if provided) */}
      {post.imageUrl && !imageError && (
        <div className="post-image">
          <img 
            src={post.imageUrl} 
            alt="Post content"
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {/* Post Footer - Interactions */}
      <div className="post-footer">
        <div className="post-stats">
          <span className="stat-item">
            {post.likes} {post.likes === 1 ? 'like' : 'likes'}
          </span>
          <span 
            className="stat-item clickable"
            onClick={fetchComments}
            style={{ cursor: 'pointer' }}
          >
            {comments.length > 0 ? comments.length : post.comments} {comments.length === 1 ? 'comment' : 'comments'}
          </span>
        </div>

        <div className="post-actions">
          {/* Like Button */}
          <button 
            className={`action-btn like-btn ${post.isLiked ? 'liked' : ''}`}
            onClick={() => onLike(post.id)}
            aria-label={post.isLiked ? 'Unlike' : 'Like'}
          >
            <span className="action-icon">
              {post.isLiked ? '❤️' : '🤍'}
            </span>
            <span className="action-text">Like</span>
          </button>

          {/* Comment Button - Now functional */}
          <button 
            className={`action-btn comment-btn ${showComments ? 'active' : ''}`}
            onClick={fetchComments}
            aria-label="Comment"
            disabled={commentsLoading}
          >
            <span className="action-icon">💬</span>
            <span className="action-text">
              {commentsLoading ? 'Loading...' : showComments ? 'Hide Comments' : 'Comment'}
            </span>
          </button>

          {/* Share Button (Static for demo) */}
          <button 
            className="action-btn share-btn"
            aria-label="Share"
          >
            <span className="action-icon">🔗</span>
            <span className="action-text">Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="comments-section">
          {/* Add Comment Form */}
          <form className="add-comment-form" onSubmit={handleAddComment}>
            <input
              type="text"
              className="comment-input"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button 
              type="submit" 
              className="comment-submit-btn"
              disabled={!commentText.trim()}
            >
              Post
            </button>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))
            )}
          </div>
        </div>
      )}
    </article>
  )
}

export default SocialPost

