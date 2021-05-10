<template>
  <navbar />

  <div class="allProduct relative">
    <div class="navProduct">
      <navProducts />
    </div>

    <div class="content">
      <div class="product" v-for="show in products" :key="show.productId">
        <img
          :src="getProductImg(show.imageName)"
          @click="showProduct(show.productId)"
        />

        <div class="colorSlot pt-4">
          <div
            class="colors pt-4"
            v-for="colorProduct in show.colors"
            :key="colorProduct.colorName"
            :style="{ background: colorProduct.colorName }"
          ></div>
        </div>

        <h3 class="productName text-black">{{ show.productName }}</h3>
        <h4 class="productPrice font-extralight">{{ show.price }} $</h4>
      </div>

      <!-- popup -->
      <div v-if="show" class="popUp bg-black bg-opacity-75 info">
        <div class="exit text-white" @click="clickShow">X</div>

        <div class="flex justify-center">
          <div
            class="popwhite bg-white"
            v-for="product in popupProduct"
            :key="product.productId"
          >
            <div class="flex justify-center">
              <img
                v-if="hiddenEdit == false"
                :src="getProductImg(product.imageName)"
                
                class="showImage"
              />
              
              <div v-else>
                <label
                  class="border-2 border-blue-800 h-80 w-80 flex flex-col items-center justify-center cursor-pointer rounded-lg shadow-lg"
                  id="preview"
                >
                  <img :src="preview" />
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                  </svg>
                  <span class="mt-2 text-base leading-normal"
                    >Upload a Image</span
                  >
                  <input
                    type="file"
                    accept="image/*"
                    @change="selectFile"
                    class="hidden form-control-file"
                  />
                </label>
              </div>
            </div>

            <div class="contentPop" v-if="hiddenEdit == false">
              <p class="jwpei">JW PEI</p>
              <p class="name">
                {{ product.productName }}
              </p>
              <p class="price">{{ product.price }} $</p>

              <div class="colorSlot colorPop py-2">
                <div
                  class="colors"
                  v-for="showColor in product.colors"
                  :key="showColor.colorName"
                  :style="{ background: showColor.colorName }"
                ></div>
              </div>

              <p class="stock">Will Be In Stock On {{ product.inStockDate }}</p>
              <p class="descrip">
                {{ product.productDescrip }}
              </p>

              <div class="editAndDelete">
                <div class="edit">
                  <button
                    class="bg-green-500"
                    @click="hiddenEdit = !hiddenEdit && editProduct(product)"
                    :class="{ show: hiddenEdit == false }"
                  >
                    EDIT
                  </button>
                </div>

                <div class="delete">
                  <button
                    class="bg-red-500"
                    @click="deleteProduct(product.productId)"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>

            <!-- edit -->
            <div v-else>
              <form @submit.prevent="editSubmit(submitEdit)">
                <div class="form">
                  <div class="nameAndPrice">
                    <div class="">
                      <p class="title">Product Name</p>
                      <input
                        v-model="productName"
                        class="inputDetail placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-grayFigma focus:border-transparent focus:ring-2 rounded border border-grayFigma"
                        type="text"
                        placeholder="Product Name"
                      />
                    </div>
                    <sup v-show="inputName"> Please enter product name! </sup>
                    <sup v-show="hasDuplicate"> Duplicate name! </sup>
                    <div class="">
                      <div>
                        <p class="title">Price</p>
                      </div>
                      <input
                        class="inputDetail placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-grayFigma focus:border-transparent focus:ring-2 rounded border border-grayFigma"
                        type="number"
                        placeholder="Price"
                        v-model="price"
                        min="0"
                        max="999.99"
                      />
                    </div>
                  </div>
                  <sup v-show="inputPrice"> Please enter product price! </sup>

                  <div class="typeAndStock">
                    <div>
                      <p class="title">Bag Type</p>
                      <form name="dropdown">
                        <select v-model="selectType" class="inputDetail">
                          <option
                            v-for="bagType in bagType"
                            :value="bagType"
                            :key="bagType.bagTypeId"
                          >
                            {{ bagType.bagTypeName }}
                          </option>
                        </select>
                      </form>
                    </div>
                    <div class="">
                      <p class="title">Will Be In Stock On</p>
                      <input
                        class="inputDetail border border-black rounded"
                        type="date"
                        v-model="inStockDate"
                      />
                    </div>
                  </div>
                  <sup v-show="inputDate"> Please enter stock date! </sup>

                  <div class="title">Color</div>
                  <div class="mb-6 flex justify-start">
                    <label
                      class="checkbox rounded mr-2"
                      v-for="color in colors"
                      :key="color.colorId"
                      :style="{ background: color.colorName }"
                    >
                      <input
                        type="checkbox"
                        :value="color"
                        v-model="selectColor"
                      />
                    </label>
                  </div>
                  <sup v-show="inputColor">
                    Please enter product color more than one!
                  </sup>

                  <div class="">
                    <p class="title">Description</p>
                    <textarea
                      v-model="productDescrip"
                      class="descripBox placeholder-gray-500 placeholder-opacity-50 focus:outline-none rounded focus:ring-purple-600 focus:border-transparent focus:ring-2 shadow-md break-words text-justify whitespace-normal"
                      placeholder="Description..."
                    />
                  </div>
                  <sup v-show="inputDescription">
                    Please enter description!
                  </sup>

                  <div class="conAndCan">
                    <div class="edit">
                      <input
                        type="submit"
                        value="CONFIRM"
                        class="bg-green-500"
                      />
                    </div>
                    <div class="delete">
                      <input
                        type="button"
                        value="CANCEL"
                        class="bg-red-500"
                        @click="hideEdit"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import ProductDataService from "../service/ProductDataService";
