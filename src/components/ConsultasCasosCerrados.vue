<template>
<div id="main" class="main">
  <h1>Consulta Casos Cerrados</h1>
      <div id="consulta" class="consulta">
          <form id="casoscerrados">
              <input type="date" id="finicial" name="finicial" placeholder="Fecha Inicial">
              <input type="date" id="ffinal" name="ffinal" placeholder="Fecha Final">
              <input type="submit" class="like" value="Consultar">
          </form>

                  <div class="container-table">
            <table>
                <tr>
                    <th>Cédula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Fecha desaparición</th>
                    <th>Ciudad</th>
                </tr>
                    <tr>
                        <td>0123456789</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>2021/12/11</td>
                        <td>Bogotá</td>
                    </tr>
            </table>
        </div>

      </div>
</div>
</template>

<script>
export default {
  name: "ConsultasCasosCerrados",

  data: function () {},

  methods: {},

  created: function () {},
};
</script>

<style>

</style>