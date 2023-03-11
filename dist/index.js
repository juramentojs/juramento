var a = Object.defineProperty
var e = Object.getOwnPropertySymbols
var l = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable
var n = (s, t, o) =>
    t in s
      ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (s[t] = o),
  c = (s, t) => {
    for (var o in t || (t = {})) l.call(t, o) && n(s, o, t[o])
    if (e) for (var o of e(t)) m.call(t, o) && n(s, o, t[o])
    return s
  }
var p = (s, t) => {
  for (var o in t) a(s, o, { get: t[o], enumerable: !0 })
}
var r = {}
p(r, { UNSUBSCRIBE: () => S })
var S = Symbol()
var f = c({}, r),
  x = f
export { x as default }
//# sourceMappingURL=index.js.map
