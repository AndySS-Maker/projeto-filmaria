<template>
  <div id="meus-filmes">
    <h1>Meus Filmes</h1>
    <span v-if="filmes.length <= 0">Você não possui nenhum filme salvo :(</span>
    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        <span>{{ filme.nome }}</span>
        <div>
          <router-link :to="`/filme/${filme.id}`">
            <button>Ver Detalhe</button>
          </router-link>
          <button @click="excluir(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MeusFilmes",
  data() {
    return {
      filmes: [],
    };
  },
  created() {
    const minhaLista = localStorage.getItem("myFilme");
    this.filmes = JSON.parse(minhaLista) || [];
  },
  methods: {
    excluir(id) {
      let filtroFilmes = this.filmes.filter((filme) => {
        return filme.id !== id;
      });
      return (this.filmes = filtroFilmes);
    },
  },
  watch: {
    filmes() {
      localStorage.setItem("myFilme", JSON.stringify(this.filmes));
    },
  },
};
</script>

<style scoped>
#meus-filmes {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;
}

ul li {
  padding: 0;
  list-style: none;
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

span {
  font-size: 25px;
}

button {
  margin-left: 10px;
}
</style>