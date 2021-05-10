<template>
  <navbar />
  <div class="allAdd">
    <div class="navProduct">
      <navProducts />
    </div>

    <div class="addProduct">
      <label
        class="upPic border-2 border-blue-800 flex-col items-center ursor-pointer rounded-lg shadow-lg"
        id="preview"
      >
        <img :src="preview" />
        <svg
          class="w-4 h-4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 leading-normal">Upload a Image</span>
        <input
          type="file"
          accept="image/*"
          @change="selectFile"
          class="hidden form-control-file"
        />
        {{ imageName }}
      </label>

      <div class="content">
        <form @submit.prevent="submitForm">
          <div>
            <div class="nameAndPrice">
              <div class="productName">
                <p class="title">Product Name</p>
                <div class="">
                  <input
                    v-model="productName"
                    class="inputDetail placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-beer focus:border-transparent focus:ring-2 rounded border border-grayFigma"
                    type="text"
                    placeholder=""
                  />
                </div>
                <sup v-show="inputName"> Please enter product name! </sup>
              </div>

              <div class="productPrice">
                <p class="title">Price</p>
                <input
                  class="inputDetail placeholder-gray-500 placeholder-opacity-50 border border-grayFigma focus:outline-none focus:ring-beer focus:border-transparent focus:ring-2 px-4 rounded"
                  type="number"
                  v-model="productPrice"
                  step="0.25"
                  min="0"
                  max="999.99"
                />
                <div>
                  <sup v-show="inputPrice"> Please enter product price! </sup>
                </div>
              </div>
            </div>

            <div class="typeAndStock">
              <div>
                <p class="title">Bag Type</p>
                <form name="dropdown">
                  <select
                    v-model="selectType"
                    class="inputDetail selectDrop shadow-md rounded"
                  >
                    <option
                      v-for="bagType in productType"
                      :value="bagType"
                      :key="bagType.bagTypeId"
                    >
                      {{ bagType.bagTypeName }}
                    </option>
                  </select>
                </form>
                <sup v-show="inputType"> Please select type! </sup>
              </div>

              <div class="">
                <p class="title">Will Be In Stock On</p>
                <div>
                  <input
                    class="inputDetail drop border border-grayFigma rounded focus:outline-none focus:ring-beer focus:border-transparent focus:ring-2"
                    type="date"
                    v-model="productDate"
                  />
                </div>
                <sup v-show="inputDate"> Please select stock date! </sup>
              </div>
            </div>

            <div class="title">Color</div>
            <div class="flex justify-between">
              <label
                class="checkbox rounded"
                v-for="color in productColor"
                :key="color.colorId"
                :style="{ background: color.colorName }"
              >
                <input type="checkbox" :value="color" v-model="colorsSelect" />
              </label>
            </div>
            <sup v-show="inputColor">
              Please enter product color more than one!
            </sup>

            <div class="">
              <p class="title">Description</p>
              <textarea
                v-model="productDescription"
                class="inputDetail boxDescrip placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded focus:ring-beer focus:border-transparent focus:ring-2 shadow-md break-words text-justify whitespace-normal border border-grayFigma"
                placeholder="Description..."
              >
              </textarea>
              <sup v-show="inputDescription"> Please enter description! </sup>
            </div>
          </div>
        </form>

        <div class="bg-white group submit">
          <button
            class="submitButton text-blue-500 border border-blue-600 group-hover:text-white group-hover:bg-blue-600 rounded"
            @click="submitFrom"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
