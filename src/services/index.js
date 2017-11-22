import Vue from 'vue'
import http from './http'
import cookie from './cookie'
import Storage from 'storage-js-iso'

window.$http = Vue.prototype.$http = http
window.$cookie = Vue.prototype.$cookie = cookie
window.$storage = Vue.prototype.$storage = Storage
