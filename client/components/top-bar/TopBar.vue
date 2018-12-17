<template>
    <div :class="$style['top-bar']">
        <div>
            <base-input name="search" v-model="query" placeholder="Поиск" @change="change" />
            <button @click="change">Искать</button>
        </div>
        <div>
            <select v-if="list.length" v-model="activePreset">
                <option v-for="preset in list" :key="preset" :value="preset"> {{ preset }} </option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { get } from '../../core/Http';
import BaseInput from '../base-input/BaseInput.vue';

export default {
    name: 'TopBar',

    data() {
        return {
            query: '',
        };
    },

    components: {
        BaseInput,
    },

    computed: {
        ...mapState({ list: 'presetList', active: 'activePreset' }),
        activePreset: {
            get() {
                return this.active;
            },
            set(value) {
                this.$store.commit('activate', value);
            },
        },
    },

    methods: {
        change(e) {},
    },
};
</script>

<style lang="scss" module>
.top-bar {
    display: flex;
    justify-content: space-between;
}
</style>
