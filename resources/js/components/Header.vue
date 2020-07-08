<template>
    <div class="main-wrapper">
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar">
            <form class="form-inline mr-auto">
                <ul class="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a>
                    </li>
                </ul>
            </form>
            <ul class="navbar-nav navbar-right">
                <li class="dropdown"><a href="#" data-toggle="dropdown"
                        class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                        <img alt="image" src="<?=base_url()?>assets/admin/img/avatar/avatar-1.png"
                            class="rounded-circle mr-1">
                        <div class="d-sm-none d-lg-inline-block">Hi, <?=$user?></div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-title">Logged in 5 min ago</div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item has-icon text-danger" href="<?=base_url('login/logout')?>">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="main-sidebar">
            <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="<?=base_url('dashboard')?>">Pinjam Buku</a>
                </div>
                <div class="sidebar-brand sidebar-brand-sm">
                    <a href="<?=base_url('dashboard')?>">PJ</a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Menu Administrator</li>
                    <li class="<?=$this->uri->segment(2) == '' ? 'active' : '' ?>">
                        <a class="nav-link" href="<?=base_url('dashboard')?>">
                            <i class="fas fa-tachometer-alt"></i><span>Dashboard</span>
                        </a>
                    </li>
                    <li class="<?=$this->uri->segment(2) == 'buku' ? 'active' : '' ?>">
                        <a class="nav-link" href="<?=base_url('dashboard/buku')?>">
                            <i class="fas fa-book"></i><span>Buku</span>
                        </a>
                    </li>
                    <li class="<?=$this->uri->segment(2) == 'anggota' ? 'active' : '' ?>">
                        <a class="nav-link" href="<?=base_url('dashboard/anggota')?>">
                            <i class="fas fa-users"></i><span>Anggota</span>
                        </a>
                    </li>
                    <li class="<?=$this->uri->segment(2) == 'peminjam' ? 'active' : '' ?>">
                        <a class="nav-link" href="<?=base_url('dashboard/peminjam')?>">
                            <i class="fas fa-database"></i><span>Peminjam</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
</template>

<script>
    export default {};

</script>
