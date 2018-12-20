<template>
    <div :class="$style['top-bar']">
        <div>
            <base-input @change="change" name="search" placeholder="Поиск" v-model="query"/>
            <button @click="change">Искать</button>
        </div>
        <div>
            <select v-if="list.length" v-model="activePreset">
                <option :key="preset" :value="preset" v-for="preset in list">{{ preset }}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Mutation, State } from 'vuex-class'
import { get } from '../../core/Http';
import BaseInput from '../base-input/BaseInput.vue';

@Component({ components: { BaseInput } })
export default class TopBar extends Vue {
    query: String = '';
    @State('presetList') list: String[];
    @State('activePreset') active: String;

    get activePreset(): String {
        return this.active;
    }
    set activePreset(value: String) {
        this.$store.commit('activate', value);
    }

    change(e : Event) {
        console.log(this.list);
    }
};
</script>

<style lang="scss" module>
.top-bar {
    display: flex;
    justify-content: space-between;
}
</style>
