<template>
  <section class="hero is-info is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-burger burger" data-target="navbarMenuHero" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarMenuHero" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
            <div class="navbar-end">
              <a class="navbar-item" href="https://paper.ckyol.moe">
                Paper
              </a>
              <a class="navbar-item" href="https://blog.ckyol.moe">
                Blog
              </a>
              <a class="navbar-item" href="https://git.ckyol.moe">
                Git
              </a>
              <a class="navbar-item" href="https://bbs.ckyol.moe">
                BBS
              </a>
              <a class="navbar-item" href="https://rss.ckyol.moe">
                RSS
              </a>
              <a class="navbar-item" href="https://port.ckyol.moe">
                Docker
              </a>
              <a class="navbar-item" href="https://netdata.ckyol.moe">
                NetData
              </a>
              <a class="navbar-item" href="https://chart.ckyol.moe">
                Chart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="./assets/aqxiv.png" />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      showNav: false
    }
  }
}
</script>

<style >

</style>
