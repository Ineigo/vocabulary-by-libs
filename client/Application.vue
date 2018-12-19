<template>
    <div>
        <top-bar/>
        <!-- <card-list/> -->
    </div>
</template>

<script lang="ts">
import TopBar from './components/top-bar/TopBar.vue';
import CardList from './components/card-list/CardList.vue';
import * as list from './data/jquery.data.json';

export default {
    name: 'Application',
    components: {
        TopBar,
        CardList,
    },
    data() {
        return {
        };
    },
};
</script>
