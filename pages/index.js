import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
const meta = { title: 'Index title', description: 'Index description' }


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dog: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }
  async componentDidMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ loading: true })
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?limit=1'
    )
    this.setState({
      dog: data[0],
      loading: false
    })
  }
  render() {
    return (
      <Default meta={meta}>
        <div>
          <h1>This is the Front Page.</h1>
          <h3>Random dog of the day:</h3>
          <img src={this.state.dog.url} alt="" />
        </div>
      </Default>
    );
  }
}

export default IndexPage;