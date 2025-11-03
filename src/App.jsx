import { useState, useEffect } from 'react'
import PostCreator from './components/PostCreator'
import SocialPost from './components/SocialPost'
import './App.css'

function App() {
  // State management for posts
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Task 3: API Integration - Fetch initial posts from DummyJSON
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        // Fetch posts from DummyJSON API (includes reactions, tags, and more)
        const response = await fetch('https://dummyjson.com/posts?limit=10')
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        
        const data = await response.json()
        
        // Transform API data to match our post structure
        const transformedPosts = await Promise.all(
          data.posts.map(async (post) => {
            // Fetch comment count for each post
            let commentCount = 0
            try {
              const commentsResponse = await fetch(`https://dummyjson.com/posts/${post.id}/comments`)
              if (commentsResponse.ok) {
                const commentsData = await commentsResponse.json()
                commentCount = commentsData.comments?.length || 0
              }
            } catch (error) {
              console.error(`Failed to fetch comments for post ${post.id}:`, error)
            }

            return {
              id: post.id,
              userId: post.userId,
              userName: `User ${post.userId}`,
              content: post.body,
              imageUrl: null, // Can add image support later
              timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(), // Random time in last 7 days
              likes: post.reactions?.likes || Math.floor(Math.random() * 100),
              comments: commentCount, // Now shows actual comment count from API
              isLiked: false,
              tags: post.tags || []
            }
          })
        )
        
        setPosts(transformedPosts)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Task 4: Handle new post submission
  const handleNewPost = (postData) => {
    const newPost = {
      id: Date.now(), // Unique ID based on timestamp
      userId: 'current',
      userName: 'Current User',
      content: postData.content,
      imageUrl: postData.imageUrl || null,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: 0,
      isLiked: false
    }
    
    // Add new post to the top of the feed
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  // Handle like functionality
  const handleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>The Interactor</h1>
        <p>Social Post Prototype</p>
      </header>

      <main className="app-main">
        {/* Task 1: Post Creator Form */}
        <PostCreator onPostSubmit={handleNewPost} />

        {/* Feed Section */}
        <section className="feed-section">
          <h2 className="feed-title">📱 Social Feed</h2>
          
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading posts...</p>
            </div>
          )}
          
          {error && (
            <div className="error">
              <p>⚠️ Error: {error}</p>
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
            <div className="empty-feed">
              <p>No posts yet. Be the first to post!</p>
            </div>
          )}
          
          {/* Task 2: Render SocialPost components */}
          <div className="posts-container">
            {posts.map(post => (
              <SocialPost
                key={post.id}
                post={post}
                onLike={handleLike}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>CIT305: Social Media Applications - Mini Project</p>
        <p>Built with ❤️ React + Vite | API: DummyJSON</p>
      </footer>
    </div>
  )
}

export default App

