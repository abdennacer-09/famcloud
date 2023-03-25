<template>
  <div class="login-page">
    <div class="container">
        <div class="login-box">
            <h2 class="title-login-box">Login with ..</h2>

            <button class="lg-btn" >
                <span class="lg-btn-text">Spotify Account</span>
                <img class="icon-lg-btn" src="../assets/images/spotify2.png" alt="">
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-page{
        height: 100vh;
        background-color: #eddada;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .login-box{
        /* margin-left: auto; */
        /* margin-right: auto; */
        /* margin-top: 100px; */
        padding: 44px 20px;
        width: 346px;
        background-color: #fff;
        color: #2A1E1E;
        border-radius: 20px;

        position: absolute;
        top: 86px;
        right: 89px;
        z-index: 1000;
    }

   .login-box .title-login-box{
        font-weight: 600;
    }

    .lg-btn{
        display: block;
        width: 79%;
        height: 50px;
        border-radius: 10px;
        margin: 1rem 0;
        font-size: 1.2rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #2A1E1E, #2A1E1E, #2A1E1E);
        color: #fff;
        /* text-transform: uppercase; */
        background-size: 200%;
        transition: .5s;
        cursor: pointer;
        margin-top: 51px;

        margin-left: auto;
        margin-right: auto;
    }

    .lg-btn .lg-btn-text{
        margin-right: 12px;
    }

    .lg-btn .icon-lg-btn{
        margin-bottom: 8px;
    }


</style>