<template>
    <input
        class="input"
        v-bind:value="value"
        v-bind="$attrs"
        v-on="listeners"
    />
</template>

<script>
export default {
    name: 'BaseInput',
    inheritAttrs: false,
    props: ['value'],

    computed: {
        listeners: function() {
            return Object.assign({}, this.$listeners, {
                input: event => this.$emit('input', event.target.value),
            });
        },
    },
};
</script>

<style lang="scss">
</style>