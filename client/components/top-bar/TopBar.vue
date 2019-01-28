<template>
    <div :class="$style['top-bar']">
        <div>
            <base-input :class="[$style['top-bar__input']]" name="search" placeholder="Поиск" v-model="query"/>
        </div>
        <div>
            <select :class="[$style['top-bar__select']]" v-if="list.length" v-model="activePreset">
                <option :key="preset" :value="preset" v-for="preset in list">{{ preset }}</option>
            </select>
            <input id="add-json" :class="[$style['top-bar__file']]" type="file" accept=".json" />
            <label for="add-json" :class="[$style['top-bar__button']]">+</label>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Mutation, State } from 'vuex-class';
import { get } from '../../core/Http';
import BaseInput from '../base-input/BaseInput.vue';

@Component({ components: { BaseInput } })
export default class TopBar extends Vue {
    @State('query') queryString: String;
    @State('presetList') list: String[];
    @State('activePreset') active: String;

    get query(): String {
        return this.queryString;
    }

    set query(value: String) {
        this.$store.commit('search', value);
    }

    get activePreset(): String {
        return this.active;
    }
    set activePreset(value: String) {
        this.$store.commit('activate', value);
    }

    onClickAddJSON() {
        console.log('pick file');
    }
};
</script>

<style lang="scss" module>
.top-bar {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    justify-content: space-between;

    &__file {
        display: none;
    }

    &__select,
    &__input,
    &__button {
        border-radius: 2px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        background: white;
        color: #ccc;
        cursor: pointer;
        display: inline-block;
        height: 21px;
        padding: 1px 6px;
        vertical-align: top;
        
        &:hover {
            border-color: #55555560;
            color: #555;
            background: #fafafa;
        }
    }
}
</style>
