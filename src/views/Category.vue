<template>
  <div class="container" @mouseleave="categoryId = null">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id" @mouseenter="categoryId=item.id" :class="{active: categoryId === item.id}">
        
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
