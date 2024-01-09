<template>
  <div></div>
</template>

<script setup>
var o = function () {
  var obj = {
    a: 1,
    b: 2,
  }
  return {
    get: function (k) {
      return obj[k]
    },
  }
}

const fun = o()

window.console.log(fun.get("a"))
</script>
