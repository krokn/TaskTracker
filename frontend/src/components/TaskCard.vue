<template>
  <div
    class="card"
    draggable="true"
    @dragstart="onDragStart"
  >
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  task: {
    id: number
    title: string
    status: string
  }
}>()

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData(
    "taskId",
    props.task.id.toString()
  )
}
</script>

<style scoped>
.card {
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}
</style>
