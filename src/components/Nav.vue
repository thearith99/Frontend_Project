<template>
  <!-- @header-depart-container -->
  <div class="header-depart-container">
    <div class="header-department">
      <!-- @logo-container -->
      <div class="logo-container">
        <h1>Logo</h1>
      </div>
      <!-- @title-container -->
      <div class="title-container">
        <h1>Department name</h1>
      </div>
    </div>
  </div>
  <!-- @header-menu-container -->
  <div class="header-menu-container">
    <div class="header-menu">
      <ul class="container-fluid" v-if="!auth">
        <router-link to="/" class="navbar-brand"><li>Home</li></router-link>
        <router-link to="/year_two"><li>Year Two</li></router-link>
        <router-link to="/year_three"><li>Year Three</li></router-link>
        <router-link to="/year_four"><li>Year Four</li></router-link>
        <router-link to="/year_five"><li>Year Five</li></router-link>
        <li><input type="text" placeholder="Search.." /></li>
        <li class="nav-item" v-if="!auth">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
      </ul>
      <ul class="nav-item" v-if="auth">
        <router-link to="/" class="navbar-brand"><li>Home</li></router-link>
        <router-link to="/year_two"><li>Year Two</li></router-link>
        <router-link to="/year_three"><li>Year Three</li></router-link>
        <router-link to="/year_four"><li>Year Four</li></router-link>
        <router-link to="/year_five"><li>Year Five</li></router-link>
        <li><input type="text" placeholder="Search.." /></li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" @click="logout">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
    <!-- <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
          </ul>
  
          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
            <li class="nav-item">
              <router-link to="/login" class="nav-link" @click="logout">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Nav',
    setup() {
      const store = useStore();
  
      const auth = computed(() => store.state.authenticated);
  
      const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        
      };
  
      return {
        auth,
        logout,
      };
    },
  };
  </script>
  <style>
  body {
    width: 100%;
    height: 100vh;
    background-color: gray;
  }
  /* @header-depart-container */
  .header-depart-container {
    width: 100%;
    height: 120px;
    background-color: blue;
  }
  .header-department {
    width: 85%;
    height: 100%;
    background-color: orangered;
    margin: auto;
    display: flex;
  }
  /* @logo-container */
  .logo-container {
    width: 130px;
    height: 100%;
    background-color: black;
  }
  .logo-container h1 {
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
  }
  /* @title-container */
  .title-container {
    width: 600px;
    height: 100%;
    background-color: deeppink;
    margin: auto;
  }
  .title-container h1 {
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 40px;
  }
  
  /* @header-menu-container */
  .header-menu-container {
    width: 100%;
    height: 75px;
    background-color: blueviolet;
    position: sticky;
    top: 0px;
    z-index: 10;
  }
  .header-menu {
    width: 85%;
    /* height: 100%; */
    background-color: green;
    margin: auto;
    /* padding-top: 28px; */
    align-items: center;
    position: relative;
  }
  .header-menu ul {
    list-style-type: none;
    gap: 40px;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 20.3px;
  }
  .header-menu ul li {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }
  .header-menu ul li:nth-child(6) input {
    border-radius: 8px;
    border: none;
    padding: 4px;
    position: absolute;
    right: 220px;
    top: 22px;
    padding-left: 10px;
  }
  
  .header-menu ul li:nth-child(7) {
    border-radius: 8px;
    border: none;
    padding: 5px;
    position: absolute;
    right: 130px;
    background-color: blue;
    color: white;
  }
  .header-menu ul li:nth-child(8) {
    border-radius: 8px;
    border: none;
    padding: 5px;
    position: absolute;
    right: 20px;
    background-color: orange;
    color: white;
  }
  </style>
  