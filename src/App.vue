<template>
  <div class="container">
    <main-header></main-header>
    <div class="row">
      <div class="col-md-12">
        <transition name="tabs" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'main-header': mainHeader
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
  .tabs-enter {
    transform: translateY(-20px);
    opacity: 0;
  }
.tabs-enter-active, .tabs-leave-active {
  transition: all .3s ease-in-out;
}
  .tabs-leave-active {
    transform: translateY(20px);
    opacity: 0;
  }
</style>
