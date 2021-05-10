<template>
  <navbar />
  <div class="pic">
    <img src="../../src/assets/bg-img.jpg" />
    <div class="textcenter">
      <div class="cod">C O D</div>
      <div class="tred">Treding For Spring</div>
      <div class="jwpei">Product By JW PEI</div>
    </div>
  </div>
  <Footer />
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap");

.pic {
  position: relative;
  text-align: center;
  color: white;
}
.textcenter {
  position: absolute;
  /* top: 150%; */
  /* left: 50%; */
  /* transform: translate(-50%, -180%); */
  font-family: "Mitr", sans-serif;
  @apply top-56 left-40 transform -translate-y-44 -translate-x-16 
  sm:transform sm:-translate-y-24 sm:-translate-x-32 sm:left-1/2 
  md:transform md:-translate-y-14 md:-translate-x-32 md:left-1/2
  lg:transform lg:-translate-y-9 lg:-translate-x-52 lg:left-1/2
  xl:transform xl:-translate-y-2 xl:-translate-x-64
}
.cod {
  font-size: 6px;
  @apply mb-1 sm:mt-2 sm:text-xs lg:text-sm
}
.tred {
  font-size: 16px;
  @apply mb-2 sm:text-3xl lg:text-5xl xl:text-6xl
}
.jwpei{
  font-size: 8px;
  @apply sm:text-xs lg:text-sm
}

img {

  @apply max-w-full
}
</style>
