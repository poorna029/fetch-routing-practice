import {Component} from 'react'
import {Link} from 'react-router-dom'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  onClickFn = id => {
    console.log(id)
    return <Link to={`/blogs/${id}`} />
  }

  render() {
    const {blogsData} = this.props
    // console.log('arey', this.props, blog, blogsData)
    // const {title, author, imageUrl, avatarUrl, topic} = blogsData
    // console.log('blog', blog)
    return (
      //   <button className="bl-button">

      <ul className="ul">
        {blogsData.map(p => (
          <BlogItem key={p.id} blog={p} onClickFn={this.onClickFn} />
        ))}
      </ul>

      //   </button>
    )
  }
}

export default BlogList
