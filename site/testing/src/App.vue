<script setup>
import { shallowRef } from "vue";
import CompressCompare from "./CompressCompare";

const list = shallowRef([
  "https://data.police.uk/api/crimes-street-dates",
  "https://data.nasa.gov/resource/y77d-th95.json",
  "https://data.nasa.gov/resource/2vr3-k9wn.json",
  "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json",
  "https://api.nobelprize.org/v1/prize.json",
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
  "https://www.reddit.com/r/all.json",
  "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json",
]);
</script>
<template>
  <div>
    <CompressCompare v-for="url in list" :key="url" :url="url" />
  </div>
</template>