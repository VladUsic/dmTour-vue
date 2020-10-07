<template>
    <div class='hero-container'>
        <video  ref="video"  :src="video"  autoplay loop muted >
        </video>
        <h1>ADVENTURE AWAITS</h1>
        <button class="main__btn"><a href="/order-tour">ORDER TOUR</a></button>

    </div>
</template>

<style scoped>
/*Hero Section */
h1{
    color: #fff;
    text-align: center;
    background: -webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
    background: linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
    -webkit-background-clip: text;
}
a{
    color: #fcb045;
}
video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
.hero-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
}
.hero-container > h1 {
    font-size: 80px;
    margin-top: -100px;
}
.hero-container > p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
@media screen and (max-width: 960px) {
    .hero-container > h1 {
        font-size: 70px;
        margin-top: -150px;
    }
}
@media screen and (max-width: 768px) {
    .hero-container > h1 {
        font-size: 50px;
        margin-top: -100px;
    }
}
.hero-container > p {
    font-size: 30px;
}
.main__btn {
    font-size: 1.8rem;
    /*background: #833ab4;*/
    /*background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);*/
    /*background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);*/
    background: #1B002B;
    background: -webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
    background: linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
    -webkit-box-shadow: 22px 20px 226px 15px rgba(255,193,7,1);
    -moz-box-shadow: 22px 20px 226px 15px rgba(255,193,7,1);
    box-shadow: 22px 20px 226px 15px rgba(255,193,7,1);
    padding: 20px 60px;
    border: none;
    border-radius: 15px;
    margin-top: 6rem;
    cursor: pointer;
    position: relative;
    transition: all 0.35s;
    outline: none;
}
.main__btn a {
    position: relative;
    z-index: 2;
    color: #fff;
    text-decoration: none;
}
.main__btn:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #fcb045;
    transition: all 0.35s;
    border-radius: 15px;
}
.main__btn:hover {
    color: #fff;
    border-radius: 15px;

}
.main__btn:hover:after {
    width: 100%;
    border-radius: 15px;

}
</style>
<script lang="ts" src="./hero.component.ts">
</script>

