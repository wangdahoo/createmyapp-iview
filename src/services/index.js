import Vue from 'vue'
import http from './http'
window.$http = Vue.prototype.$http = http
