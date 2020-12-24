const toString = Object.prototype.toString

export function isDate(val: any): boolean {
  return toString.call(val) === '[Object Date]'
}

export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object'
}
