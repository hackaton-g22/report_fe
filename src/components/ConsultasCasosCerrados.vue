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
                    <th>Header1</th>
                    <th>Header2</th>
                    <th>Header3</th>
                </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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