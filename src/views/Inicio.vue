<template>
  <div>
    <img src="../assets/martialarts.jpg" alt="">
    <h1><b>Ídolos de las<span> Artes Marciales</span></b></h1>
    <hr>
    <br>
      <div class="home">
        <div class="home1">
            <router-link to="/buscador"><i class="fa-solid fa-magnifying-glass"></i></router-link>
        </div>
        <div class="home2">
            <router-link to="/peleadores"><i class="fa-solid fa-user-ninja"></i></router-link>
        </div>
      </div>
  </div>
</template>

<script>
</script>
<style scoped>
  img {
    width: 20%;
    margin-bottom: 20px;
  }

  span {
    color: #ff7b00;
  }
  hr {
    width: 65%;
    display: inline-flex;
  }

  .home {
    display: inline-flex
  }

  .home i {
    font-size: 50px;
    padding: 0 20px;
  }
  .home1 a {
      font-weight: bold;
      color: #000;
      text-decoration: none;
  }
  .home1:hover a {
      color: #ff7b00;
  }

  .home2 a {
      font-weight: bold;
      color: #000;
      text-decoration: none;
  }
  .home2:hover a {
      color: #ff7b00;
  }
</style>