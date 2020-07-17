<template>
  <div id="app">
    <PageHeader />
    <Sidebar />
    <main class="section-main pa-3">
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
}
</style>
