<template>
  <div class="header-tab">
    <!-- bg-light -->
    <nav class="nv-edit navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">famcloud</a>
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item nv-it active">
                        <!-- <a class="nav-link" href="#upload-section" >Upload</a> -->
                        <router-link to="/" class="nav-link" >Home</router-link>
                    </li>
                    <li class="nav-item nv-it">
                        <a class="nav-link" href="#upload-section" >Upload</a>
                        <!-- <router-link to="/upload" class="nav-link" >Upload</router-link> -->
                    </li>
                    <li class="nav-item nv-it">
                        <a class="nav-link" href="#section-about">About</a>
                    </li>
                    <li class="nav-item nv-it">
                        <a class="nav-link" href="#section-contact">Contact us</a>
                    </li>
                    <!-- <li class="nav-item nv-it">
                        <router-link to="/login" class="nav-link" >Login</router-link>
                    </li> -->
                    <li class="nav-item">
                        <div class="d-flex">
                            <svg @click="showLoginPopup()" class="icon-pers" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1625 38.475C15.075 37.0125 17.2125 35.859 19.575 35.0145C21.9375 34.1715 24.4125 33.75 27 33.75C29.5875 33.75 32.0625 34.1715 34.425 35.0145C36.7875 35.859 38.925 37.0125 40.8375 38.475C42.15 36.9375 43.1723 35.1937 43.9043 33.2437C44.6348 31.2937 45 29.2125 45 27C45 22.0125 43.2472 17.7653 39.7417 14.2582C36.2348 10.7527 31.9875 9 27 9C22.0125 9 17.766 10.7527 14.2605 14.2582C10.7535 17.7653 9 22.0125 9 27C9 29.2125 9.366 31.2937 10.098 33.2437C10.8285 35.1937 11.85 36.9375 13.1625 38.475ZM27 29.25C24.7875 29.25 22.9215 28.491 21.402 26.973C19.884 25.4535 19.125 23.5875 19.125 21.375C19.125 19.1625 19.884 17.2965 21.402 15.777C22.9215 14.259 24.7875 13.5 27 13.5C29.2125 13.5 31.0785 14.259 32.598 15.777C34.116 17.2965 34.875 19.1625 34.875 21.375C34.875 23.5875 34.116 25.4535 32.598 26.973C31.0785 28.491 29.2125 29.25 27 29.25ZM27 49.5C23.8875 49.5 20.9625 48.909 18.225 47.727C15.4875 46.5465 13.1063 44.9438 11.0813 42.9188C9.05625 40.8938 7.4535 38.5125 6.273 35.775C5.091 33.0375 4.5 30.1125 4.5 27C4.5 23.8875 5.091 20.9625 6.273 18.225C7.4535 15.4875 9.05625 13.1063 11.0813 11.0813C13.1063 9.05625 15.4875 7.45275 18.225 6.27075C20.9625 5.09025 23.8875 4.5 27 4.5C30.1125 4.5 33.0375 5.09025 35.775 6.27075C38.5125 7.45275 40.8938 9.05625 42.9188 11.0813C44.9438 13.1063 46.5465 15.4875 47.727 18.225C48.909 20.9625 49.5 23.8875 49.5 27C49.5 30.1125 48.909 33.0375 47.727 35.775C46.5465 38.5125 44.9438 40.8938 42.9188 42.9188C40.8938 44.9438 38.5125 46.5465 35.775 47.727C33.0375 48.909 30.1125 49.5 27 49.5Z" fill="#F9FAF9"/>
                            </svg>
                            <svg @click="showLoginPopup()" class="shev-icon" width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.575 2.14961L10.175 10.5746C10.075 10.6746 9.96667 10.7453 9.85 10.7866C9.73333 10.8286 9.60833 10.8496 9.475 10.8496C9.34167 10.8496 9.21667 10.8286 9.1 10.7866C8.98333 10.7453 8.875 10.6746 8.775 10.5746L0.35 2.14961C0.116666 1.91628 -4.03238e-07 1.62461 -4.18537e-07 1.27461C-4.33836e-07 0.924609 0.125 0.62461 0.375 0.37461C0.625 0.12461 0.916666 -0.000390093 1.25 -0.000390107C1.58333 -0.000390122 1.875 0.12461 2.125 0.37461L9.475 7.72461L16.825 0.374609C17.0583 0.141276 17.3457 0.0246088 17.687 0.0246088C18.029 0.0246088 18.325 0.149609 18.575 0.399609C18.825 0.649609 18.95 0.941276 18.95 1.27461C18.95 1.60794 18.825 1.89961 18.575 2.14961Z" fill="#F9FAF9"/>
                            </svg>

                        </div>
                    </li>
                    
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
        
    </nav>
  </div>
</template>

<script>
export default {
    computed:{
        isShownPopup(){
            return this.$store.state.showLogin;
        }
    },
    methods:{
        showLoginPopup(){
            if(this.$store.state.showLogin == true){
                this.$store.dispatch('isShownPopup',false);
            }else{
                this.$store.dispatch('isShownPopup',true);
            }
        }
    }
}
</script>

<style scoped>

    
    .header-tab{
        background-color: #2B1E1E;
    }
    .nav-link{
        color: #fff;
    }

    .navbar-brand{
        color: #fff;
    }

    .navbar-nav{
        margin-left: auto;
    }
    .nav-item{
        margin-right: 30px;
    }

    .nv-it{
        padding-top: 8px;
    }

    .nv-edit{
        padding-bottom: 14px !important;
        padding-top: 14px !important;
    }

    .icon-pers{
        width: 37px;
        cursor: pointer;
    }

    .shev-icon{
        width: 16px;
        margin-top: 20px;
        cursor: pointer;
    }

</style>