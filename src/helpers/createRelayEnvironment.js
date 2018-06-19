import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const q = (operation, variables, cacheConfig, uploadables) =>
  fetch('https://gql.cool/abc208', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  }).then(response => response.json())

const network = Network.create(q)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({ network, store })
