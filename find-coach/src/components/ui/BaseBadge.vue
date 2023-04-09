<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['title', 'type'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #132c39;
  color: white;
}

.backend {
  background-color: #105455;
  color: white;
}

.career {
  background-color: #3c4b5f;
  color: white;
}
</style>