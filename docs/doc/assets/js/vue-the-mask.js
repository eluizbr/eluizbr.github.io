!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], t)
      : t((e.VueMask = {}));
})(this, function(e) {
  'use strict';
  var t = function(e, t) {
      var a = document.createEvent('HTMLEvents');
      a.initEvent(t, !0, !0), e.dispatchEvent(a);
    },
    a =
      'undefined' != typeof window && window.navigator.userAgent.toLowerCase(),
    n = a && a.indexOf('edge/') > 0,
    i = a && a.indexOf('android') > 0,
    r = a && /chrome\/\d+/.test(a) && !n;
  function u(e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = e.value,
      u = e.dataset,
      o = u.previousValue,
      s = void 0 === o ? '' : o,
      c = u.mask;
    (a || (n && n !== s && n.length > s.length)) &&
      ((e.value = (function(e, t) {
        if (!t) return e;
        var a = /^([^#ANX]+)/;
        1 == +e.length && a.test(t) && (e = a.exec(t)[0] + e);
        for (var n = '', i = 0, r = 0; r < t.length; r += 1) {
          var u = t.charAt(r);
          switch (u) {
            case '#':
            case 'A':
            case '?':
            case 'N':
            case 'X':
              break;
            default:
              e = e.replace(u, '');
          }
        }
        for (var o = 0, s = 1; s && o < t.length; o += 1) {
          var c = e.charAt(o - i),
            d = t.charAt(o);
          switch (d) {
            case '#':
              /\d/.test(c) ? (n += c) : (s = 0);
              break;
            case 'A':
              /[a-z]/i.test(c) ? (n += c) : (s = 0);
              break;
            case 'N':
              /[a-z0-9]/i.test(c) ? (n += c) : (s = 0);
              break;
            case '?':
              i += 1;
              break;
            case 'X':
              n += c;
              break;
            default:
              (n += d), c && c !== d && (e = ' ' + e);
          }
        }
        return n;
      })(n, c)),
      i && r
        ? setTimeout(function() {
            return t(e, 'input');
          }, 0)
        : t(e, 'input')),
      (e.dataset.previousValue = n);
  }
  function o(e, t) {
    e.dataset.mask = t;
  }
  var s = {
      bind: function(e, t) {
        o(e, t.value), u(e);
      },
      componentUpdated: function(e, t) {
        var a = t.value,
          n = a !== t.oldValue;
        n && o(e, a), u(e, n);
      }
    },
    c = function(e) {
      e.directive('mask', s);
    };
  (e.default = c),
    (e.VueMaskPlugin = c),
    (e.VueMaskDirective = s),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
