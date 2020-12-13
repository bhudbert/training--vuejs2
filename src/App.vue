<template>
  <div id="app" class="container-fluid">
    <b-navbar id="navbar" toggleable="lg" type="dark" >
      <router-link class="navbar-brand text-light" to="/">VUE-JS 2 - Formation</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-right m-auto">
          <router-link class="nav-link text-light mx-1" to="/simongame">Le jeu de Simon</router-link>
          <router-link class="nav-link text-light mx-1" to="/store text-light">Le Magasin</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar class="navbar navbar-dark ">

    </b-navbar>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#navbar{
  background-color: #13133d;
}

</style>


