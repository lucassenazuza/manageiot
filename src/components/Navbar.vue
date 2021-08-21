<template>
  <div>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"
          ><strong><i class="fas fa-broadcast-tower"></i>&nbsp; ManageIoT</strong></router-link
        >
        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navabar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <!-- Gera as listrinhas do link -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- essa div eh fechada aqui para que quando tiver celular, nao ficar feio -->
      </div>

      <!-- fazemos alias para td que escrevmos abaixo -->
      <div
        class="navbar-menu"
        id="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <!--coloca no lado direito -->
        <div class="navbar-end">
          <router-link to="/" class="navbar-item"><i class="fas fa-home"></i>&nbsp; home</router-link>
          <router-link to="/info" class="navbar-item"><i class="fas fa-microchip"></i>&nbsp; Dados</router-link>
          <router-link to="/dashboard" class="navbar-item"
            ><i class="fas fa-chart-line"></i>&nbsp; Dashboard</router-link
          >
          <router-link to="/map" class="navbar-item"
            ><i class="fas fa-map"></i>&nbsp; Mapa</router-link
          >

          <!-- cria espaçamento nos items do menu que envolve essa div -->
          <div class="navbar-item">
            <!-- cria espaçamento nos botões -->
            <div class="buttons">
              <router-link to="/login" class="button is-success"
                >Log in</router-link
              >
              <div class="dropdown is-right is-hoverable">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <i class="fas fa-cog fa-lgs"></i>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <Modal :name="modal_about" :msg="msg_about" />
                    </div>
                    <div class="dropdown-item">
                      <Modal :name="modal_help" :msg="msg_help" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Navbar",
  components: { Modal },
  data() {
    return {
      showMobileMenu: "false",
      modal_about: "Sobre",
      modal_help: "Ajuda",
      msg_help: "Conteúdo ajuda",
      msg_about: "Conteúdo Sobre",
    };
  },
};
</script>

<style scoped>
router-link {
  padding-left: 10px;
}

</style>