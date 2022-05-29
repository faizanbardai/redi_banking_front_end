<template>
    <div>
        <v-card elevation="0">
            <v-card-text class="pb-0">
                <v-row>
                    <v-col cols="3">
                        <v-avatar size="80px">
                            <img
                                alt="Avatar"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQG3OVvfiw2B3w/profile-displayphoto-shrink_400_400/0/1614021601073?e=1659571200&v=beta&t=9_s599euRAwzu3B8N2uBs76yMxXTchTQYjFxA1ywDlY"
                            />
                        </v-avatar>
                    </v-col>
                    <v-col cols="9">
                        <h1>Faizan Bardai</h1>
                        Full stack developer
                        <v-chip-group active-class="primary--text">
                            <v-chip v-for="tag in tags" :key="tag">
                                {{ tag }}
                            </v-chip>
                        </v-chip-group>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-title class="py-0">Python intermediate final project</v-card-title>

            <v-card-text class="py-0">
                <h4>Welcome to my banking application</h4>

                <p>
                    This is a simple banking application that allows you to create an account, deposit money, withdraw
                    money, and view your account balance.
                </p>
            </v-card-text>
            <v-card-actions class="py-0">
                <v-spacer></v-spacer>
                <v-btn rounded v-if="form === 'register'" @click="form = 'login'"> Already have an account </v-btn>
                <v-btn rounded v-if="form === 'login'" @click="form = 'register'"> Create account with us </v-btn>
            </v-card-actions>
        </v-card>
        <LoginUser v-if="form === 'login'"></LoginUser>
        <RegisterUser v-if="form === 'register'"></RegisterUser>
    </div>
</template>
<script>
import LoginUser from './LoginUser.vue';
import RegisterUser from './RegisterUser.vue';
export default {
    data() {
        return {
            tags: ['Python', 'JavaScript'],
            form: 'login',
        };
    },
    components: { LoginUser, RegisterUser },
};
</script>
<style></style>
