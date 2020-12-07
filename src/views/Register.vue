<template>
 <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="post" action="#" v-on:submit.prevent="Register" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input v-model="name" type="text" class="form-control form-control-lg border-left-0" id="name" name="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input v-model="email" type="email" class="form-control form-control-lg border-left-0" id="email" name="email" placeholder="E-Mail" required>                           
                           </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input v-model="password" type="password" class="form-control form-control-lg border-left-0" name="password" id="password" placeholder="New Password" required>                        
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input v-model="password_confirmation"  type="password" class="form-control form-control-lg border-left-0" name="password_confirmation" id="password_confirmation" placeholder="Retype Your New Password" required>                        
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="submit" id="signup" class="form-submit" value="Register">
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image"></figure>
                        <a href="#" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
</template>


<script>
export default {
     data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
        Register: function(){
            let name = this.name 
            let email = this.email 
            let password = this.password
            let password_confirmation = this.password_confirmation
            this.$store.dispatch('register', { name, email, password, password_confirmation})
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        }
    }
}
</script>