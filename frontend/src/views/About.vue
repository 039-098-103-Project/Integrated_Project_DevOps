<template>
  <navbar />

  <div class="">
    <div class="box">
      <h1 class="heading flex justify-center">
        Accessible, Effortless, Empowering
      </h1>
      <p class="detail">
        JW PEI is a Los Angeles based accessories brand founded by a husband and
        wife duo. The inspiration behind the brand was upon the idea that
        fashion should be accessible, effortless and empowering. Minimalist
        design in sustainable vegan materials is at the heart of the brand.
      </p>

      <div class="content">
        <div class="image">
          <img src="../../src/assets/about.jpg" />
        </div>

        <div class="content-l items-center">
          <div class="">
            <h6 class="">DESIGN</h6>
            <h1>Made for Each Woman</h1>
            <p class="detail">
              JW PEI with its modern minimalist aesthetic, puts forward and
              seeks to celebrate feminine beauty and strength through fun and
              creative fashion.
            </p>
            <div class="shop">
              <button class="bg-black text-white">
                <router-link to="/products"> SHOP NOW</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="content-r items-center">
          <div class="">
            <h6 class="sus">SUSTAINABILITY</h6>
            <h1>Vegan Leather + Recycled Plastic</h1>
            <p class="detail">
              Sustainability is in JW PEI's DNA. We use high quality canvas,
              polyurethane, and certified fabric made from recycled plastic
              bottles.
            </p>
          </div>
        </div>

        <div class="image">
          <img src="../../src/assets/recycle.jpg" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Antonio&family=Hammersmith+One&display=swap");

h1 {
  font-family: "Rajdhani", sans-serif;
  @apply flex justify-center text-lg mt-10 md:text-2xl lg:text-4xl;
}
.detail {
  @apply mt-4 text-center text-xs md:text-sm lg:text-base;
}
.content {
  @apply mt-10 grid grid-cols-1 md:grid-cols-2;
}
.content-l{
  @apply lg:flex lg:justify-start
}
.image {
  @apply flex justify-center;
}
h6 {
  font-family: "Rajdhani", sans-serif;
  font-size: 12px;
  @apply mt-1 flex justify-start ml-4 md:justify-center md:text-sm lg:text-base;
}
img {
  width: 90%;
}
button {
  font-family: "Hammersmith One", sans-serif;
  font-size: 15px;
  @apply px-6 py-2.5 mt-4;
}
.shop {
  @apply flex justify-center;
}
.box {
  @apply mx-2 my-4 md:mx-16;
}
.sus{
  @apply mt-10
}
</style>