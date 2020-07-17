<template>
  <div class="sidebar">
    <ul class="navigation-list">
      <li
        class="item"
        :class="{ active: activeIndex == 0 }"
        @mouseenter="activeIndex = 0"
      >
        <fa-icon class="icon" icon="chart-line"></fa-icon>
        <span class="text">Home</span>
        <div class="active-triangle"></div>
      </li>
      <li
        class="item"
        :class="{ active: activeIndex == 1 }"
        @mouseenter="activeIndex = 1"
      >
        <fa-icon class="icon" icon="money-bill"></fa-icon>
        <span class="text">Sales</span>
        <div class="active-triangle"></div>
      </li>
      <li
        class="item"
        :class="{ active: activeIndex == 2 }"
        @mouseenter="activeIndex = 2"
      >
        <fa-icon class="icon" icon="user"></fa-icon>
        <span class="text">Users</span>
        <div class="active-triangle"></div>
      </li>
      <li
        class="item"
        :class="{ active: activeIndex == 3 }"
        @mouseenter="activeIndex = 3"
      >
        <fa-icon class="icon" icon="cog"></fa-icon>
        <span class="text">Settings</span>
        <div class="active-triangle"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  height: calc(100vh - 5rem);
  width: 7rem;
  // background-color: #fff;
}

.navigation-list {
  list-style: none;
  padding-left: 0;
  text-align: center;
  position: relative;

  .item {
    padding: 1rem;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid rgb(221, 221, 221);

    .icon {
      font-size: 1.75rem;
    }
    .text {
      display: block;
      font-size: 0.9em;
    }

    .active-triangle {
      display: none;
      position: absolute;
      width: 0;
      height: 0;
      right: 0;
      bottom: 0;
      border-style: solid;
      border-width: 0 0 30px 30px;
      border-color: transparent transparent #639 transparent;
    }
    &.active {
      color: $color-primary;
      .active-triangle {
        display: block;
      }
    }
  }
}
</style>
