import { b64encode, b64decode } from "./utils";

export function JSONtoStream(data) {
  return new Blob([JSON.stringify(data)], {
    type: "text/plain"
  }).stream();
}

export function b64toStream(b64) {
  return new Blob([b64decode(b64)], {
    type: "text/plain"
  }).stream();
}

export async function responseToJSON(response) {
  const blob = await response.blob();
  return JSON.parse(await blob.text());
}

export async function responseToB64(response) {
  const blob = await response.blob();
  const buffer = await blob.arrayBuffer();
  return b64encode(buffer);
}

export async function responseToBuffer(response) {
  const blob = await response.blob();
  return blob.arrayBuffer();
}

export async function compressStream(stream) {
  const compressedReadableStream = stream.pipeThrough(
    new CompressionStream("gzip")
  );

  return new Response(compressedReadableStream);
}

export async function decompressStream(stream) {
  const compressedReadableStream = stream.pipeThrough(
    new DecompressionStream("gzip")
  );

  return new Response(compressedReadableStream);
}
