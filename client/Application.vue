<template>
    <div>
        <top-bar/>

        <card-list :data="firstCard" />
    </div>
</template>

<script lang="ts">
import TopBar from './components/top-bar/TopBar.vue';
import CardList from './components/card-list/CardList.vue';
import list from './data/jquery.data.json';
import CardGroup from './components/card-list/CardGroup';
import { JsonConvert } from 'json2typescript';

export default {
    name: 'Application',
    components: {
        TopBar,
        CardList,
    },
    data() {
        const jsonConvert: JsonConvert = new JsonConvert();
        const groups: CardGroup[] = (<any> jsonConvert).deserialize(list, CardGroup);
        return {
            cards: groups,
            firstCard: groups[0]
        };
    },
};
</script>

<style lang="scss" module>
    h2 {
        margin: 0;
    }
</style>