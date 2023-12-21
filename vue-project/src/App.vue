<template>
  <div></div>
</template>

<script setup>
const parent = {
  value: 2,
  method() {
    return (this.value += 1)
  },
}

console.log(parent.method()) // 3
// 当调用 parent.method 时，“this”指向了 parent

// child 是一个继承了 parent 的对象
const child = {
  __proto__: parent,
}
console.log(child.method()) // 3
// 调用 child.method 时，“this”指向了 child。
// 又因为 child 继承的是 parent 的方法，
// 首先在 child 上寻找“value”属性。但由于 child 本身
// 没有名为“value”的自有属性，该属性会在
// [[Prototype]] 上被找到，即 parent.value。

child.value = 4 // 在 child，将“value”属性赋值为 4。
// 这会遮蔽 parent 上的“value”属性。
// child 对象现在看起来是这样的：
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()) // 5
// 因为 child 现在拥有“value”属性，“this.value”现在表示
// child.value

console.log(parent.method()) // 6
</script>
