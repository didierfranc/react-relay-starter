import React, { Component, Fragment } from 'react'
import { QueryRenderer, graphql, createRefetchContainer } from 'react-relay'
import environment from '../helpers/createRelayEnvironment'

const Display = props => (
  <Fragment>
    <pre>{props.query.test.a}</pre>
    <button
      onClick={() => {
        props.relay.refetch({
          x: Math.random(),
          y: Math.random(),
        })
      }}
    >
      refetch
    </button>
  </Fragment>
)

const FragmentDisplay = createRefetchContainer(
  Display,
  graphql`
    fragment App_query on Query
      @argumentDefinitions(
        x: { type: "Float", defaultValue: 0 }
        y: { type: "Float", defaultValue: 0 }
      ) {
      test {
        a
      }
    }
  `,
  graphql`
    query AppRefetchQuery($x: Float, $y: Float) {
      ...App_query @arguments(x: $x, y: $y)
    }
  `,
)

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery($x: Float, $y: Float) {
            ...App_query @arguments(x: $x, y: $y)
          }
        `}
        render={({ props }) =>
          props ? <FragmentDisplay query={props} /> : '...'
        }
        variables={{
          x: 1,
          y: 2,
        }}
      />
    )
  }
}

export default App
