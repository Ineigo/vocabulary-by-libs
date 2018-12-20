<template>
    <input class="input" v-bind="$attrs" v-bind:value="value" v-on="listeners">
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ inheritAttrs: false })
export default class BaseInput extends Vue {
    @Prop([String,Number]) value!: String | Number;

    get listeners() {
        return Object.assign({}, this.$listeners, {
            input: (event: Event) => this.$emit('input', (<HTMLInputElement>event.target).value),
        });
    }
};
</script>

<style lang="scss"></style>
