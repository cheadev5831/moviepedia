<template>
  <h1>Home</h1>
  <button @click="getMovieList">load</button><br />
  {{ state.totCnt }}
</template>

<script setup lang="ts">
import { useUser } from "@/composable/useUser";
import { reactive } from "vue";

const { fetchMovieList } = useUser();

const state = reactive({
  totCnt: 0,
});

const getMovieList = async () => {
  const params = { curPage: 1 };
  const response = await fetchMovieList(params);
  if (response) {
    state.totCnt = response?.movieListResult?.totCnt;
    saveJson(response?.movieListResult?.movieList);
  }
};

const saveJson = (data: any) => {
  console.log(data);
  /*alert("saveJson start");
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "movies.json";
  a.click();

  URL.revokeObjectURL(url);
  alert("saveJson end");*/
};
</script>