import axios from "axios";
export default {
  name: "Products",
  components: {},

  data() {
    return {
      products: [],
      popupProduct: [],
      // url: "http://localhost:5000/products",
      imageName: "",
      price: null,
      productName: "",
      colors: [],
      productDescrip: "",
      inStockDate: null,
      bagType: null,
      ColorsSelect: null,
      hiddenEdit: false,
      show: false,
      delete: false,
      selectColor: [],
      selectType: null,
      submitEdit: null,
      currentProduct: [],
      hasDuplicate: false,
      imgFile: null,
      preview: null,
    };
  },

  methods: {
    // async getProduct() {
    //   try {
    //     const res = await fetch(this.url);
    //     const data = await res.json();
    //     return data;
    //   } catch (error) {
    //     console.log(`Could not get! ${error}`);
    //   }
    // },
    getProduct() {
      ProductDataService.getAllProduct().then((res) => {
        this.products = res.data;
      });
    },
    getProductImg(imageName) {
      return "http://13.76.186.187/backend/img/" + imageName;
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
        this.colors = res.data;
      });
    },

    hideEdit() {
      this.hiddenEdit = false;
      this.preview = null;
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
        this.bagType = res.data;
      });
    },

    checkDuplicateName(name) {
      let duplicate = this.currentProduct.filter((p) => p.productName == name);
      console.log(duplicate.length);
      console.log(name);
      if (duplicate.length > 0) {
        return true;
      } else return false;
    },

    submitFrom() {
      this.inputName = this.productName === "" ? true : false;
      // this.inputPrice =
      // this.productPrice === null || this.productPrice === "" ? true : false;
      this.inputColor = this.colorsSelect.length == 0 ? true : false;
      this.inputType = this.selectType === null ? true : false;
      console.log(this.colorsSelect);
      this.inputDate = this.productDate === "" ? true : false;
      this.inputDescription = this.productDescreiption === "" ? true : false;
      if (this.checkDuplicateName(this.productName)) {
        this.hasDuplicate = true;
        return;
      }
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

    clickShow() {
      this.show = !this.show;
      this.hiddenEdit = false;
      this.preview = [];
      if (this.show) {
        window.scrollTo(450, 100);
      }
    },
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

    // async showProduct(id) {
    //   try {
    //     console.log(id);
    //     this.popupProduct = [];
    //     const res = await fetch(`${this.url}/${id}`);
    //     const data = await res.json();
    //     this.popupProduct.push(data);
    //     this.clickShow();
    //     return this.popupProduct;
    //   } catch (error) {
    //     console.log(`Could not show member info! ${error}`);
    //   }
    // },
    showProduct(id) {
      this.popupProduct = [];
      var tmp = [];
      ProductDataService.getProduct(id).then((res) => {
        tmp = res.data;
        this.popupProduct.push(tmp);
      });

      this.clickShow();
    },

    editProduct(product) {
      this.hiddenEdit = true;
      this.productName = product.productName;
      this.price = product.price;
      this.productDescrip = product.productDescrip;
      this.selectType = product.bagType;
      this.inStockDate = product.inStockDate;
      this.selectColor = product.colors;
      console.log(this.selectColor);
      this.submitEdit = product;
    },

    // async editSubmit(editing) {
    //   const res = await fetch(`${this.url}/${editing.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       productName: this.productName,
    //       price: this.price,
    //       bagType: this.selectType,
    //       productDescrip: this.productDescrip,
    //       inStockDate: this.inStockDate,
    //       colors: this.selectColor,
    //     }),
    //   });
    //   const data = await res.json();
    //   this.products = this.products.map((product) =>
    //     product.id === data.id
    //       ? {
    //           ...product,
    //           productName: data.productName,
    //           price: data.price,
    //           productDescrip: data.productDescrip,
    //           productType: data.selectType,
    //           colors: data.colors,
    //           inStockDate: data.inStockDate,
    //         }
    //       : product
    //   );
    //   (this.productName = ""),
    //     (this.price = null),
    //     (this.productType = ""),
    //     (this.productDescrip = ""),
    //     (this.colors = []),
    //     (this.inStockDate = null),
    //     (this.edit = false),
    //     (this.editSubmit = null);
    // },
    editSubmit(editing) {
      const formData = new FormData();
      let pid = editing.productId;
      let data = {
        productId: pid,
        productName: this.productName,
        price: this.price,
        productDescrip: this.productDescrip,
        inStockDate: this.inStockDate,
        imageName: this.imageName,
        bagType: this.selectType,
        colors: this.selectColor,
      };
      const json = JSON.stringify(data);
      const blob = new Blob([json], {
        type: "application/json",
      });
      formData.append("file", this.imgFile);
      formData.append("newProduct", blob);
      axios
        .put("http://13.76.186.187/backend/products/edit/" + pid, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          res.status === 200
            ? this.getProduct()
            : alert("Error can't edit Product");
        });
      this.clickShow();
    },

    // async deleteProduct(id) {
    //   if (confirm(`Are you sure to delete ?`)) {
    //     const res = await fetch(`${this.url}/${id}`, {
    //       method: "DELETE",
    //     });
    //     res.status === 200
    //       ? (this.products = this.products.filter(
    //           (product) => product.id !== id
    //         ))
    //       : alert("Error to delete product");
    //   }
    // },
    deleteProduct(id) {
      ProductDataService.deleteProduct(id).then((res) => {
        res.status === 200
          ? this.getProduct()
          : alert("Error to delete product");
      });
      this.clickShow();
    },
  },

  // async created() {
  //   this.products = await this.getProduct();
  //   this.colors = await this.getData();
  //   this.bagType = await this.getBagType();
  //   this.currentProduct = await this.getProduct();
  // },
  created() {
    this.products = this.getProduct();
    this.currentProduct = this.getProduct();
    this.getData();
    this.getBagType();
  },

  watch: {
    show: function () {
      if (this.show) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap");

.content {
  @apply grid grid-cols-2 sm:grid sm:grid-cols-4 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4;
}
img {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.productName {
  font-family: "Mitr", sans-serif;
  text-align: center;
  padding-top: 10px;
  font-size: 12px;
  @apply sm:text-sm;
}
.productPrice {
  font-family: "Mitr", sans-serif;
  text-align: center;
  padding-top: 6px;
  font-size: 10px;
  @apply sm:text-xs;
}
.colors {
  width: 15px;
  height: 15px;
  border-radius: 50px;
  transition: 0.6s linear;
  align-items: center;
  @apply mx-1 justify-center sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5;
}
.colorSlot {
  display: flex;
  width: 100%;
  @apply justify-center;
}
.showImage {
  /* width: 100px;
  height: 100px; */
  @apply w-28 h-28 md:w-52 md:h-52 md:items-center md:flex lg:w-80 lg:h-80;
}
.popwhite {
  border-radius: 30px;
  @apply grid grid-cols-1  w-4/5 py-6 md:grid md:grid-cols-2 lg:py-12;
}
.popUp {
  @apply absolute w-full h-screen;
}
.exit {
  cursor: pointer;
  @apply flex justify-end px-4 pt-12 pb-4 text-sm sm:pt-12 md:text-base lg:pt-12 lg:mr-6 lg:text-2xl;
}
.contentPop {
  @apply grid grid-cols-1;
}
.jwpei {
  font-size: 8px;
  @apply flex justify-center my-2 
  md:flex md:justify-start
  lg:text-xs lg:flex lg:justify-start lg:my-1;
}
.name {
  @apply text-xs flex justify-center 
  md:flex md:justify-start md:font-bold md:text-base
  lg:text-xl lg:flex lg:justify-start lg:font-bold lg:text-2xl;
}
.price {
  @apply text-xs flex justify-center 
  md:flex md:justify-start
  lg:text-base lg:flex lg:justify-start;
}
.colorPop {
  @apply justify-center md:justify-start lg:justify-start;
}
.stock {
  font-size: 10px;
  @apply flex justify-center font-bold 
  md:flex md:justify-start md:text-xs md:font-bold
  lg:text-sm lg:flex lg:justify-start;
}
.descrip {
  font-size: 10px;
  @apply mb-2 text-xs flex justify-center px-2 break-words py-2 
  md:flex md:justify-start md:pl-0 md:text-xs
  lg:text-sm lg:flex lg:justify-start lg:px-0 lg:pr-4;
}
.editAndDelete {
  @apply grid grid-cols-2 flex justify-center sm:justify-center md:mr-4;
}
.conAndCan {
  @apply grid grid-cols-2 flex justify-center sm:justify-center sm:mx-10
  md:justify-center md:mx-2 md:mt-4;
}
button {
  @apply px-4 py-1.5 rounded;
}
.edit {
  font-size: 10px;
  @apply flex justify-center;
}
.delete {
  font-size: 10px;
  @apply flex justify-center;
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
.navProduct {
  @apply mt-4 my-4 flex justify-center sm:flex sm:justify-end lg:flex lg:justify-end lg:my-10;
}
.product {
  @apply my-0 sm:mb-8 md:mb-10 lg:mb-12;
}
.allProduct {
  @apply mx-2 sm:mx-10 md:mx-20 lg:mx-20;
}
.nameAndPrice {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2;
}
.typeAndStock {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2;
}
.title {
  @apply mb-1 flex justify-start sm:text-xs lg:text-xs;
}
.inputDetail {
  font-size: 10px;
  @apply px-1 py-0 mb-1 w-20 sm:w-20 md:w-28 md:text-xs lg:w-32 lg:text-sm;
}
.form {
  font-family: "Mitr", sans-serif;
  /* font-size: 13px; */
  @apply mx-2 sm:mx-4 sm:mt-4 md:mx-8 lg:mx-12;
}
.descripBox {
  @apply w-full sm:h-16 sm:text-xs md:h-28 lg:text-sm lg:h-24;
}
</style>