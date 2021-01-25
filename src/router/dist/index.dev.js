"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Index = _interopRequireDefault(require("@/views/Index.vue"));

var _Home = _interopRequireDefault(require("@/views/Home"));

var _Login = _interopRequireDefault(require("@/views/Login"));

var _Goods = _interopRequireDefault(require("@/views/Goods"));

var _Thanks = _interopRequireDefault(require("@/views/Thanks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/home',
  name: 'home',
  component: _Index["default"],
  children: [{
    path: 'home',
    component: _Home["default"]
  }, {
    path: 'goods',
    component: _Goods["default"]
  }, {
    path: 'thanks',
    component: _Thanks["default"]
  }]
}, {
  path: '/login',
  name: 'login',
  component: _Login["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;