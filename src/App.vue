<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link :to="{name: 'buscador'}">Buscador</router-link> |
      <router-link to="/peleadores">Peleadores</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

nav a:hover {
  color: #ff7b00;
}
</style>