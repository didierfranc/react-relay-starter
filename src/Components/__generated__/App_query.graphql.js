/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_query$ref: FragmentReference;
export type App_query = {|
  +test: ?{|
    +a: ?string
  |},
  +$refType: App_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "App_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "x",
      "type": "Float",
      "defaultValue": 0
    },
    {
      "kind": "LocalArgument",
      "name": "y",
      "type": "Float",
      "defaultValue": 0
    }
  ],
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4cd9c991d72efe885d40abf30d926435';
module.exports = node;
