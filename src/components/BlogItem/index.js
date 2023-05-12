import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  onClickBlogList = () => {
    const {onClickFn, blog} = this.props
    const {id} = blog
    onClickFn(id)
  }

  render() {
    const {blog} = this.props
    const {id, title, author, imageUrl, avatarUrl, topic} = blog
    // console.log('blog', blog)
    return (
      //   <button className="bl-button">
      <Link to={`/blogs/${id}`}>
        <li className="blogList" onClick={this.onClickBlogList}>
          <img src={imageUrl} alt="blog" className="blog-image" />
          <div>
            <p className="topic">{topic}</p>
            <h3>{title}</h3>
            <div className="avatar-image-name-container">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
      //   </button>
    )
  }
}

export default BlogItem
