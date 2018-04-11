import * as actionTypes from "./actionTypes";

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  };
}
