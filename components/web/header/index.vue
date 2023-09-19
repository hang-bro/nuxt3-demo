<template>
  <main class="w-[1024px] m-auto flex flex-col p-3 pt-[3px]">
    <!-- row1 -->
    <div class="flex items-center justify-between mt-1">
      <div class="text-red-600 font-bold">おまとめ買いで楽しくお得に！</div>
      <div class="">
        <span class="text-gray-500">文字サイズ:</span>
        <el-check-tag class="mx-2">M</el-check-tag>
        <el-check-tag checked>L</el-check-tag>
      </div>
    </div>

    <!-- row2 -->
    <div class="mt-2 flex items-center justify-between">
      <div>
        <img src="https://www.cc21.jp/data/costcost21/image/054_logo20141018.jpg" />
      </div>
      <div>
        <img src="https://costcost21.ocnk.net/data/costcost21/image/img-sendcostco.png" />
      </div>
      <div>
        <img
          src="https://www.cc21.jp/data/costcost21/image/Instagram_Glyph_Gradient1.png"
          style="width: 50px !important"
        />
      </div>
      <div class="flex">
        <input
          placeholder="商品をキーワードで探す"
          class="w-[250px] border"
          autosave="https://www.cc21.jp"
        />
        <img
          src="https://www.cc21.jp/data/costcost21/image/icon-searchbuttom.png"
          style="width: 50px !important"
        />
      </div>
    </div>
    <!-- row3 -->
    <div class="flex justify-end gap-3 text-red-700 text-sm">
      <div class="">
        <a href="">登录</a>
      </div>
      <div class="">
        <a href=""> 新会员注册 </a>
      </div>
      <div>
        
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
