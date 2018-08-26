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
              <a v-for="item of linkData" v-bind:key="item" class="navbar-item" v-bind:href="item.link">
                  {{ item.name }}
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
      showNav: false,
      linkData: [
        {name: 'Paper', link: 'https://paper.ckyol.moe'},
        {name: 'Blog', link: 'https://blog.ckyol.moe'},
        {name: 'Git', link: 'https://git.ckyol.moe'},
        {name: 'BBS', link: 'https://bbs.ckyol.moe'},
        {name: 'RSS', link: 'https://rss.ckyol.moe'},
        {name: 'Docker', link: 'https://port.ckyol.moe'},
        {name: 'NetData', link: 'https://netdata.ckyol.moe'},
        {name: 'Chart', link: 'https://chart.ckyol.moe'},
        {name: 'Disk', link: 'https://pan.ckyol.moe'},
        {name: 'Aria', link: 'https://arui.ckyol.moe'}
      ]
    }
  }
}
</script>

<style >

</style>
