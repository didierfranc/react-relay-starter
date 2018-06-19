/**
 * @flow
 * @relayHash f53b09a682111209bf42289c77616641
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_query$ref = any;
export type AppRefetchQueryVariables = {|
  x?: ?number,
  y?: ?number,
|};
export type AppRefetchQueryResponse = {|
  +$fragmentRefs: App_query$ref
|};
*/


/*
query AppRefetchQuery {
  ...App_query_1tlLEo
}

fragment App_query_1tlLEo on Query {
  test {
    a
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "x",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "y",
    "type": "Float",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppRefetchQuery",
  "id": null,
  "text": "query AppRefetchQuery {\n  ...App_query_1tlLEo\n}\n\nfragment App_query_1tlLEo on Query {\n  test {\n    a\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": [
          {
            "kind": "Variable",
            "name": "x",
            "variableName": "x",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "y",
            "variableName": "y",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "test",
        "storageKey": null,
        "args": null,
        "concreteType": "RootType",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "a",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '241ac14909c0a4a971cdd236476c4bff';
module.exports = node;
