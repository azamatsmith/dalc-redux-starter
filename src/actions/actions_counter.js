//actions/actions_counter.js

export const COUNT_ADD = "COUNT_ADD";
export const COUNT_SUB = "COUNT_SUB";

export function addToCount() {
  return {type: COUNT_ADD}
}

export function subtractFromCount(count) {
  if (count <= 0) return {type: null};
  return {type: COUNT_SUB};
}

