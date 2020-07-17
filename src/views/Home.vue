<template>
  <div class="home">
    <h1 class="home-title pb-6">
      Vue Sales Dashboard
      <small class="by">
        <span class="mr-3">| by Kenneth Kimotho</span>
        <a href="https://github.com/KennethMurugu" target="_blank" class="mr-3">
          <fa-icon :icon="['fab', 'github']"></fa-icon>
        </a>
        <a href="https://twitter.com/kendotkim" target="_blank">
          <fa-icon :icon="['fab', 'twitter']"></fa-icon>
        </a>
      </small>
    </h1>

    <div class="main-stats-row mb-6">
      <MainStatCounter
        v-for="(stat, index) in mainStats"
        :key="index"
        :stat="stat"
        class="item"
      />
    </div>

    <div class="sales-row mb-6">
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

    <div class="products-and-users-row">
      <div class="popular-users">
        <Card class="item">
          <div class="user-img-container">
            <img
              :src="require('@/assets/img/male-1.png')"
              alt
              class="user-img"
            />
            <p class="name">John Doe</p>
            <p class="title">Top Seller</p>
            <p class="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae cumque. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum.
            </p>
            <button class="btn primary mb-3">Contact John</button>
            <div class="social">
              <fa-icon class="mr-3" :icon="['fab', 'twitter']"></fa-icon>
            </div>
          </div>
        </Card>
        <Card class="item">
          <div class="user-img-container">
            <img
              :src="require('@/assets/img/female-1.png')"
              alt
              class="user-img"
            />
            <p class="name">Jane Doe</p>
            <p class="title">Top Buyer</p>
            <p class="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae cumque. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum.
            </p>
            <button class="btn primary mb-3">Contact Jane</button>
            <div class="social">
              <fa-icon class="mr-3" :icon="['fab', 'twitter']"></fa-icon>
            </div>
          </div>
        </Card>
      </div>

      <div class="top-selling-products">
        <Card>
          <template v-slot:title>Top Selling Products</template>

          <div class="product-list">
            <div
              class="item"
              v-for="(product, index) in topSellingProducts"
              :key="index"
            >
              <img :src="product.img" :alt="product.name" />
              <div class="info">
                <p class="name">{{ product.name }}</p>
                <p class="description">{{ product.description }}</p>
                <p class="price">{{ product.price }}</p>
              </div>
              <button class="btn primary-inv btn-view-product">
                View Details
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import MainStatCounter from '@/components/MainStatCounter'
import Card from '@/components/Card'
import { thisYearSalesChart, salesByCountryChart } from '@/charts'
import product1 from '@/assets/img/headphones-1.jpg'
import product2 from '@/assets/img/headphones-2.jpg'
import product3 from '@/assets/img/headphones-3.jpg'
import product4 from '@/assets/img/headphones-4.jpg'

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
      salesByCountryChart,
      topSellingProducts: [
        {
          img: product1,
          name: 'Headphones 1',
          price: 'KSH 2500',
          description: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
          img: product2,
          name: 'Headphones 2',
          price: 'KSH 3500',
          description: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
          img: product3,
          name: 'Headphones 3',
          price: 'KSH 1000',
          description: 'Lorem ipsum dolor sit amet consectetur'
        }
        // {
        //   img: product4,
        //   name: 'Headphones 4',
        //   price: 'KSH 5500',
        //   description: 'Lorem ipsum dolor sit amet consectetur'
        // }
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

.products-and-users-row {
  display: flex;
  flex-direction: column;
}

.popular-users {
  margin-right: 1rem;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  .item {
    .user-img-container {
      text-align: center;
      img {
        width: 100%;
        max-width: 100px;
      }
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .name {
    font-size: 1.1em;
  }
  .title {
    color: lighten($black, 10%);
    font-size: 0.95em;
  }
  .info {
    font-size: 0.85em;
  }
}

.top-selling-products {
  width: 100%;
  .product-list {
    .item {
      display: grid;
      grid-template-columns: 80px auto auto;
      gap: 1rem;
      align-items: center;
      img {
        width: 100%;
      }

      .info {
        .name {
          color: $color-primary;
        }
        .description {
          font-size: 0.8rem;
        }
        .price {
          color: rgb(0, 93, 155);
          font-size: 0.75rem;
        }
      }

      .btn-view-product {
        font-size: 0.8rem;
      }
    }
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
  .products-and-users-row {
    flex-direction: row;
  }
}

@media screen and (min-width: 1300px) {
  .main-stats-row .item {
    width: calc(25% - 1rem);
  }
}
</style>
