import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, UPDATE_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); // { 'id': 'post', ... }
      // case UPDATE_POST:
      // return { ...state, [action.payload.data.id]: action.payload.data };
      case DELETE_POST:
        return _.omit(state, action.payload); // filter out
    default:
      return state;
  }
}
/*
'...state ' means existing state.

explain ES6 --> { ...state, [action.payload.data.id]: action.payload.data }

[action.payload.data.id] --> is 'key'. Not an array!
 action.payload.data --> is 'value'

ES5 --> 
case FETCH_POST:
const post = action.payload.data
const newState = { ...state }
newState[post.id] = post
return newState

***********************
_.mapKeys(action.payload.data, "id") means -->
'array' [ post1, post2, post3, ... ] converted to -->

'object'   {
              'id': 'post1',
              '02': 'post2',
              '03': 'post3',
              ...
            }
*/