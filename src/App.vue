<template>
  <v-app>

    <main>
      <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
          <v-toolbar color="indigo" dark>
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
            <v-toolbar-title>AW</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <v-text-field solo-inverted label="" clearable append-icon="search" v-model="first"></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn> -->
          </v-toolbar>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>

                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 lg12 mb-3>
                      <v-expansion-panel popout>
                        <v-expansion-panel-content v-for="(user,i) in users" :key="i">
                          <div slot="header" class="body-2">
                            
                            <v-avatar>
                              <img :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 200) + 1}`">
                              <!-- <img src="/static/doc-images/cards/komarychev.jpg" alt="Komarychev"> -->
                            </v-avatar>
                            <span class="pl-3">
                              {{ user.fio }}
                              </span> 
                               <span class="pl-3  caption">{{ user.position }}</span>
                              <span class="pl-3  caption">{{ user.department }}</span>
                            </div>
                          <v-card>
                          
                            <v-card-text class="ct__pad">
                              <v-icon color="teal darken-2">mail</v-icon>
                              <span class="ml-3">
                              <a href="'mailto:'+ user.email"> {{ user.email }} </a>
                              </span>  
                            </v-card-text>
                            <v-card-text class="ct__pad" v-for="(mobilef,i) in user.phone.mobile" :key="i">
                              <v-icon color="purple darken-2">phone</v-icon>
                              <span class="ml-3">
                              {{ mobilef }}
                              </span>  
                            </v-card-text>
                            <v-card-text class="ct__pad" v-for="(innerf,i) in user.phone.inner" :key="i">
                              <v-icon color="red darken-2">local phone</v-icon>
                              <span class="ml-3">
                              {{ innerf }}
                              </span>  
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                    <!-- <v-flex xs12 lg5 offset-lg2>
                      mdi-phone-classic
                      <v-expansion-panel inset>
                        <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                          <div slot="header">Item</div>
                          <v-card>
                            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.</v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex> -->
                  </v-layout>
                </v-container>
                
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
import users from '../static/users.json'
export default {
  data() {
    return {
      users
    }
  },
  name: 'App',
  first: ''
}
</script>
<style lang="stylus">
@import './stylus/main';
</style>
