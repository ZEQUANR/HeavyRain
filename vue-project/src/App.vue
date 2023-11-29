<template>
  <div></div>
</template>

<script setup>
const blob = new Blob(["Hello world"])

const buffer = new ArrayBuffer(blob)

window.console.log(blob)

// const wrapBuffer = new Int8Array(buffer)

// const Hello = [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

// const buffer = new ArrayBuffer(Hello.length)

// const wrapBuffer = new Int8Array(buffer)

// for (let i = 0; i < Hello.length; i++) {
//   wrapBuffer[i] = Hello[i]
// }

// const blob = new Blob([buffer])

// const reader = new FileReader()

// reader.readAsText(blob)

// window.console.log(reader)
</script>

<style scoped>
/* #cake {
  width: 200px;
  height: 200px;
  border: 1px solid black;
} */
</style>
