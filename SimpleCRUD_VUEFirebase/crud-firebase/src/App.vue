<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'start' }">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
