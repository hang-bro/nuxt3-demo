<template>
  <section class="flex flex-wrap gap-1 justify-center my-5">
    <NuxtLink v-for="item in imgList" :to="item" class="w-[30%]">
      <img :src="item" />
    </NuxtLink>
  </section>
</template>
<script setup>
const imgList = ref(new Array(9).fill('https://www.cc21.jp/data/costcost21/image/banners/SALE_250_250.jpg'))
</script>

<style scoped lang="scss"></style>
