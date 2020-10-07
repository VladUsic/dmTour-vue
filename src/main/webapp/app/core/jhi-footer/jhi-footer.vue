<template>
    <!-- Footer Section -->
    <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>About Us</h2>
                    <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
                    <a href="/">Careers</a> <a href="/">Terms of Service</a>
                </div>
                <div class="footer__link--items">
                    <h2>Contact Us</h2>
                    <a href="/">Contact</a> <a href="/">Support</a>
                    <a href="/">Destinations</a>
                </div>
            </div>
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>Videos</h2>
                    <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
                    <a href="/">Agency</a>
                </div>
                <div class="footer__link--items">
                    <h2>Social Media</h2>
                    <a href="/">Instagram</a> <a href="/">Facebook</a>
                    <a href="/">Youtube</a> <a href="/">Twitter</a>
                </div>
            </div>
        </div>
        <section class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo">COLOR</a>
                </div>
                <p class="website__rights">© COLOR 2020. All rights reserved</p>
                <div class="social__icons">
                    <a href="/" class="social__icon--link" target="_blank"
                    ><i class="fab fa-facebook"></i
                    ></a>
                    <a href="/" class="social__icon--link"
                    ><i class="fab fa-instagram"></i
                    ></a>
                    <a href="/" class="social__icon--link"
                    ><i class="fab fa-youtube"></i
                    ></a>
                    <a href="/" class="social__icon--link"
                    ><i class="fab fa-linkedin"></i
                    ></a>
                    <a href="/" class="social__icon--link"
                    ><i class="fab fa-twitter"></i
                    ></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./jhi-footer.component.ts">
</script>

<style scoped>
/* Footer CSS */
.footer__container {
    background-color: #1B002B;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#footer__logo {
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
}
.footer__links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
}
.footer__link--wrapper {
    display: flex;
}
.footer__link--items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
}
.footer__link--items h2 {
    margin-bottom: 16px;
    color: #fff;
}
.footer__link--items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.3 ease-out;
}
.footer__link--items a:hover {
    color: #e9e9e9;
    transition: 0.3 ease-out;
}
.social__icon--link {
    color: #fff;
    font-size: 24px;
}
.social__media {
    max-width: 1000px;
    width: 100%;
}
.social__media--wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
}
.social__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
}
.website__rights {
    color: #fff;
}
@media screen and (max-width: 820px) {
    .footer__links {
        padding-top: 2rem;
    }

    #footer__logo {
        margin-bottom: 2rem;
    }

    .website__rights {
        margin-bottom: 2rem;
    }

    .footer__link--wrapper {
        flex-direction: column;
    }

    .social__media--wrap {
        flex-direction: column;
    }
}
@media screen and (max-width: 480px) {
    .footer__link--items {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
}
</style>
