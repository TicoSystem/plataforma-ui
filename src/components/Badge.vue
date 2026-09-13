<script setup>
defineProps({
    variant: {
        type: String,
        default: 'default',
        validator: (v) => ['default', 'success', 'warning', 'danger', 'info'].includes(v),
    },
})
</script>

<template>
    <span class="ts-badge" :class="`ts-badge--${variant}`">
        <slot />
    </span>
</template>

<style scoped>
.ts-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.625rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
}
.ts-badge--default { background-color: #f3f4f6; color: #374151; }
.ts-badge--success { background-color: #dcfce7; color: #166534; }
.ts-badge--warning { background-color: #fef9c3; color: #854d0e; }
.ts-badge--danger  { background-color: #fee2e2; color: #991b1b; }
.ts-badge--info    { background-color: #dbeafe; color: #1e40af; }
</style>