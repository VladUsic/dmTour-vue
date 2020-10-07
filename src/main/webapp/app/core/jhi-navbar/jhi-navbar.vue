<template >
    <b-navbar  toggleable="md"
               type="dark"
               id="navbar"
               v-bind:class="{ 'blueNavBar' : isBlue , 'jh-navbar': isTransparent }">
        <b-navbar-brand class="logo" b-link to="/">
            <!-- <span class="logo-img"></span> -->
            <img class="logo-img" v-on:click="goToHome()" :src="logo">
            
        </b-navbar-brand>
        <b-navbar-brand center>
            <img class="logo-img-center" :src="travelGroup"/>
        </b-navbar-brand>
        <b-navbar-toggle
        right
        class="jh-navbar-toggler d-lg-none icon "
        href="javascript:void(0);"
        data-toggle="collapse"
        target="header-tabs"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <font-awesome-icon  icon="bars" />
        </b-navbar-toggle>
        <b-collapse is-nav id="header-tabs" class="" >
            <b-navbar-nav class="nav-b ml-auto ">
                <b-nav-item to="/" exact >
                    <span class="dropdown-item-on-focus">
                        <font-awesome-icon icon="home"  />
                        <span>Home</span>
                    </span>
                </b-nav-item>
                <b-nav-item to="/" exact >
                    <span class="dropdown-item-on-focus">
                        <i class="fas fa-blog"></i>
                        <span>Blog</span>
                    </span>
                </b-nav-item>
                <b-nav-item to="/" exact >
                    <span class="dropdown-item-on-focus">
                        <i class="fas fa-comments"></i>
                        <span>Reviews</span>
                    </span>
                </b-nav-item>
                <b-nav-item-dropdown
                    right
                    href="javascript:void(0);"
                    class="m-md-2">
                    <span slot="button-content" class=" navbar-dropdown-menu dropdown-item-on-focus">
                        <i class="fas fa-globe"></i>
                        <span>Order Tour</span>
                    </span>
                    <b-dropdown-item to="/account/settings" tag="b-dropdown-item"  active-class="active" >
                        <font-awesome-icon icon="wrench" />
                        <span >Air Tour</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/account/password" tag="b-dropdown-item"  active-class="active">
                        <font-awesome-icon icon="wrench" />
                        <span >Bus Tour</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/account/password" tag="b-dropdown-item"  active-class="active">
                        <font-awesome-icon icon="wrench" />
                        <span >Vip Tour</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/account/password" tag="b-dropdown-item"  active-class="active">
                        <font-awesome-icon icon="wrench" />
                        <span >Group Tour</span>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                    right
                    id="entity-menu"
                    v-if="hasAnyAuthority('ROLE_ADMIN') && authenticated"
                    :class="{'router-link-active': subIsActive('/admin')}"
                    active-class="active" class="pointer ">
                    <span slot="button-content" class="navbar-dropdown-menu dropdown-item-on-focus" >
                        <font-awesome-icon icon="th-list" />
                        <span>Entities</span>
                    </span>
                    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                    right
                    id="admin-menu"
                    v-if="hasAnyAuthority('ROLE_ADMIN') && authenticated"
                    :class="{'router-link-active': subIsActive('/admin')}"
                    active-class="active"
                    class="pointer ">
                    <span slot="button-content" class="navbar-dropdown-menu">
                        <font-awesome-icon icon="cogs" />
                        <span>Administration</span>
                    </span>
                    <b-dropdown-item to="/admin/user-management" active-class="active">
                        <font-awesome-icon icon="user" />
                        <span>User management</span>
                    </b-dropdown-item>
                    <b-dropdown-item  to="/admin/jhi-metrics" active-class="active">
                        <font-awesome-icon icon="tachometer-alt" />
                        <span>Metrics</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/admin/jhi-health" active-class="active">
                        <font-awesome-icon icon="heart" />
                        <span>Health</span>
                    </b-dropdown-item>
                    <b-dropdown-item  to="/admin/jhi-configuration" active-class="active">
                        <font-awesome-icon icon="list" />
                        <span>Configuration</span>
                    </b-dropdown-item>
                    <b-dropdown-item  to="/admin/audits" active-class="active">
                        <font-awesome-icon icon="bell" />
                        <span>Audits</span>
                    </b-dropdown-item>
                    <b-dropdown-item  to="/admin/logs" active-class="active">
                        <font-awesome-icon icon="tasks" />
                        <span>Logs</span>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="swaggerEnabled"  to="/admin/docs" active-class="active">
                        <font-awesome-icon icon="book" />
                        <span>API</span>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="!inProduction"  href='./h2-console' target="_tab">
                        <font-awesome-icon icon="hdd" />
                        <span>Database</span>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                    right
                    href="javascript:void(0);"
                    class="m-md-2">
