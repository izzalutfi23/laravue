<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <nav class="navbar navbar-expand-lg main-navbar">
      <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg">
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </form>
      <ul class="navbar-nav navbar-right">
        <li class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg nav-link-user"
          >
            <img alt="image" src="admin/img/avatar/avatar-1.png" class="rounded-circle mr-1" />
            <div class="d-sm-none d-lg-inline-block">Hi,</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-title">Logged in 5 min ago</div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item has-icon text-danger" href="#">
              <i class="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <a href="#">Pinjam Buku</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <a href="#">PJ</a>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Menu Administrator</li>
          <li class="active">
            <router-link :to="{name: 'home'}" class="nav-link">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class>
            <router-link :to="{name: 'posts'}" class="nav-link">
              <i class="fas fa-newspaper"></i>
              <span>Posts</span>
            </router-link>
          </li>
          <li class>
            <router-link :to="{name: 'profil'}" class="nav-link">
              <i class="fas fa-book"></i>
              <span>Buku</span>
            </router-link>
          </li>
        </ul>
      </aside>
    </div>

    <router-view />

    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2018
        <div class="bullet"></div>Design Template By
        <a href="https://nauval.in/">
          Muhamad
          Nauval Azhar
        </a> And Developed App By XXX
      </div>
      <div class="footer-right">2.3.0</div>
    </footer>
  </div>
</template>


<script>
export default {};
</script>
