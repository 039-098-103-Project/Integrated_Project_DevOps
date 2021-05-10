<template>
  <navbar />

  <div class="box">
    <p class="flex justify-center">Teams</p>
    <h6 class="mt-1 text-center text-sm">
      Integrated Project - INT221 Integrated Information Technology Project
    </h6>
    <div class="team">
      <div class="member">
        <img src="../../src/assets/Teams/jeab.jpg" />
        <h1>Back-End and Devops-Network</h1>
        <h2>62130500039</h2>
        <h2 class="">Thanyaluck Ngamchaipisit</h2>
      </div>
      <div class="member">
        <img src="../../src/assets/Teams/gift.jpg" />
        <h1>Database and Devops-Network</h1>
        <h2>62130500098</h2>
        <h2 class="">Sunanta Singka</h2>
      </div>
      <div class="member">
        <img src="../../src/assets/Teams/mel.jpg" />
        <h1>Front-End And Network</h1>
        <h2>62130500103</h2>
        <h2 class="">Apisara Ngakor</h2>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;600&display=swap");

img {
  @apply w-40 h-40 my-6 flex justify-center justify-self-center ml-4;
}
h1 {
  font-family: "Rajdhani", sans-serif;
  @apply text-base font-bold flex justify-center lg:text-lg;
}
h2 {
  @apply text-sm flex justify-center md:text-sm lg:text-base;
}
h6 {
  font-family: "Rajdhani", sans-serif;
  font-size: 12px;
  @apply md:text-base lg:text-lg
}
p {
  font-family: "Rajdhani", sans-serif;
  width: 600;
  font-size: 30px;
  @apply sm:text-xl md:text-3xl lg:text-5xl
}
.box {
  @apply mx-4 my-10;
}
.team{
  @apply grid grid-cols-1 lg:grid-cols-3
}
.member{
  @apply justify-self-center
}
</style>