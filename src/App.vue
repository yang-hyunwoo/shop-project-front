<template>
  <header class="header_section">
    <nav class="navbar navbar-expand-lg custom_nav-container">
      <a class="navbar-brand" href="index.html">
        <span>
          늘여기
        </span>
      </a>
      <button class="navbar-toggler menu_border_none" type="button" @click="toggleNavbar" aria-label="Toggle navigation" >
        <!-- Font Awesome 아이콘 적용 -->
        <i :class="navbarIconClass" ></i>
      </button>

      <div :class="navbarCollapseClass" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="shop.html">
              Shop
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="why.html">
              Why Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="testimonial.html">
              Testimonial
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Us</a>
          </li>
        </ul>
        <div class="user_option">
          <a href="">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>
              Login
            </span>
          </a>
          <a href="">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </a>
          <form class="form-inline">
            <button class="btn nav_search-btn" type="submit">
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, computed } from 'vue';

const navbarCollapsed = ref(true);
const navbarIcon = ref('fa-bars');

const navbarCollapseClass = computed(() => {
  return {
    'collapse navbar-collapse': navbarCollapsed.value,
    show: !navbarCollapsed.value,
  };
});

const navbarIconClass = computed(() => {
  return `fa ${navbarIcon.value}`;
});

const toggleNavbar = () => {
  navbarCollapsed.value = !navbarCollapsed.value;
  navbarIcon.value = navbarCollapsed.value ? 'fa-bars' : 'fa-times';
};
</script>
