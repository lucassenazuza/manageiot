<template>
  <div>

    <div class="columns is-justify-content-flex-start">
      <div class="column is-one-fifth is-offset-1">
        <div class="field">
          <div class="control">
            <label class="label">Nome Hardware:</label>
            <input class="input" type="text" placeholder="Nome do Hardware" />
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="field">
          <div class="control">
            <label class="label">Data Início:</label>
            <input class="input" type="date" placeholder="Data Inicio" />
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <label class="label">Data Fim:</label>
          <div class="control">
            <input class="input" type="date" placeholder="Data Fim" />
          </div>
        </div>
      </div>

            <div class="column is-one-fifth">
        <div class="field">
          <label class="label">Id Hardware:</label>
          <div class="control">
            <div class="select">
              <select>
                <option>1&nbsp;&nbsp;</option>
                <option>2&nbsp;&nbsp;</option>
                <option>3&nbsp;&nbsp;</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="mb-6"></p>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  components: {},
};
</script>