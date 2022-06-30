<template>
  <div>
    <div v-if="peleador">
        <h1>¡Peleador encontrado!</h1>
        <p><b>ID: </b>{{peleador.id}}</p>
        <p><b>Nombre: </b>{{peleador.nombre}}</p>
        <img :src="peleador.imgSrc" alt="">
        <br>
        <hr>
        <div class="volver">
            <router-link to="/">Haz click aquí para volver a Inicio</router-link>
        </div>
    </div>
    <div v-if="!peleador">
        <h1>El peleador que buscas no existe.</h1>
        <div class="volver">
            <router-link to="/">Haz click aquí para volver a Inicio</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>({
   peleador:""
  }), 
  created() {
    const idPeleador= this.$route.params.id
    fetch("/peleadores.json")
      .then((res) => res.json())
      .then((data) => {
        this.peleador = data.find((item)=> (
          item.id == idPeleador
        ));
      });
  },
}
</script>

<style scoped>
    h1 {
        color: #ff7b00;
        font-weight: bold;
    }

    hr {
        width: 65%;
        display: inline-flex;
    }
    .volver a {
        font-weight: bold;
        color: #000;
        text-decoration: none;
    }
    .volver:hover a {
        color: #ff7b00;
    }
</style>