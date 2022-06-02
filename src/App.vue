<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        bezkoder
      </router-link>
      <div class="navbar-nav mr-auto">
<!--        드롭다운 #1-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            About
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/home" class="dropdown-item">Home</router-link>
            <router-link to="/complain" class="dropdown-item">Complain</router-link>
<!--            <div class="dropdown-divider"></div>-->
<!--            <a class="dropdown-item" href="#">Something else here</a>-->
          </div>
        </li>

<!--        드롭다운 #2-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Tutorial Menu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/tutorials" class="dropdown-item">Totorials</router-link>
            <router-link to="/add" class="dropdown-item">Add</router-link>
            <router-link to="/upload" class="dropdown-item">Upload</router-link>
<!--            <div class="dropdown-divider"></div>-->
<!--            <a class="dropdown-item" href="#">Something else here</a>-->
          </div>
        </li>
      </div>
      <!--      div끝-->
    </nav>
    <!--    nav끝-->

    <!--    ------------------------------->

    <!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
    <!--        <ul class="navbar-nav mr-auto">-->
    <!--&lt;!&ndash;          드롭다운 부분&ndash;&gt;-->
    <!--          -->
    <!--        </ul>-->
    <!--        &lt;!&ndash;          드롭다운 끝&ndash;&gt;-->


    <!--    ------------------------------->
    <div class="container mt-3">
      <!--      router-link에 있는 메뉴 화면이 아래 위치에 표시-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>