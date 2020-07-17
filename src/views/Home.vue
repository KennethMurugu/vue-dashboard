<template>
  <div class="home">
    <h1 class="home-title pb-6">
      Vue Sales Dashboard
      <small class="by">
        <span class="mr-3">| by Kenneth Kimotho</span>
        <router-link to="https://github.com/KennethMurugu" class="mr-3">
          <fa-icon :icon="['fab', 'github']"></fa-icon>
        </router-link>
        <router-link to="https://twitter.com/kendotkim">
          <fa-icon :icon="['fab', 'twitter']"></fa-icon>
        </router-link>
      </small>
    </h1>

    <div class="main-stats-row">
      <MainStatCounter
        v-for="(stat, index) in mainStats"
        :key="index"
        :stat="stat"
        class="item"
      />
    </div>
  </div>
</template>

<script>
import MainStatCounter from '@/components/MainStatCounter'

export default {
  name: 'Home',
  components: {
    MainStatCounter
  },
  data() {
    return {
      mainStats: [
        {
          title: 'New Leads',
          count: 24,
          icon: 'user'
        },
        {
          title: 'Sales',
          count: 'KSH250,000',
          icon: 'money-bill'
        },
        {
          title: 'Orders',
          count: 16,
          icon: 'shopping-cart'
        },
        {
          title: 'Expenses',
          count: 'KSH185,000',
          icon: 'user'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-title {
  font-size: 1.5rem;
  font-weight: 400;
  border-bottom: 1px solid $light-black;

  .by {
    font-weight: 200;
  }
}

.main-stats-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: $break-sm) {
  .main-stats-row .item {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: $break-md) {
  .main-stats-row .item {
    width: calc(50% - 1rem);
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 1300px) {
  .main-stats-row .item {
    width: calc(25% - 1rem);
  }
}
</style>
