<template>
  <div id="app">
    <TopHeader></TopHeader>
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import TopHeader from './views/TopHeader.vue';

export default {
  name: 'App',
  components: {
    Home,
    TopHeader
  }
}
</script>

<style>

</style>
