<template>
    <div>
        <h1>{{ message }}</h1>
        <base-input name="text" value="123" placeholder="sadd" />
    </div>
</template>

<script>
import BaseInput from './components/base-input/BaseInput.vue';
import style from './main.style.scss';

export default {
    components: {
        BaseInput,
    },
    data() {
        return {
            message: 'Hello !!!',
        };
    },
};
</script>
