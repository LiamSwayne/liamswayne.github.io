<script setup>
import { shallowRef, computed, onMounted, defineProps } from "vue";
import {
  JSONtoStream,
  compressStream,
  responseToBuffer,
  responseToJSON,
} from "./compress";

const props = defineProps(["url"]);

const size = shallowRef(0);
const compressedSize = shallowRef(0);
const data = shallowRef(null);

onMounted(async () => {
  data.value = await responseToJSON(await fetch(props.url));

  size.value = new TextEncoder().encode(JSON.stringify(data.value)).length;

  compressedSize.value = (
    await responseToBuffer(await compressStream(JSONtoStream(data.value)))
  ).byteLength;
});

const sizeInKb = computed(() => size.value / 1024);
const sizeInMb = computed(() => sizeInKb.value / 1024);

const compressedSizeInKb = computed(() => compressedSize.value / 1024);
const compressedSizeInMb = computed(() => compressedSizeInKb.value / 1024);

async function openFile() {
  // Get response Blob
  const blob = await (await compressStream(JSONtoStream(data.value))).blob();

  // Create a programmatic download link
  const elem = window.document.createElement("a");
  const newBlob = blob.slice(0, blob.size, "application/gzip");
  elem.href = window.URL.createObjectURL(newBlob);
  elem.download = `${props.url}.gzip`;
  window.document.body.appendChild(elem);
  elem.click();
  console.log(elem, newBlob);
  window.document.body.removeChild(elem);
}
</script>
<template>
  <div v-if="size" style="margin: 10px 0">
    <a :href="url" target="_blank">{{ url }}</a>
    <div v-if="size">
      <div>
        JSON size:
        {{
          sizeInKb > 1
            ? sizeInMb > 1
              ? `${Math.round((sizeInMb + Number.EPSILON) * 100) / 100}MB`
              : `${Math.floor(sizeInKb)}KB`
            : `${size}B`
        }}
      </div>
      <div>
        gzip size:
        {{
          compressedSizeInKb > 1
            ? compressedSizeInMb > 1
              ? `${
                  Math.round((compressedSizeInMb + Number.EPSILON) * 100) / 100
                }MB`
              : `${Math.floor(compressedSizeInKb)}KB`
            : `${compressedSize}B`
        }}
      </div>
      <div style="color: green">
        {{ Math.round(100 - (compressedSize / size) * 100) }}% reduction
        <button @click="openFile">Download gzip file</button>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>