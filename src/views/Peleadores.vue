<template>
  <div>
    <img src="../assets/martialarts.jpg" alt="">
    <h1><b>Peleadores</b></h1>
    <div class="listapeleadores my-5">
      <ul>
        <li
        v-for="peleador in peleadores"
        :key="peleador.id"
        @click="buscarPeleadores(peleador.id)">
        <span>{{peleador.id}} - {{peleador.nombre}}</span>
        </li>
      </ul>
    </div>
    <br>
    <router-link to="/"><button to="/" class="btn btn-outline-dark" type="button" id="button-addon2">Volver a Inicio</button></router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    peleadores: [],
  }),
  created() {
    fetch("/peleadores.json")
      .then((res) => res.json())
      .then((data) => {
        this.peleadores = data;
      });
  },
  methods: {
    buscarPeleadores(id) {
      this.$router.push(`/peleadores/${id}`);
    },
  },
};
</script>

<style scoped>
  img {
    width: 20%;
    margin-bottom: 20px;
  }
  .listapeleadores {
    display: inline-block;
    text-align: left;
  }
  
  span {
    font-weight: bold;
  }
  span:hover {
    color: #ff7b00;
    font-weight: bold;
  }
</style>