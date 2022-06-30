<template>
    <div>
        <h1>La página que buscas no existe.</h1>
        <div class="volver">
            <router-link to="/">Haz click aquí para volver al inicio</router-link>
        </div>
    </div>
</template>
<style scoped>
    h1 {
        color: #ff7b00;
        font-weight: bold;
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