*
<script>
import ProductDataService from "../service/ProductDataService"
import axios from "axios"
export default {
  data() {
    return {
      picture: null,
      check: false,
      // url: "http://localhost:5000/products",
      inputName: false,
      inputPrice: false,
      inputColor: false,
      inputType: false,
      inputDate: false,
      inputDescription: false,
      imageName: null,
      products: [],
      colorsSelect: [],
      productName: "",
      productPrice: null,
      productDescription: "",
      productDate: "",
      productColor: [],
      productType: null,
      selectType: null,
      preview: null,
      imgFile: null,
    };
  },

  methods: {
    selectFile(e) {
      const file = e.target.files[0];
      this.picture = URL.createObjectURL(file);
      this.imageName = file.name;
      this.imgFile = file;
      let reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    // async getData() {
    //   try {
    //     const response = await fetch("http://localhost:5000/colors");
    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    getData() {
      ProductDataService.getColors().then((res) => {
        this.productColor = res.data;
      });
    },

    // async getBagType() {
    //   try {
    //     const response = await fetch("http://localhost:5000/bagType");
    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    getBagType() {
      ProductDataService.getBagTypes().then((res) => {
        this.productType = res.data;
      });
    },

    // async getProduct() {
    //   try {
    //     const res = await fetch(this.url);
    //     const data = await res.json();
    //     return data;
    //   } catch (error) {
    //     console.log(`Could not get! ${error}`);
    //   }
    // },

    checkColor() {
      this.check = !this.check;
    },

    submitFrom() {
      this.inputName = this.productName === "" ? true : false;
      this.inputPrice =
        this.productPrice === null || this.productPrice === "" ? true : false;
      this.inputPrice =
        this.productPrice <= 0 && this.productPrice < 999.99 ? true : false;
      this.inputColor = this.colorsSelect.length == 0 ? true : false;
      this.inputType = this.selectType === null ? true : false;
      console.log(this.colorsSelect);
      this.inputDate = this.productDate === "" ? true : false;
      this.inputDescription = this.productDescription === "" ? true : false;
      if (
        this.inputName ||
        this.inputPrice ||
        this.inputColor ||
        this.inputType ||
        this.inputDate ||
        this.inputDescription
      ) {
        return;
      }
      // this.inputPrice = parseFloat(this.productPrice);
      this.addProduct();
    },

    // async addProduct() {
    //   try {
    //     const res = await fetch(this.url, {
    //       method: "POST",
    //       headers: { "Content-type": "application/json" },
    //       body: JSON.stringify({
    //         productName: this.productName,
    //         price: this.productPrice,
    //         inStockDate: this.productDate,
    //         productDescrip: this.productDescription,
    //         imageName: this.picture,
    //         bagType: this.selectType,
    //         colors: this.colorsSelect,
    //       }),
    //     });

    //     const data = await res.json();
    //     this.products = [...this.products, data];
    //     this.productName = "";
    //     this.productPrice = null;
    //     this.productDescription = "";
    //     this.productType = "";
    //     this.productColor = [];
    //     this.imageName = null;
    //   } catch (error) {
    //     console.log(`Could not save! ${error}`);
    //   }
    // },
    addProduct() {
      const formData = new FormData();
      let data = {
        productName: this.productName,
        price: this.productPrice,
        productDescrip: this.productDescription,
        inStockDate: this.productDate,
        imageName: this.imageName,
        bagType: this.selectType,
        colors: this.colorsSelect,
      };
      const json = JSON.stringify(data);
      const blob = new Blob([json], {
        type: "application/json",
      });
      formData.append("file", this.imgFile);
      formData.append("newProduct", blob);
      axios
        .post("http://13.76.186.187/backend/addProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          res.status === 200 ? alert("Added") : alert("Error");
        });
    },
  },
  created() {
    this.getData();
    this.getBagType();
  },

  // async created() {
  //   // this.products = await this.getProduct();
  //   this.productColor = await this.getData();
  //   this.productType = await this.getBagType();
  //   this.currentProduct = await this.getProduct();
  // },

  }
</script>


<style scoped>
#preview img {
  width: 100%;
}
.allAdd {
  @apply mx-1 sm:mx-8 md:mx-10 lg:mx-20;
}
.content {
  @apply justify-between py-6 text-xs;
}
.navProduct {
  @apply flex justify-center mt-4 sm:flex sm:justify-center md:justify-end lg:py-6;
}

.checkbox {
  display: flex;
  cursor: pointer;
  border-radius: 50px;
  @apply mb-2 lg:mb-4;
}

.checkbox > input {
  appearance: none;
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;
  border-radius: 50px;
  @apply w-6 h-6 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-8 lg:h-8;
}

.checkbox > input:checked {
  border: 1px solid red;
}
sup {
  color: red;
}
.selectDrop {
  color: black;
  background: transparent;
  border-color: black;
  @apply w-full;
}
.drop {
  @apply w-full;
}
.selectDrop::before {
  border-color: black;
}
.addProduct {
  @apply grid grid-cols-1 py-1 justify-items-stretch sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2;
}
.nameAndPrice {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2;
}
.typeAndStock {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2;
}
.upPic {
  @apply w-40 h-40 flex justify-center mt-4 text-sm justify-self-center 
  sm:mt-8 sm:w-60 sm:h-60 sm:justify-self-start
  md:justify-self-start md:ml-8 md:h-72 md:w-72 
  lg:w-96 lg:h-96 lg:justify-self-start lg:text-base;
}
.title {
  @apply mb-1 lg:text-base;
}
.inputDetail {
  @apply px-2 py-1 mb-4 w-full sm:w-32 md:w-40 lg:w-56 lg:text-base;
}
.boxDescrip {
  @apply w-full h-40 md:h-20 lg:h-32;
}
.submit {
  @apply flex justify-center lg:text-base;
}
.submitButton {
  @apply px-2 py-1;
}
</style>