/**
 * @flow
 * @relayHash 6cf0973fbf1e1c578ed0687d7e71d395
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_query$ref = any;
export type AppQueryVariables = {|
  x?: ?number,
  y?: ?number,
|};
export type AppQueryResponse = {|
  +$fragmentRefs: App_query$ref
|};
*/


/*
query AppQuery {
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
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  ...App_query_1tlLEo\n}\n\nfragment App_query_1tlLEo on Query {\n  test {\n    a\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
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
    "name": "AppQuery",
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
(node/*: any*/).hash = '03a64f69ba391ad0ed4804a07628cede';
module.exports = node;
