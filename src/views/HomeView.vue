<template>
  <div class="home">
    <div v-if="isShownPopup" class="login-box">
      <h2 class="title-login-box">Login with ..</h2>
      <button class="lg-btn" >
          <span class="lg-btn-text">Spotify Account</span>
          <img class="icon-lg-btn" src="../assets/images/spotify2.png" alt="">
      </button>
    </div>
    <div class="container">
      <div class="row position-relative">
        <h1 class="title-home position-absolute">ANY ARTIST, ANY SUBGENRE, ANY SONG</h1>
        <div class="col-sm-4">
          <button class="listen-btn"> <span class="text-listen-btn"> Listen to Alan walker </span> <img class="icon-listen-btn" src="../assets/images/spotify2.png" alt=""></button>
          <img class="image-artist" src="../assets/images/img1Home.png" alt="">
        </div>
        <div class="col-sm-4">
          <button class="listen-btn"> <span class="text-listen-btn"> Listen to Martin Garix </span> <img class="icon-listen-btn" src="../assets/images/spotify2.png" alt=""></button>
          <img class="image-artist" src="../assets/images/img2Home.png" alt="">
        </div>
        <div class="col-sm-4">
          <button class="listen-btn"> <span class="text-listen-btn"> Listen to Shelby Sawy </span> <img class="icon-listen-btn" src="../assets/images/spotify2.png" alt=""></button>
          <img class="image-artist"  src="../assets/images/kygo.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div id="upload-section" class="upload-page">
    <svg class="music-icon1" width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4556 66.7218C8.20554 65.583 4.96707 63.1159 2.74021 59.3204C0.513342 55.5249 -0.0385968 51.5316 1.08439 47.3406C2.20738 43.1495 4.68201 39.9672 8.50828 37.7937C12.3345 35.6201 16.3727 35.1027 20.6228 36.2415C22.1039 36.6384 23.425 37.1788 24.5862 37.863C25.7493 38.5503 26.8168 39.3985 27.7887 40.4076L38.5592 0.211657L61.7414 6.42331L57.6578 21.6635L42.203 17.5224L31.994 55.6228C30.871 59.8138 28.3964 62.9961 24.5701 65.1697C20.7439 67.3433 16.7057 67.8606 12.4556 66.7218Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon2" width="38" height="80" viewBox="0 0 38 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3564 77.4878C25.5459 79.6878 21.5114 80.2332 17.253 79.124C12.9945 78.0148 9.78056 75.5814 7.61111 71.8238C5.44167 68.0663 4.94126 64.0662 6.1099 59.8237C7.27854 55.5812 9.76812 52.3599 13.5786 50.1599C14.9065 49.3932 16.2229 48.8412 17.5277 48.5039C18.8361 48.1675 20.1907 48.0124 21.5916 48.0387L0.784609 12L21.5692 0L29.4581 13.664L15.6017 21.664L35.3239 55.8238C37.4934 59.5814 37.9938 63.5815 36.8251 67.824C35.6565 72.0665 33.1669 75.2878 29.3564 77.4878Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon3" width="38" height="80" viewBox="0 0 38 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3564 77.4878C25.5459 79.6878 21.5114 80.2332 17.253 79.124C12.9945 78.0148 9.78056 75.5814 7.61111 71.8238C5.44167 68.0663 4.94127 64.0662 6.1099 59.8237C7.27854 55.5812 9.76812 52.3599 13.5786 50.1599C14.9065 49.3932 16.2229 48.8412 17.5277 48.5039C18.8361 48.1675 20.1907 48.0124 21.5916 48.0387L0.784609 12L21.5692 0L29.4581 13.664L15.6017 21.664L35.3239 55.8238C37.4934 59.5814 37.9938 63.5815 36.8251 67.824C35.6565 72.0665 33.1669 75.2878 29.3564 77.4878Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon4" width="38" height="80" viewBox="0 0 38 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3564 77.4878C25.5459 79.6878 21.5114 80.2332 17.253 79.124C12.9945 78.0148 9.78056 75.5814 7.61111 71.8238C5.44167 68.0663 4.94127 64.0662 6.1099 59.8237C7.27854 55.5812 9.76812 52.3599 13.5786 50.1599C14.9065 49.3932 16.2229 48.8412 17.5277 48.5039C18.8361 48.1675 20.1907 48.0124 21.5916 48.0387L0.784609 12L21.5692 0L29.4581 13.664L15.6017 21.664L35.3239 55.8238C37.4934 59.5814 37.9938 63.5815 36.8251 67.824C35.6565 72.0665 33.1669 75.2878 29.3564 77.4878Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon5" width="38" height="80" viewBox="0 0 38 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3564 77.4878C25.5459 79.6878 21.5114 80.2332 17.253 79.124C12.9945 78.0148 9.78056 75.5814 7.61111 71.8238C5.44167 68.0663 4.94127 64.0662 6.1099 59.8237C7.27854 55.5812 9.76812 52.3599 13.5786 50.1599C14.9065 49.3932 16.2229 48.8412 17.5277 48.5039C18.8361 48.1675 20.1907 48.0124 21.5916 48.0387L0.784609 12L21.5692 0L29.4581 13.664L15.6017 21.664L35.3239 55.8238C37.4934 59.5814 37.9938 63.5815 36.8251 67.824C35.6565 72.0665 33.1669 75.2878 29.3564 77.4878Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon6" width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4556 66.7218C8.20554 65.583 4.96707 63.1159 2.74021 59.3204C0.513342 55.5249 -0.0385968 51.5316 1.08439 47.3406C2.20738 43.1495 4.68201 39.9672 8.50828 37.7937C12.3345 35.6201 16.3727 35.1027 20.6228 36.2415C22.1039 36.6384 23.425 37.1788 24.5862 37.863C25.7493 38.5503 26.8168 39.3985 27.7887 40.4076L38.5592 0.211657L61.7414 6.42331L57.6578 21.6635L42.203 17.5224L31.994 55.6228C30.871 59.8138 28.3964 62.9961 24.5701 65.1697C20.7439 67.3433 16.7057 67.8606 12.4556 66.7218Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon7" width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4556 66.7218C8.20554 65.583 4.96707 63.1159 2.74021 59.3204C0.513342 55.5249 -0.0385968 51.5316 1.08439 47.3406C2.20738 43.1495 4.68201 39.9672 8.50828 37.7937C12.3345 35.6201 16.3727 35.1027 20.6228 36.2415C22.1039 36.6384 23.425 37.1788 24.5862 37.863C25.7493 38.5503 26.8168 39.3985 27.7887 40.4076L38.5592 0.211657L61.7414 6.42331L57.6578 21.6635L42.203 17.5224L31.994 55.6228C30.871 59.8138 28.3964 62.9961 24.5701 65.1697C20.7439 67.3433 16.7057 67.8606 12.4556 66.7218Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon8" width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4556 66.7218C8.20554 65.583 4.96707 63.1159 2.74021 59.3204C0.513342 55.5249 -0.0385968 51.5316 1.08439 47.3406C2.20738 43.1495 4.68201 39.9672 8.50828 37.7937C12.3345 35.6201 16.3727 35.1027 20.6228 36.2415C22.1039 36.6384 23.425 37.1788 24.5862 37.863C25.7493 38.5503 26.8168 39.3985 27.7887 40.4076L38.5592 0.211657L61.7414 6.42331L57.6578 21.6635L42.203 17.5224L31.994 55.6228C30.871 59.8138 28.3964 62.9961 24.5701 65.1697C20.7439 67.3433 16.7057 67.8606 12.4556 66.7218Z" fill="#2A1E1E"/>
    </svg>
    <svg class="music-icon9" width="38" height="80" viewBox="0 0 38 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3564 77.4878C25.5459 79.6878 21.5114 80.2332 17.253 79.124C12.9945 78.0148 9.78056 75.5814 7.61111 71.8238C5.44167 68.0663 4.94126 64.0662 6.1099 59.8237C7.27854 55.5812 9.76812 52.3599 13.5786 50.1599C14.9065 49.3932 16.2229 48.8412 17.5277 48.5039C18.8361 48.1675 20.1907 48.0124 21.5916 48.0387L0.784609 12L21.5692 0L29.4581 13.664L15.6017 21.664L35.3239 55.8238C37.4934 59.5814 37.9938 63.5815 36.8251 67.824C35.6565 72.0665 33.1669 75.2878 29.3564 77.4878Z" fill="#2A1E1E"/>
    </svg>

    <div class="body-opload-page">
        <h1 class="title-upload-page">Upload the song to know the genre</h1>
        <div class="item-upload-page">
            <div>
                <input type="text" class="form-control form-rounded" placeholder="Select a song ..">
                <input type="file" id="input-music" class="music-input">
                <button @click="uploadFileMusic()" class="btn-s btn-browse">Browse</button>
            </div>
            <div class="bottom-btn-content">
                <button class="btn-s btn-sub"> <span class="btn-span-txt">Submit</span> </button>
            </div>
        </div>
    </div>
    <div class="recommendations">
        <!-- Recommendations 1 -->
        <div class="rec-top">
            <div class="title-rec">
                <h4>Similar songs you must listen </h4>
            </div>
            <hr class="line">
            <button class="rec-btn"> <span class="text-rec-btn"> Recommend more </span> <img class="icon-rec-btn" src="../assets/images/spotify2.png" alt=""></button>
        </div>
        <div class="cont-songs">
            <div class="songs-items d-flex flex-wrap">
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/shootout.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>On my way</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/atlantis.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Dark Side</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/freefall.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Sweet Dreams</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/gazzy.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Play</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/dizzy.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>M3a l3echrane</h5>
                        <p>Dizzy Dros</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/shootout.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>On my way</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/atlantis.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Dark Side</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/freefall.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Sweet Dreams</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/gazzy.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Play</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/dizzy.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>M3a l3echrane</h5>
                        <p>Dizzy Dros</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Recommendations 2 -->
        <div class="rec-top">
            <div class="title-rec">
                <h4>Same Artists</h4>
            </div>
            <hr class="line no-rec-btn">
        </div>
        <div class="cont-songs">
            <div class="songs-items d-flex flex-wrap">
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/shootout.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>On my way</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/atlantis.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Dark Side</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/freefall.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Sweet Dreams</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/gazzy.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Play</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/dizzy.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>M3a l3echrane</h5>
                        <p>Dizzy Dros</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Recommendations 3 -->
        <div class="rec-top">
            <div class="title-rec">
                <h4>Same Tempos</h4>
            </div>
            <hr class="line no-rec-btn">
        </div>
        <div class="cont-songs">
            <div class="songs-items d-flex flex-wrap">
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/shootout.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>On my way</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/atlantis.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Dark Side</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/freefall.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Sweet Dreams</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/gazzy.jpeg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>Play</h5>
                        <p>Alan Walker</p>
                    </div>
                </div>
                <div class="song-item">
                    <div class="img-content-song">
                        <img src="../assets/images/dizzy.jpg" alt="">
                    </div>
                    <div class="text-content">
                        <h5>M3a l3echrane</h5>
                        <p>Dizzy Dros</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="section-about" class="container about-us">
      <div>
        <h1 class="about-section-title">About us</h1>
      </div>
      <div>
        <div>
          <h3 class="title-aboutus">Discover Your Next Favorite Song with Famcloud</h3>
        </div>
        <div>
          <p>
            Find the Best Music Based on Your Genre Preference
            Are you tired of listening to the same songs over and over again? Want to discover new music that matches your taste? Look no further than Famcloud. Our music recommendation tool uses Spotify's extensive library to classify songs based on the genre you want and recommend similar songs that you'll love.
            With Famcloud, you'll get personalized music recommendations that match your music preferences. Whether you're into pop, rock, hip-hop, or jazz, we have you covered. Our intuitive interface makes it easy to find the perfect song, no matter your mood or taste.
            Sign up for Famcloud today and discover your next favorite song. It's free, easy, and fun. Get started now and unlock a world of music that's tailored just for you.
          </p>
        </div>
      </div>
    </div>

    <div class="contact-us">
        <div id="section-contact" class="container">
        <div class="d-flex content-contact-us">
            <div style="margin-right: 138px;">
                <h2 class="about-section-title">Contact Us</h2>
            </div>
            <div>
                <p style="margin-top: 4px;">
                    For any business queries, please feel free to reach out us on <span class="contact-email">Famcloudmusic@gmail.com</span>
                </p>
            </div>
        </div>
      
    </div>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed:{
    isShownPopup(){
      return this.$store.state.showLogin;
    }
  },
  methods:{
    uploadFileMusic(){
      let fileInput = document.getElementById('input-music');
      fileInput.click();
    }
  }
};
</script>
<style>

  .home{
    background-color: #eddada;
    height: 100vh;
  }

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

  .title-home{
    color: #fff;
    bottom: 40px;
  }

  .listen-btn{
    position: relative;
    display: inline-block;
    margin: 1em;
    padding: 8px 18px;
    border: 0;
    border-radius: 30px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    transition: all 0.1s ease;

    background-color: #2A1E1E;
    color: #fff;
    font-weight: 400;

    margin-top: 20px;
  }

    .listen-btn:focus {
      outline: none;
    }

    .listen-btn:active {
      transform: translateY(1px);
      box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.15);
    }

    .listen-btn:hover{
      box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15);
    }

    .icon-listen-btn{
      margin-bottom: 6px;
    }

    .text-listen-btn{
      margin-right: 11px;
    }

    .home .image-artist{
      width: 100%;
    }
    /**   upload page */

    .upload-page{
        /* height: 100vh; */
        background-color: #eddada;
        padding-top: 50px;
        /* padding-bottom: 50px; */
        position: relative;
    } 

    .upload-page .title-upload-page{
        font-weight: 600;
    }

    .item-upload-page{
        width: 37%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 81px;
        position: relative;
    }

    .item-upload-page .form-rounded{
        border-radius: 2.375rem;
    }

    .item-upload-page .form-control{
        line-height: 2.5;
    }

    .item-upload-page .form-control::placeholder{
        color: #948C8C;
        font-weight: bold;
    }

    .btn-s{
        position: relative;
        display: inline-block;
        margin: 1em;
        padding: 1em 2em;
        border: 0;
        border-radius: 30px;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        transition: all 0.1s ease;
    }

    .btn-s:focus {
        outline: none;
    }

    .btn-s:active {
        transform: translateY(1px);
        box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.15);
    }

    .btn-s:hover{
        box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15);
    }

    .btn-browse{
        background-color: #CFCFCF;
        color: #2A1E1E;
        position: absolute;
        top: -12px;
        right: -9px;
        font-weight: 800;
    }
    
    .bottom-btn-content{
        padding-top: 62px;
    }

    .btn-sub{
        background-color: #fff;
        color: #2A1E1E;
        font-weight: 700;
    }

    .btn-span-txt{
        font-size: 15px;
    }

    .music-icon1{
        position: absolute;
        left: 44px;
        width: 34px;
    }

    .music-icon2{
        position: absolute;
        right: 81px;
        width: 24px;
    }

    .music-icon3{
        position: absolute;
        left: 95px;
        top: 405px;
        width: 24px;
    }

    .music-icon4{
        position: absolute;
        left: 73px;
        top: 420px;
        width: 14px;
    }

    .music-icon5{
        position: absolute;
        left: 60px;
        top: 430px;
        width: 8px;
    }

    .music-icon6{
        position: absolute;
        right: 75px;
        top: 460px;
        width: 38px;
    }

    .music-icon7{
        position: absolute;
        right: 95px;
        top: 450px;
        width: 38px;
    }

    .music-icon8{
        position: absolute;
        left: 44px;
        width: 34px;
        top: 1520px;
    }

    .music-icon9{
        position: absolute;
        right: 81px;
        width: 24px;
        top: 1502px;
    }
    
    /* .after-submet-btn{
        position: absolute;
        top: -73px;
        right: -182px;
    } */

    .recommendations{
        /* padding-left: 264px; */
        margin-top: 39px;
    }

    .rec-top{
        display: flex;
        width: 67%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 54px;
    }

    .cont-songs{
        width: 67%;
        margin-left: auto;
        margin-right: auto;
    }

    .line{
        border: 1.5px solid black;
        width: 25%;
        opacity: 1;
        height: 4px;
        background-color: black;
        margin-top: 44px;
    }

    .line.no-rec-btn{
        width: 54%;
    }

    .title-rec{
        /*  margin-right: 32px; */
        padding-top: 29px;
        padding-bottom: 10px;
        text-align: left;
        /* min-width: 320px; */
        width: 49%;
    }

    .title-rec h4{
        font-weight: 600;
    }

    .rec-btn{
        position: relative;
        display: inline-block;
        margin: 1em;
        padding: 0em 1em;
        border: 0;
        border-radius: 30px;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        transition: all 0.1s ease;

        background-color: #2A1E1E;
        color: #fff;
        font-weight: 400;

        margin-top: 20px;

        margin-left: auto;
    }

    .rec-btn:focus {
        outline: none;
    }

    .rec-btn:active {
        transform: translateY(1px);
        box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.15);
    }

    .rec-btn:hover{
        box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15);
    }

    .icon-rec-btn{
        margin-bottom: 6px;
    }

    .text-rec-btn{
        margin-right: 11px;
    }

    .songs-items .song-item{
        width: 17%;
        margin-right: 3%;
        cursor: pointer;
        margin-bottom: 22px;
    }

    .songs-items .song-item .img-content-song{
        width: 100%;
    }

    .songs-items .song-item .img-content-song img{
        width: 100%;
    }

    .text-content h5{
        font-weight: 600;
        margin-bottom: 0;
        margin-top: 12px;
        font-size: 19px;
        color: #2A1E1E;
    }

    .text-content p{
        font-size: 14px;
        font-weight: 600;
    }

    #input-music{
      display: none;
    }

    .about-us, .contact-us{
      margin-top: 94px;
    }

    .contact-us{
        background-color: #2A1E1E;
        color: #fff;
    }

    .content-contact-us{
        padding-top: 30px;
    }


    .about-section-title{
      /* text-align: left; */
      font-weight: bolder;
      margin-bottom: 33px;
      /* font-size: 28px; */
    }

    .title-aboutus{
      margin-bottom: 35px;
      font-weight: 600;
      font-size: 23px;
    }

    .about-us p{
      font-size: 18px;
      text-align: justify;
    }

    .contact-email{
      font-size: 19px;
      font-weight: 600;
    }


</style>
