<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <Teleport to="body">
        <div v-if="modelValue" class="ts-modal-overlay" @click.self="$emit('update:modelValue', false)">
            <div class="ts-modal" role="dialog" :aria-label="title" aria-modal="true">
                <div class="ts-modal-header">
                    <h3 class="ts-modal-title">{{ title }}</h3>
                    <button
                        class="ts-modal-close"
                        aria-label="Cerrar"
                        @click="$emit('update:modelValue', false)"
                    >
                        ✕
                    </button>
                </div>
                <div class="ts-modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.ts-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 0.5);
}
.ts-modal {
    background-color: #fff;
    border-radius: 0.75rem;
    padding: 1.5rem;
    width: 100%;
    max-width: 28rem;
    margin: 1rem;
    position: relative;
}
.ts-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.ts-modal-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
}
.ts-modal-close {
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
    font-size: 1rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
}
.ts-modal-close:hover { color: #111827; }
</style>