<script setup>
defineProps({
    title: {
        type: String,
        default: 'No hay datos todavía',
    },
    description: {
        type: String,
        default: '',
    },
    actionLabel: {
        type: String,
        default: '',
    },
})

defineEmits(['action'])
</script>

<template>
    <div class="ts-empty">
        <div class="ts-empty-icon" aria-hidden="true">
            <slot name="icon">📭</slot>
        </div>
        <h3 class="ts-empty-title">{{ title }}</h3>
        <p v-if="description" class="ts-empty-description">{{ description }}</p>
        <button
            v-if="actionLabel"
            class="ts-empty-action"
            @click="$emit('action')"
        >
            {{ actionLabel }}
        </button>
    </div>
</template>

<style scoped>
.ts-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    text-align: center;
    gap: 0.75rem;
}
.ts-empty-icon { font-size: 2.5rem; }
.ts-empty-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
}
.ts-empty-description {
    font-size: 0.875rem;
    color: #6b7280;
    max-width: 24rem;
}
.ts-empty-action {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--color-primary, #2563eb);
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
}
.ts-empty-action:hover { opacity: 0.9; }
</style>