<!--                    id="account-menu"-->
<!--                    :class="{'router-link-active': subIsActive('/account')}"-->
<!--                    active-class="active"-->
<!--                    class="pointer">-->
                    <span slot="button-content" class=" navbar-dropdown-menu dropdown-item-on-focus">
                        <font-awesome-icon icon="user" />
                        <span>
                            Account
                        </span>
                    </span>
                    <b-dropdown-item to="/account/settings" tag="b-dropdown-item" v-if="authenticated" active-class="active" >
                        <font-awesome-icon icon="wrench" />
                        <span >Settings</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/account/password" tag="b-dropdown-item" v-if="authenticated" active-class="active">
                        <font-awesome-icon icon="lock" />
                        <span>Password</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/account/sessions" tag="b-dropdown-item" v-if="hasAnyAuthority('ROLE_ADMIN') && authenticated" active-class="active">
                        <font-awesome-icon icon="cloud" />
                        <span>Sessions</span>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="authenticated"  v-on:click="logout()" id="logout" active-class="active">
                        <font-awesome-icon icon="sign-out-alt" class="dropdown-menu-items" />
                        <span >Sign out</span>
                    </b-dropdown-item>
                    <b-dropdown-item v-if="!authenticated"  v-on:click="openLogin()" id="login" active-class="active">
                        <font-awesome-icon icon="sign-in-alt" />
                        <span>Sign in</span>
                    </b-dropdown-item>
                    <b-dropdown-item to="/register" tag="b-dropdown-item" id="register" v-if="!authenticated" active-class="active">
                        <font-awesome-icon icon="user-plus" />
                        <span>Register</span>
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts" src="./jhi-navbar.component.ts">

</script>
<style scoped>
/* ==========================================================================
    Navbar
    ========================================================================== */

.blueNavBar{
    background-color: #1B002B;
    width: 100%;
    position: sticky;
    visibility: visible;
    padding: 0.2em 1em;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.3s ease-in;
    padding: 0.2em 1em;
}

.jh-navbar {
    padding: 0.2em 1em;
    background-color: transparent;
    width: 100%;
    position: fixed;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.3s ease-in;
}
.jh-navbar:hover{
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(11px);
    border-radius: 25px;
}
.jh-navbar .jh-navbar-toggler {
    color: #fcb045;
    font-size: 2.0em;
    padding: 10px;
}
.jh-navbar .jh-navbar-toggler:hover {
    color: #fff;

}
@media screen and (min-width: 768px) {
    .jh-navbar-toggler {
        display: none;
    }
    .nav-b{
        font-size: 20px;
        align-items: center;
    }
}
@media screen and (min-width: 100px) and (max-width: 1150px) {
    .nav-b{
        border-radius: 25px;
        font-size: 20px;
        align-items: center;

    }
}
@media screen and (min-width: 768px) and (max-width: 1300px) {
    span span{
        display:none;
    }
}
/* ==========================================================================
    Logo styles
    ========================================================================== */
.logo .logo-img {
  display: inline-block;
  background-image:none;
  vertical-align:middle;
}
.logo-img {
    width: 110px;
    height: 90px;

}
.logo-img-center{
    width: 100px;
    height: 50px;
}

</style>
