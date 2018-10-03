<template>
    <top-bar />
</template>

<script>
import TopBar from './components/top-bar/TopBar.vue';
import style from './main.style.scss';

export default {
    name: 'Application',
    components: {
        TopBar
    },
    data() {
        return {};
    },
};
</script>

<style module>
</style>
