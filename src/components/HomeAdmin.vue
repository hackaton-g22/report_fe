<template>
    <div class="menu">
        <button type="submit" class="botonmenu">Reportar Desaparecido</button>
        <button type="submit" class="botonmenu">Reportar Persona Encontrada</button>
        <button type="submit" class="botonmenu">Consutar Encontrado</button>
        <button type="submit" class="botonmenu">Consultar Casos Cerrados</button>
        <button type="submit" class="botonmenu">Generar Estadisticas</button>
        <button type="submit" class="botonmenu">Consultar Desaparecidos</button>
        <button type="submit" class="botonmenu">Causales de Desaparacion</button>
    </div>
</template>

<style scoped>
.menu{
    margin-top: 30%;
}
.botonmenu{
        display: inline-block;
        position: relative;
        text-align: center;
        width: 20%;
        margin-left: 2%;
        padding: 10px;
        margin: 20px;
        height: 100px;
   
        font-size: 20px;
        color: rgb(255, 255, 255);
        background-color: rgb(48,98, 53);
        border: none;
        cursor: pointer;
        transition: .3s ease all;
        border-radius: 5px;
        border: none;
}
</style>