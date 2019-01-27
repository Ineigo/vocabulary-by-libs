<template>
    <div :class="[$style['card']]">
        <h3 :class="[$style['card__title']]">{{ data.title }}</h3>
        <ul :class="[$style['card__links']]">
            <li :class="[$style['card__link']]" :key="card.title" v-for="card in data.items">
                <base-link :title="card.help" :href="card.link" target="_blank">
                    {{ card.name }}
                </base-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CardGroup from './CardGroup';
import CardItem from './CardItem';
import BaseLink from '../base-link/BaseLink.vue';

@Component({ components: { BaseLink } })
export default class Card extends Vue {
    @Prop({ required: true }) data!: CardGroup;
};
</script>
<style lang="scss" module>
    .card {
        width: 250px;
        margin: 5px;
        padding: 0 0 5px;
        border: 1px solid #fafafa;
        border-radius: 4px;
        background: #e9e9e9;
        &__links {
            list-style: none;
            padding: 0 10px;
            margin: 0;
        }

        &__title {
            padding: 5px 10px;
            margin: 0px;
            color: rgb(110, 101, 58);
        }
    }
</style>
