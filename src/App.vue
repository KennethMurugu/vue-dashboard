<template>
  <div id="app">
    <PageHeader />
    <Sidebar />
    <main class="section-main container-lg">
      <div
        class="sidebar-open-overlay"
        v-if="$store.state.isSidebarShowing"
        @click="toggleSidebar()"
      ></div>
      <router-view />
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'

export default {
  components: { PageHeader, Sidebar },
  methods: {
    toggleSidebar() {
      this.$store.state.isSidebarShowing = !this.$store.state.isSidebarShowing
    }
  }
}
</script>

<style lang="scss" scoped>
.section-main {
  margin-left: 7rem;
  padding: 1.5rem 2rem;
  position: relative;
}

.sidebar-open-overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.541);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9998;
}

@media screen and (min-width: 1400px) {
  .section-main {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 650px) {
  .section-main {
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em 1.25rem;
  }
}
</style>
