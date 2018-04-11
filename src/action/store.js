import * as actionTypes from "./actionTypes";

//添加收藏
export function add(item) {
  return {
    type: actionTypes.STORE_ADD,
    data: item
  };
}
//更新收藏
export function update(data) {
  return {
    type: actionTypes.STORE_UPDATE,
    data
  };
}
//取消收藏
export function rm(item) {
  return {
    type: actionTypes.STORE_RM,
    data: item
  };
}
