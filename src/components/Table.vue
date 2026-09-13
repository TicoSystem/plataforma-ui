<script setup>
defineProps({
    columns: {
        type: Array,
        required: true,
    },
    rows: {
        type: Array,
        required: true,
    },
})

defineEmits(['row-click'])
</script>

<template>
    <div class="ts-table-wrapper">
        <table class="ts-table">
            <thead class="ts-table-head">
                <tr>
                    <th
                        v-for="col in columns"
                        :key="col.key"
                        class="ts-table-th"
                        scope="col"
                    >
                        {{ col.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, i) in rows"
                    :key="i"
                    class="ts-table-row"
                    @click="$emit('row-click', row)"
                >
                    <td
                        v-for="col in columns"
                        :key="col.key"
                        class="ts-table-td"
                    >
                        <slot :name="col.key" :row="row">
                            {{ row[col.key] }}
                        </slot>
                    </td>
                </tr>
                <tr v-if="rows.length === 0">
                    <td :colspan="columns.length" class="ts-table-empty">
                        <slot name="empty">No hay registros todavía</slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.ts-table-wrapper {
    overflow-x: auto;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
}
.ts-table {
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    border-collapse: collapse;
}
.ts-table-head {
    background-color: #f9fafb;
}
.ts-table-th {
    padding: 0.75rem 1rem;
    font-weight: 500;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
}
.ts-table-row {
    border-top: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.1s;
}
.ts-table-row:hover { background-color: #f9fafb; }
.ts-table-td {
    padding: 0.75rem 1rem;
    color: #111827;
}
.ts-table-empty {
    padding: 2rem 1rem;
    text-align: center;
    color: #9ca3af;
}
</style>