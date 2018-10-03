<template>
    <div>
        <h1>{{ message }}</h1>
        <base-input name="text" value="123" placeholder="sadd" @change="change" />
    </div>
</template>

<script>
import BaseInput from './components/base-input/BaseInput.vue';
import style from './main.style.scss';

export default {
    name: 'Application',
    components: {
        BaseInput,
    },
    data() {
        return {
            message: 'Hello !!!',
        };
    },
    methods: {
        change(e) {
            console.log(e)
        }
    }
};
</script>
