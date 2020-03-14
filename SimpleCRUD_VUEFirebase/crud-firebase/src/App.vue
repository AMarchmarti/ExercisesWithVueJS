<template>
  <div id="app" class="container">
    <div id="nav" class="text-center">
      <router-link :to="{ name: 'start' }">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
