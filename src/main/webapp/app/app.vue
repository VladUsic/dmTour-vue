<template>
<div id="app">
    <div id="app-header">
      <jhi-navbar></jhi-navbar>
    </div>
    <div>
      <router-view></router-view>
      <b-modal id="login-page" hide-footer lazy>
        <span slot="modal-title" id="login-title">Sign in</span>
        <login-form></login-form>
      </b-modal>
      <jhi-footer></jhi-footer>
    </div>
</div>
</template>
<style scoped>
</style>
<script lang="ts" src="./app.component.ts">
</script>
