<template>
  <main>
   <WebHeader />
    <WebNav />
    <WebBanner />
    <div class="w-[1024px] flex m-auto justify-between">
      <WebLeftSide />
      <div class="rightSide">
        <CommonNewArrivals />
        <CommonRecommendedItems />
        <CommonSpecialOffers />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
