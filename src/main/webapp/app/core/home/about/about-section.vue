<template>
    <div class="main" id="about">
        <div class="main__container">
            <div class="main__img--container">
                <img :src='logo' class="main__img--card"></div>
            </div>
            <div class="main__content">
                <h1>Что мы предлагаем?</h1>
                <h2>Самые лучшие тура по самым в</h2>
                <p>Schedule a call to learn more about our services</p>
                <button class="main__btn"><a href="#">Schedule Call</a></button>
            </div>
        </div>
    </div>
</template>

<style >
/* About Section */
.main {
    background-color: #1B002B;
    padding: 10rem 20px;

}
.main__container {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 90%;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
}
.main__content {
    color: #ffffff;
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;

}
.main__content h1 {
    font-size: 2rem;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 32px;
}
.main__content h2 {
    font-size: 4rem;
    color: #ffffff;

}
.main__content p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
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
.main__img--container {
    text-align: center;
    margin-bottom: 100px;
}
.main__img--card {
    height: 500px;
    width: 500px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: ce;
}
.fa-layer-group,
.fa-users {
    font-size: 14rem;
}
@media screen and (max-width: 1100px) {
    .main__container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        height: 90%;
    }

    .main__img--container {
        display: flex;
        justify-content: center;
       

    }

    .main__img--card {
        height: 425px;
        width: 425px;
    }

    .main__content {
        text-align: center;
        margin-bottom: 4rem;
    }

    .main__content h1 {
        font-size: 2.5rem;
        margin-top: 2rem;
    }
    .main__content h2 {
        font-size: 3rem;
    }
    .main__content p {
        margin-top: 1rem;
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 480px) {
    .main__img--card {
        width: 250px;
        height: 250px;
    }

    .fa-users,
    .fa-layer-group {
        font-size: 4rem;
    }

    .main__content h1 {
        font-size: 2rem;
        margin-top: 3rem;
    }
    .main__content h2 {
        font-size: 2rem;
    }

    .main__content p {
        margin-top: 2rem;
    }

    .main__btn {
        padding: 12px 36px;
        margin: 2.5rem 0;
    }
}
</style>
<script lang="ts" src="./about.component.ts">
</script>

