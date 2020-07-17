<template>
  <div class="page-header py-3 px-6">
    <div class="nav-brand">
      <div class="app-logo mr-6">
        <p class="ma-0">V</p>
      </div>

      <div class="hamburger-menu mr-6">
        <fa-icon class="fa-lg" icon="bars"></fa-icon>
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
  name: 'PageHeader'
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
}

.nav-brand {
  display: flex;
  align-items: center;
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
</style>
