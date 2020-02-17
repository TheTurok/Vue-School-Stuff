<template>
  <div class="col-full">
    <h1 :class="$style.headingLarge"> Not Found</h1>
    <p :class="$style.textLarge"> we couldn't find what you are looking for </p>
    <router-link :to="{name: 'Hello'}"> Go HOME </router-link>
  </div>
</template>

<style module>
  .headingLarge {
    font-size: 100px;
  }
  .textLarge {
    font-size: 50px;
  }
</style>
