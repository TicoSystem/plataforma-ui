<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    message: {
        type: String,
        default: '',
    },
    variant: {
        type: String,
        default: 'success',
        validator: (v) => ['success', 'error', 'warning', 'info'].includes(v),
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <Teleport to="body">
        <Transition name="ts-toast">
            <div
                v-if="modelValue"
                class="ts-toast"
                :class="`ts-toast--${variant}`"
                role="alert"
                aria-live="polite"
            >
                <span class="ts-toast-message">{{ message }}</span>
                <button
                    class="ts-toast-close"
                    aria-label="Cerrar notificación"
                    @click="$emit('update:modelValue', false)"
                >
                    ✕
                </button>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.ts-toast {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    min-width: 16rem;
    max-width: 24rem;
}
.ts-toast--success { background-color: #dcfce7; color: #166534; }
.ts-toast--error   { background-color: #fee2e2; color: #991b1b; }
.ts-toast--warning { background-color: #fef9c3; color: #854d0e; }
.ts-toast--info    { background-color: #dbeafe; color: #1e40af; }
.ts-toast-message  { flex: 1; font-size: 0.875rem; font-weight: 500; }
.ts-toast-close {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.6;
    font-size: 0.875rem;
}
.ts-toast-close:hover { opacity: 1; }
.ts-toast-enter-active,
.ts-toast-leave-active { transition: all 0.3s ease; }
.ts-toast-enter-from,
.ts-toast-leave-to { opacity: 0; transform: translateY(1rem); }
</style>