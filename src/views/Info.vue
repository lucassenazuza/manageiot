<template>
  <div>
  <Title :msg="title_name" />
  <SearchBar />
  <TableData />
  </div>
</template>

<script>
import TableData from "../components/TableData.vue";
import SearchBar from "../components/SearchBar.vue";
import Title from "../components/Title.vue"

export default {
  name: "Info",
  data(){
    return{
      title_name: "Dados do Sistema"
    }
  },
  components: {
    TableData, SearchBar, Title
  },
};
</script>
