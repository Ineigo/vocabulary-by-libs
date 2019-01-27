<template>
    <div :class="[$style['application']]">
        <top-bar @search="findCard" />
        <div :class="[$style['application__groups']]">
            <card-list :key="card.title" v-for="card in drawCards" :data="card"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TopBar from './components/top-bar/TopBar.vue';
import CardList from './components/card-list/CardList.vue';
import list from './data/jquery.data.json';
import CardGroup from './components/card-list/CardGroup';
import { JsonConvert } from 'json2typescript';
import CardItem from './components/card-list/CardItem';
import ICard from './types/ICard';
import Card from './components/card-list/Card';

@Component({ components: { TopBar, CardList } })
export default class Application extends Vue {
    cards: CardGroup[];
    drawCards: CardGroup[];
    query: string;

    constructor(...args: any[]) {
        super(...args);
        const jsonConvert: JsonConvert = new JsonConvert();
        this.cards = (<any>jsonConvert).deserialize(list, CardGroup);
        this.drawCards = this.cards;
    }

    findCard(query: string) {
        this.query = query;
        let finded: CardGroup[] = [];
        if (!query.length) {
            this.drawCards = this.cards;
            return;
        }
        for (let card of this.cards) {
            const findedItems = this.findCardItems(query, <Card[]> card.items);
            if (card.title.includes(query) || findedItems.length) {
                finded.push(new CardGroup(card.title, findedItems));
            }
        }
        this.drawCards = finded.length ? finded : this.cards;
    }

    findCardItems(query: string, items: Card[]) : Card[] {
        const cards: Card[] = [];
        for (let item of items) {
            let filtred = item.items.filter((card: CardItem) => {
                return card.name.includes(query) || card.help.includes(query);
            });
            const isTitle = item.title.includes(query);
            
            if (!isTitle && !filtred.length) {
                continue;
            }
            if (isTitle && !filtred.length) {
                filtred = item.items;              
            }
            cards.push(new Card(item.title, filtred));
        }
        return cards;
    }
}
</script>

<style lang="scss" module>
.application {
    &__groups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>