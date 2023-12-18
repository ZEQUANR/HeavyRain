<template>
  <div></div>
</template>

<script setup>
let objA = {
  name: "Li Ming",
  score: [80, 60, 90],
  select: function () {
    return this.name
  },
  age: undefined,
}

function deepCopy(obj) {
  // 对于非对象和null值，直接返回
  if (obj === null || typeof obj !== "object") return obj

  // 根据obj的类型来决定新创建对象的类型
  let copy = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归调用deepCopy处理每个属性
      copy[key] = deepCopy(obj[key])
    }
  }

  return copy
}

let objB = deepCopy(objA)

objA.select = "888"

window.console.log(objA) // { name: "Li Ming", score: [80, 60, 90], select: ƒ, age: undefined }
window.console.log(objB) // { name: "Li Ming", score: [80, 60, 90] }
</script>
