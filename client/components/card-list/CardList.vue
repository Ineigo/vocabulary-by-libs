<template>
    <div>
       ---as {{ this.data.title }} asdsa
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Card from './Card';

export default {
    name: 'CardList',

    props: {
        data: { type: Card, required: true },
    },

    data() {
        return {
            query: '',
        };
    },
};
</script>
