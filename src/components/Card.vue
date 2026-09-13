<script setup>
defineProps({
    padding: {
        type: String,
        default: 'md',
        validator: (v) => ['sm', 'md', 'lg', 'none'].includes(v),
    },
})
</script>

<template>
    <div class="ts-card" :class="`ts-card--${padding}`">
        <slot />
    </div>
</template>

<style scoped>
.ts-card {
    background-color: #fff;
    border-radius: 0.75rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
}
.ts-card--none  { padding: 0; }
.ts-card--sm    { padding: 0.75rem; }
.ts-card--md    { padding: 1.25rem; }
.ts-card--lg    { padding: 2rem; }
</style>