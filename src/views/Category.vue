<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container container_overflow">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-4">Product List</h5>
          <p class="text-danger"></p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Product Title</th>
                <th scope="col">Product Description</th>
                <th scope="col">Product Image</th>
                <th scope="col" width="200">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pdata, index) in product" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ pdata.name }}</td>
                <td>{{ pdata.title }}</td>
                <td><img :src="`http://127.0.0.1:8000/storage/${pdata.image}`" alt="" height="50" width="90" /></td>
                <td>
                  <router-link :to="`/editproduct/${pdata.id}/edit`" class="btn btn-success mx-2">Edit</router-link>
                  <button @click="() => deleteProduct(pdata.id)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        product: []
      };
    },
    mounted() {
      this.getProduct();
    },
    methods: {
      getProduct() {
        axios.get("http://127.0.0.1:8000/api/getAllCourse")
          .then(response => {
            console.log(response.data.Course);
            this.product = response.data.Course;
          })
          .catch(error => {
            console.log(error);
          });
      },
    
    }
  };
  </script>
  