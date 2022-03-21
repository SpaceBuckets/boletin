import Vue from 'vue'

const state = {
  updated: 0,
 
 

}

export default ({ app }, inject) => {
  inject('state', Vue.observable(state))
}