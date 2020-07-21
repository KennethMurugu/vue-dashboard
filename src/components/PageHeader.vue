<template>
  <div class="page-header py-3 px-6">
    <div class="nav-brand">
      <div
        class="hamburger-menu mr-6"
        :class="
          $store.state.isSidebarShowing ? 'sidebar-open' : 'sidebar-closed'
        "
        @click="toggleSidebar()"
      >
        <fa-icon
          class="fa-lg icon-sidebar-open"
          icon="arrow-right"
          v-if="$store.state.isSidebarShowing"
        ></fa-icon>
        <fa-icon class="fa-lg icon-sidebar-closed" icon="bars" v-else></fa-icon>
      </div>
      <div class="app-logo mr-6">
        <p class="ma-0">V</p>
      </div>
    </div>

    <div class="search-container mr-6">
      <input
        type="text"
        class="search-input pl-5 pr-10 py-2"
        placeholder="Search..."
      />
      <fa-icon class="icon" icon="search"></fa-icon>
    </div>

    <div class="user-menu">
      <div class="notifications-container mr-6">
        <fa-icon class="fa-lg notifications" icon="bell"></fa-icon>
      </div>
      <div class="user-img-container">
        <img :src="require('@/assets/img/user-profile.png')" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    toggleSidebar() {
      this.$store.state.isSidebarShowing = !this.$store.state.isSidebarShowing
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.nav-brand {
  display: flex;
  align-items: center;

  .app-logo {
    width: 5rem;
    text-align: center;
  }
}

.hamburger-menu {
  display: none;
  transition: 0.3s ease;

  &.sidebar-open {
    transform: rotateZ(-180deg);
  }
  &.sidebar-closed {
    transform: rotateZ(0);
  }
}

.search-container {
  background-color: rgb(243, 243, 243);
  border-radius: 50px;
  border: 1px solid rgb(226, 226, 226);
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 400px;
  input {
    border: none;
    background-color: transparent;
    width: 100%;
    border-radius: 50px;

    &:focus {
      outline: none;
    }
  }

  .icon {
    position: absolute;
    right: 1rem;
  }
}

.user-menu {
  display: flex;
  align-items: center;
}

.user-img-container {
  width: 2.5rem;
  height: 2.5rem;

  img {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .nav-brand .app-logo {
    width: 3rem;
  }
  .hamburger-menu {
    display: block;
  }
  .search-container {
    width: 30px;
    text-align: center;
    background-color: transparent;
    border: none;
    padding: 5px;
    input {
      display: none;
    }

    .icon {
      position: relative;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
