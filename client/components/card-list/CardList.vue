<template>
    <div :class="[$style['card-group']]">
       <h2 :class="[$style['card-group__title']]">{{ this.data.title }}</h2>
       <div :key="item.title" v-for="item in this.data.items">
            <Card :data="item" />
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CardGroup from './CardGroup';
import Card from './Card.vue';

@Component({ components: { Card } })
export default class CardList extends Vue {
    @Prop({ required: true }) data!: CardGroup;
};
</script>
<style lang="scss" module>
    .card-group {
        display: flex;
        width: 270px;
        flex-direction: column;
        margin: 5px;
        border: 1px solid #ccc;
        background: #fafafa;
        
        &__title {
            padding: 5px;
            margin: 0;
            color: #555;
        }
    }
</style>
