<template>
  <div>
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

props.title = 'changed'
</script>
