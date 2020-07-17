<template>
  <div id="app">
    <PageHeader />
    <Sidebar />
    <main class="section-main py-6 px-8 container-lg">
      <router-view />
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'

export default {
  components: { PageHeader, Sidebar }
}
</script>

<style lang="scss" scoped>
.section-main {
  margin-left: 7rem;
  // margin-top: 5rem;
}

@media screen and (min-width: 1400px) {
  .section-main {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
