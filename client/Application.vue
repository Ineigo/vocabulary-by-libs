<template>
    <div>
        <top-bar/>
        <card-list :data="firstCard"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TopBar from './components/top-bar/TopBar.vue';
import CardList from './components/card-list/CardList.vue';
import list from './data/jquery.data.json';
import CardGroup from './components/card-list/CardGroup';
import { JsonConvert } from 'json2typescript';

@Component({ components: { TopBar, CardList } })
export default class Application extends Vue {
    cards: CardGroup[];
    firstCard: CardGroup;

    constructor(...args: any[]) {
        super(...args);
        const jsonConvert: JsonConvert = new JsonConvert();
        this.cards = (<any>jsonConvert).deserialize(list, CardGroup);
        this.firstCard = this.cards[0];
    }
}
</script>

<style lang="scss" module>
h2 {
    margin: 0;
}
</style>