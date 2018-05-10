<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light nav-bg-color mb-4">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" alt="">
          Vuex 1999
        </a>
    </nav>
    <div v-if='loading' class="loader loader-default is-active"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed:mapGetters({
    loading:'getLoading'
  })
}
</script>

<style lang='scss' scoped>
  @import './assets/style/loader';
  .nav-bg-color{
    background-color: #dddddd;
  }
</style>
