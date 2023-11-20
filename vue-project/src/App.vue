<script setup>
const log = async () => {
  const blob = new Blob([1, 2, 3])
  window.console.log(await blob.arrayBuffer())

  const file = new File([1, 2, 3], "123.text")
  window.console.log(file)
}

const onFileChange = (event) => {
  window.console.log(event)
}
</script>

<template>
  <!-- <header>hhhhh</header> -->

  <!-- <main>kkkk</main> -->

  <input type="file" :change="onFileChange" />
</template>

<style scoped></style>
