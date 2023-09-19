<!-- 特价 -->
<template>
  <ClientOnly>
    <section class="w-full lg:w-[760px]">
      <!-- header logo -->
      <img :src="data?.data?.headerImg" />
      <!-- line -->
      <div class="w-full h-[2px] bg-red-800 mt-3 mb-5 hidden lg:block"></div>
      <!-- item -->
      <div class="flex flex-wrap justify-center gap-1 lg:gap-0 mt-5 lg:mt-0">
        <div
          v-for="(item, index) in data?.data?.data"
          class="w-[31%] lg:w-[189px] lg:h-[254px] hover:bg-[#f9f9f9] lg:border-r lg:border-b lg:border-[#e0dfe3] cursor-pointer lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-of-type(-n+4)]:border-b-0 flex items-center flex-col"
        >
          <img
            class="border border-[#eee] lg:border-none"
            :src="item.url"
            alt="なし 1.8kg Pear"
            width="160"
            height="160"
          />
          <div class="flex flex-col">
            <div class="text-sm text-gray-400">商品名称</div>
            <div class="text-sm font-bold">168日元(不含税)</div>
            <div class="text-sm text-gray-400">178日元(含税)</div>
          </div>
        </div>
      </div>
      <!-- more -->
      <div class="m-5 text-right text-red-700">
        <Icon
          name="line-md:pause-to-play-filled-transition"
          size="17"
          class="mr-1"
          color="#000"
        />显示更多
      </div>
    </section>
  </ClientOnly>
</template>
<script lang="ts" setup>
const { data } = await useServerRequest('nuxt/home/specialOffers', {
  query: { platform: useClient().platform }
})
</script>
<style lang="scss" scoped></style>
