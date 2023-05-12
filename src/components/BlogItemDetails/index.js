import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogItemDetails: []}

  componentDidMount() {
    const {match} = this.props
    // console.log('match', match)
    const {params} = match
    const {id} = params
    // console.log('id', id)

    this.fetchData(id)
  }

  fetchData = async id => {
    const res = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const p = await res.json()
    console.log(p)
    const modifiedData = {
      id: p.id,
      title: p.title,
      content: p.content,
      topic: p.topic,
      imageUrl: p.image_url,
      avatarUrl: p.avatar_url,
      author: p.author,
    }

    this.setState({isLoading: false, blogItemDetails: modifiedData})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, content, imageUrl, avatarUrl, author} = blogItemDetails

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="blogItemDetails">
        <h1>{title}</h1>
        <div className="avatar-image-name-container">
          <img src={avatarUrl} alt={author} className="avatar-image" />
          <p className="author">{author}</p>
        </div>
        <div>
          <img src={imageUrl} alt={title} className="Item-image" />
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
