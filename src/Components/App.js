import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../helpers/createRelayEnvironment'


class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`query AppQuery { hello }`}
        render={data => <pre>{JSON.stringify(data, null, 2)}</pre>}
      />
    )
  }
}

export default App
