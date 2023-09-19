<template>
  <nav class="bg-[#c70000] flex justify-center">
    <div class="w-[1024px] flex items-center h-[58px] gap-3 nav-list">
      <!-- home icon -->
      <div class="nav-list-item">
        <div class="nav-list-item__box">
          <Icon name="ic:round-home" size="25" color="#fff" />
        </div>
      </div>
      <div class="nav-list-item" v-for="menu in navMenu">
        <div class="nav-list-item__box">
          <el-dropdown >
            <span class="text-white outline-none "> {{ menu.name }} </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
const { data: navMenu } = useFetch('/common/home/menu')
</script>
<style scoped lang="scss">
.nav-list {
  &-item {
    @apply flex items-center h-full border-b-[3px] border-[transparent] cursor-pointer;
    &:hover {
      @apply border-b-[3px] border-[#ffff];
    }
    &__box {
      @apply h-[25px] relative box-border flex items-center ml-2;
      &::after {
        content: '';
        @apply absolute right-[-10px] w-[1px] h-full bg-white;
      }
    }
  }
}
</style>
