import Vue from 'vue';
import Vuex from 'vuex';
import { get } from './core/Http';
import Application from './Application.vue';
import { ToolBarState } from './types/IToolBarState';

Vue.use(Vuex);
const state: ToolBarState = {
    presetList: [],
    activePreset: null,
};
const store = new Vuex.Store({
    state,
    mutations: {
        update(state: ToolBarState, list: Array<string>) {
            state.presetList = list;
        },
        activate(state: ToolBarState, value: string) {
            state.activePreset = state.presetList.find((el: string) => el === value) || null;
        },
    },
    actions: {
        update(context) {
            get<Array<Object>>('/list').then(list => {
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
