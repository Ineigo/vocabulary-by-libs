<template>
    <div :class="[$style['card-group']]">
       <h2>{{ this.data.title }}</h2>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CardGroup from './CardGroup';
import CardItem from './CardItem';

@Component
export default class CardList extends Vue {
    @Prop({ type: CardGroup, required: true }) data!: CardGroup;
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
