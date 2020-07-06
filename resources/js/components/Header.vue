<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Header</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{ name: 'posts' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'profil' }" class="nav-link">Profil</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
