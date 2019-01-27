<template>
    <a :class="[$style['base-link']]" v-bind="$attrs">
        <slot />
    </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ inheritAttrs: false })
export default class BaseLink extends Vue {
};
</script>

<style lang="scss" module>
    .base-link {
        text-decoration: none;
        color: rgb(99, 158, 185);
        &:hover {
            text-decoration: underline;
        }
    }
</style>
