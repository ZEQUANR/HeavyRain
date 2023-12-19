<template>
  <div></div>
</template>

<script setup>
var a = 1
function foo(a) {
  function a() {}
  var a = 2
  var b = a
  console.log(a)
}
foo(3)
</script>
