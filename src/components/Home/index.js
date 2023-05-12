import {Component} from 'react'
// import {Link} from 'react-router-dom'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const modifiedData = data.map(p => ({
      id: p.id,
      title: p.title,
      topic: p.topic,
      author: p.author,
      imageUrl: p.image_url,
      avatarUrl: p.avatar_url,
    }))
    // console.log('data', data)
    this.setState({isLoading: false, blogsData: modifiedData})
  }

  render() {
    const {isLoading, blogsData} = this.state

    return isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <div className="main" data-testid="loader">
        <UserInfo />
        <BlogList blogsData={blogsData} />
      </div>
    )
  }
}

export default Home
