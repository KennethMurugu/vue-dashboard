<template>
  <div class="card pa-4">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.card-title {
  font-size: 1.2rem;
}
</style>
