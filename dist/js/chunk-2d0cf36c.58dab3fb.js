(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['chunk-2d0cf36c'], { 6381: function (t, e, n) { 'use strict'; n.r(e); var i = function () { var t = this, e = t.$createElement, n = t._self._c || e; return t.loading < 1 ? n('div', [t._v('\n  loading ' + t._s(t._f('percent')(t.loading)) + '\n')]) : n('div', [n('ul', t._l(Object.keys(t.tickers), function (e) { return n('li', { key: e }, [n('dl', [n('dt', [t._v(t._s(e) + ' ' + t._s(t.getPrice(e)))]), t._l(t.tickers[e], function (e, i) { return n('dd', { key: i }, [t._v('\n          ' + t._s(i) + '\n        ')]) })], 2)]) }))]) }, c = [], r = (n('25d7'), n('dc2a'), n('cf54'), n('233b')), s = { data: function () { return { loading: 0 } }, computed: { tickers: function () { return this.$store.state.cache[r['default']] } }, beforeCreate: function () { this.$nextTick(function () { this.$emit('theme', 'red') }) }, created: function () { this.init() }, methods: { init: function () { var t = this; this.$store.dispatch('$'.concat(r['default']), { progress: function (e, n) { t.loading = e / n } }) }, getPrice: function (t) { return this.tickers[t][Object.keys(this.tickers[t])[0]] } } }, o = s, u = n('048f'), d = Object(u['a'])(o, i, c, !1, null, null, null); d.options.__file = 'index.vue'; e['default'] = d.exports } }])
