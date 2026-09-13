<script setup>
defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="ts-input-wrapper">
        <label v-if="label" class="ts-input-label">{{ label }}</label>
        <input
            class="ts-input"
            :class="{ 'ts-input--error': error }"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :aria-invalid="!!error"
            :aria-describedby="error ? 'input-error' : undefined"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <span v-if="error" id="input-error" class="ts-input-error" role="alert">
            {{ error }}
        </span>
    </div>
</template>

<style scoped>
.ts-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.ts-input-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}
.ts-input {
    padding: 0.5rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s;
}
.ts-input:focus {
    border-color: var(--color-primary, #2563eb);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary, #2563eb) 20%, transparent);
}
.ts-input:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
}
.ts-input--error {
    border-color: #dc2626;
}
.ts-input-error {
    font-size: 0.75rem;
    color: #dc2626;
}
</style>