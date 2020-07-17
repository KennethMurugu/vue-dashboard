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

    <div class="sales-row">
      <Card class="this-year-sales-card">
        <!-- <h2>This Year vs Previous Year Sales</h2> -->
        <apexchart
          width="100%"
          height="300"
          :options="thisYearSalesChart.chartOptions"
          :series="thisYearSalesChart.series"
        ></apexchart>
      </Card>

      <Card class="country-sales-card">
        <!-- <h2>Sales by Country</h2> -->
        <apexchart
          width="100%"
          height="300"
          :options="salesByCountryChart.chartOptions"
          :series="salesByCountryChart.series"
        ></apexchart>
      </Card>
    </div>
  </div>
</template>

<script>
import MainStatCounter from '@/components/MainStatCounter'
import Card from '@/components/Card'
import { thisYearSalesChart, salesByCountryChart } from '@/charts'

export default {
  name: 'Home',
  components: {
    MainStatCounter,
    Card
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
      ],
      thisYearSalesChart,
      salesByCountryChart
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

.sales-row {
  display: flex;
  flex-direction: column;

  .this-year-sales-card,
  .country-sales-card {
    width: 100%;
  }

  .this-year-sales-card {
    margin-bottom: 1rem;
  }

  .country-sales-card {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

/*======= Responsive styles ========== */
@media screen and (min-width: $break-sm) {
  // 576px
  .main-stats-row .item {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: $break-md) {
  // 992px
  .main-stats-row .item {
    width: calc(50% - 1rem);
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 1100px) {
  .sales-row {
    flex-direction: row;

    .this-year-sales-card {
      margin-right: 1rem;
      width: calc(60% - 1rem);
    }
    .country-sales-card {
      width: 40%;
    }
  }
}

@media screen and (min-width: 1300px) {
  .main-stats-row .item {
    width: calc(25% - 1rem);
  }
}
</style>
