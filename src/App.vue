<template>
  <router-view v-slot="{ Component }">
    <transition name="troca-view" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.troca-view-enter-active,
.troca-view-leave-active{
  transition:
    opacity .28s ease,
    transform .28s ease;
}

.troca-view-enter-from{
  opacity:0;
  transform:translateY(14px);
}

.troca-view-leave-to{
  opacity:0;
  transform:translateY(-10px);
}
</style>
