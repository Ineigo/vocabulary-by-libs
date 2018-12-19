<template>
    <div :class="[$style['card-group']]">
       <h2>{{ this.data.title }}</h2>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import CardGroup from './CardGroup';
import CardItem from './CardItem';

export default {
    name: 'CardList',

    props: {
        data: { type: CardGroup, required: true },
    },

    data() {
        return {
            query: '',
        };
    },
};
</script>
<style lang="scss" module>
    .card-group {
        width: 250px;
        padding: 10px 15px;
        border: 1px solid #fafafa;
        background: #ccc;
    }
</style>
