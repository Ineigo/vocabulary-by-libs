import Vue from 'vue';
import Vuex from 'vuex';
import Application from './Application.vue';
import { get } from './core/Http';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        presetList: [],
        activePreset: null
    },
    mutations: {
        update(state, list) {
            state.presetList = list;
        },
        activate(state, value) {
            state.activePreset = state.presetList.find(el => el === value);
        }
    },
    actions: {
        async update(context) {
            const list = await get('/list');
            context.commit('update', list);
            context.commit('activate', list.length ? list[0] : null);
        },
    },
});
store.dispatch('update');
new Vue({
    el: '#app',
    store,
    components: { Application },
    template: `<Application />`
});
