import * as actionTypes from "../action/actionTypes";

const initialState = [];

export default function store(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_UPDATE:
      return action.data;
    //最新添加放在最前
    case actionTypes.STORE_ADD:
      state.unshift(action.data);
      return state;
    //将id不相等的保留
    case actionTypes.STORE_RM:
      return state.filter(item => {
        if (item.id !== action.data.id) {
          return item;
        }
      });
    default:
      return state;
  }
}
