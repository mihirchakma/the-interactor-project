import { useState } from 'react'
import './PostCreator.css'

/**
 * Task 1: Post Creator Form Component,
 * Allows users to create new posts with text content and optional image URL
 */

function PostCreator({ onPostSubmit }) {
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [errors, setErrors] = useState({})

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {}
    
    if (!content.trim()) {
      newErrors.content = 'Text content is required'
    } else if (content.length < 5) {
      newErrors.content = 'Content must be at least 5 characters'
    }
    
    if (imageUrl && !isValidUrl(imageUrl)) {
      newErrors.imageUrl = 'Please enter a valid URL'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Simple URL validation
  const isValidUrl = (string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Pass data to parent component
      onPostSubmit({
        content: content.trim(),
        imageUrl: imageUrl.trim()
      })
      
      // Reset form
      setContent('')
      setImageUrl('')
      setErrors({})
      
      // Show success feedback
      showSuccessMessage()
    }
  }

  const showSuccessMessage = () => {
    const button = document.querySelector('.post-btn')
    button.textContent = '✓ Posted!'
    button.style.background = '#28a745'
    
    setTimeout(() => {
      button.textContent = '📤 Post'
      button.style.background = ''
    }, 2000)
  }

  return (
    <div className="post-creator">
      <h2 className="creator-title">✏️ Create New Post</h2>
      
      <form onSubmit={handleSubmit} className="creator-form">
        {/* Text Content Input (Required) */}
        <div className="form-group">
          <label htmlFor="content">
            What's on your mind? <span className="required">*</span>
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
            rows="5"
            className={errors.content ? 'error' : ''}
          />
          {errors.content && (
            <span className="error-message">{errors.content}</span>
          )}
          <div className="char-counter">
            {content.length} characters
          </div>
        </div>

        {/* Image URL Input (Optional) */}
        <div className="form-group">
          <label htmlFor="imageUrl">
            Image URL <span className="optional">(optional)</span>
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className={errors.imageUrl ? 'error' : ''}
          />
          {errors.imageUrl && (
            <span className="error-message">{errors.imageUrl}</span>
          )}
          {imageUrl && !errors.imageUrl && (
            <div className="image-preview">
              <img src={imageUrl} alt="Preview" onError={(e) => {
                e.target.style.display = 'none'
                setErrors({ ...errors, imageUrl: 'Failed to load image' })
              }} />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="post-btn">
          📤 Post
        </button>
      </form>

      {/* Helper Tips */}
      <div className="creator-tips">
        <h3>💡 Tips</h3>
        <ul>
          <li>Be respectful and kind</li>
          <li>Share interesting content</li>
          <li>Use clear images (PNG, JPG, GIF)</li>
        </ul>
      </div>
    </div>
  )
}

export default PostCreator

