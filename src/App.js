import {Component} from 'react'
import CardItem from './components/CardItem'
import './App.css'



class College extends Component {
  state = {responseData: []}

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const options = {method: 'GET'}
    const fetchedData = await fetch(url, options)
    const response = await fetchedData.json()
    this.setState({responseData: response})
  }

  componentDidMount() {
    this.getData()
  }

  renderDetails = () => {}

  render() {
    const {responseData} = this.state
    return (
      <ul>
        {responseData.map(eachItem => {
          return <CardItem eachItem={eachItem} key={eachItem.id} />
        })}
      </ul>
    )
  }
}

export default College
