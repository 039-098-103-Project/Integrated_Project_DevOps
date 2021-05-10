<template>
  <div class="footer pb-20 pt-16">
    <hr class="" />

    <div class="socail flex justify-center pt-4">
      <a href="https://www.instagram.com/jwpei_official/" target="_blank">
        <img src="../../src/assets/Contact/instagram.png" />
      </a>

      <a href="https://www.facebook.com/jwpei.th/" target="_blank">
        <img src="../../src/assets/Contact/facebook.png" />
      </a>

      <a href="https://www.pinterest.com/jw_pei/_shop/" target="_blank">
        <img src="../../src/assets/Contact/pinterest.png" />
      </a>
    </div>

    <div class="contact flex justify-center pt-8">
      <div>
        <p class="contactUs">CONTACT US</p>
        <p class="email">cs_th@jwpei.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap");

div {
  font-family: "Rajdhani", sans-serif;
  color: #001233;
}
img {
  width: 12px;
  @apply sm:w-3 md:w-4 lg:w-4;
}
.contactUs {
  font-size: 12px;
  @apply font-bold flex justify-center;
}
.email {
  font-size: 9px;
  @apply pt-1 font-normal flex justify-center;
}

.socail {
  @apply space-x-4;
}
hr {
  border: 1px solid #001d4a;
  @apply ml-4 mr-4 sm:ml-10 sm:mr-10 md:ml-12 md:mr-12 lg:ml-14 lg:mr-14
}
</style>