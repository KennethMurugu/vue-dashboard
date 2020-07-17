<template>
  <div class="main-stat-counter">
    <Card>
      <div class="stat-body">
        <fa-icon class="stat-icon" :icon="stat.icon"></fa-icon>
        <div class="stat-info">
          <p class="title">{{ stat.title }}</p>
          <p class="count">{{ stat.count }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'MainStatCounter',
  components: { Card },
  props: {
    stat: {
      default: () => {
        return {
          title: 'N/A',
          count: 0,
          icon: 'user'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.stat-body {
  display: flex;
  align-items: center;
}

.stat-icon {
  margin-right: 1rem;
  color: lighten($color-primary, 20%);
  font-size: 2.5rem;
  width: 50px;
}
.stat-info {
  .title,
  .count {
    margin-top: 0;
    margin-bottom: 0rem;
  }

  .title {
    font-size: 0.9rem;
  }
  .count {
    color: $color-primary;
    font-size: 1.5rem;
  }
}
</style>
