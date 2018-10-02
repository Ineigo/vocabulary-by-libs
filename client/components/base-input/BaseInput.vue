<template>
    <input
        class="input"
        v-model="model"
        v-bind="attributes"
    />
    <!-- v-on="listeners" -->
</template>

<script>
export default {
    name: 'base-input',
    props: {
        value: {},
        placeholder: String,
        name: String,
        maxlength: [String, Number],
        readonly: Boolean,
        required: Boolean,
        disabled: Boolean,
        type: { type: String, default: 'text' },
    },

    data() {
        return {
            localValue: this.value,
        };
    },

    computed: {
        model: {
            get() {
                return this.localValue;
            },
            set(value) {
                if (
                    value.constructor
                        .toString()
                        .match(/function (\w*)/)[1]
                        .toLowerCase() !== 'inputevent'
                ) {
                    this.$nextTick(() => {
                        this.localValue = value;
                    });
                }
            },
        },
        attributes() {
            return {
                ...this.$attrs,
                type: this.type,
                id: this.id,
                name: this.name,
                disabled: this.disabled,
                required: this.required,
                placeholder: this.placeholder,
                readonly: this.readonly,
                maxlength: this.maxlength,
            };
        },
    },

    watch: {
        localValue(val) {
            this.$emit('input', val);
        },
    },
};
</script>

<style lang="scss">
</style>