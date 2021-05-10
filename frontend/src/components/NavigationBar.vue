<template>
  <div class="navbar sticky top-0 z-10 bg-black ">
    <div>
      <p class="brand py-4 flex justify-center">JW PEI</p>
    </div>

    <div class="link pb-2 text-white flex justify-center">
      <div>
        <router-link to="/" class="hover:text-indigo-300 inline"
          >Home</router-link
        >
      </div>
      <div>
        <router-link to="/products" class="hover:text-indigo-400 inline"
          >Products</router-link
        >
      </div>
      <div>
        <router-link to="/about" class="hover:text-indigo-400 inline"
          >About</router-link
        >
      </div>
      <div>
        <router-link to="/team" class="hover:text-indigo-500 inline"
          >Team</router-link
        >
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200&display=swap");

.link {
  font-family: "Mitr", sans-serif;
  text-decoration: none;
  @apply text-xs space-x-8 sm:text-xs  sm:space-x-20 md:space-x-36 md:text-base lg:text-xl lg:space-x-44
} 
p {
  font-family: "Bebas Neue", sans-serif;
  color: white;
  @apply text-xl md:text-2xl lg:text-4xl lg:py-10
}

</style>