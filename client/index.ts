import Vue from 'vue';
import Vuex from 'vuex';
import { get } from './core/Http';
import Application from './Application.vue';
import { RootState } from './types/RootState';

Vue.use(Vuex);
const state: RootState = {
    presetList: [],
    activePreset: null,
};
const store = new Vuex.Store({
    state,
    mutations: {
        update(state: RootState, list: Array<string>) {
            state.presetList = list;
        },
        activate(state: RootState, value: string) {
            state.activePreset = state.presetList.find((el: string) => el === value) || null;
        },
    },
    actions: {
        update(context) {
            get('/list').then((list: Array<Object>) => {
                context.commit('update', list);
                context.commit('activate', list.length ? list[0] : null);
            });
        },
    },
});
store.dispatch('update');

new Vue({
    el: '#app',
    store,
    components: { Application },
    template: `<Application />`,
});
