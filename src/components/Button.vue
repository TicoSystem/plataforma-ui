<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (v) => ['primary', 'secondary', 'danger'].includes(v),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <button
        class="ts-btn"
        :class="`ts-btn--${variant}`"
        :disabled="disabled"
        :aria-disabled="disabled"
    >
        <slot />
    </button>
</template>

<style scoped>
.ts-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s;
}
.ts-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
.ts-btn--primary {
    background-color: var(--color-primary, #2563eb);
    color: #fff;
}
.ts-btn--primary:hover:not(:disabled) { opacity: 0.9; }
.ts-btn--secondary {
    background-color: #f3f4f6;
    color: #1f2937;
}
.ts-btn--secondary:hover:not(:disabled) { background-color: #e5e7eb; }
.ts-btn--danger {
    background-color: #dc2626;
    color: #fff;
}
.ts-btn--danger:hover:not(:disabled) { opacity: 0.9; }
</style>