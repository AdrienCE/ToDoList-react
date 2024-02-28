export function getNewExpirationTime() {
  return Number.POSITIVE_INFINITY;
}

let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 2;
  return result;
}