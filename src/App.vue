<template>
  <v-app>
    <main>
      <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>AW</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <v-text-field solo-inverted label="" clearable append-icon="search" v-model="first" @keyup="userSearch">
              </v-text-field>
            </v-flex>
            <v-spacer/>
          </v-toolbar>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 lg12 mb-3>
                      <v-expansion-panel popout>
                        <v-expansion-panel-content v-for="user in users" :key="user.id">
                          <div slot="header" class="body-2">
                            <v-avatar v-if="!(user.img === undefined || user.img === '')">
                              <img :src="user.img" />
                            </v-avatar>
                            <v-icon x-large dark v-else>account_circle</v-icon>
                            <span class="pl-3 title">
                                  {{ user.first__name }}&nbsp;{{ user.last__name }}
                                </span>
                          </div>
                          <v-card>
                            <v-layout row dark>
                              <v-flex xs12 sm12>
                                <v-card>
                                  <v-list two-line>
                                    <v-list-tile>
                                      <v-list-tile-action>
                                      </v-list-tile-action>
                                      <v-list-tile-content>
                                        <v-list-tile-title>{{ user.position }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ user.department }}</v-list-tile-sub-title>
                                      </v-list-tile-content>
                                      <v-list-tile-action>
                                        <v-icon></v-icon>
                                      </v-list-tile-action>
                                    </v-list-tile>
                                    <v-list-tile @click="emptyMethod" v-for="(mobilef, index) in user.phone.mobile" :key="index+Math.random()">
                                      <v-list-tile-action>
                                        <v-icon color="orange darken-4">phone</v-icon>
                                      </v-list-tile-action>
                                      <v-list-tile-content>
                                        <v-list-tile-title>{{ mobilef.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/,'+38 ($1)$2-$3-$4') }}</v-list-tile-title>
                                        <v-list-tile-sub-title>Мобильный</v-list-tile-sub-title>
                                      </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile @click="emptyMethod" v-for="(innerf, index) in user.phone.inner" :key="index+Math.random()">
                                      <v-list-tile-action>
                                        <v-icon color="green darken-1">phone_in_talk</v-icon>
                                      </v-list-tile-action>
                                      <v-list-tile-content>
                                        <v-list-tile-title>{{ innerf }}</v-list-tile-title>
                                        <v-list-tile-sub-title>Внутренний</v-list-tile-sub-title>
                                      </v-list-tile-content>
                                      <v-list-tile-action>
                                        <v-icon></v-icon>
                                      </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider inset></v-divider>
                                    <v-list-tile @click="emptyMethod" v-for="(email, index) in user.email" :key="index+Math.random()">
                                      <v-list-tile-action>
                                        <v-icon color="teal darken-1">mail</v-icon>
                                      </v-list-tile-action>
                                      <v-list-tile-content>
                                        <v-list-tile-title>{{ email }}</v-list-tile-title>
                                        <v-list-tile-sub-title>Рабочий</v-list-tile-sub-title>
                                      </v-list-tile-content>
                                    </v-list-tile>
                                  </v-list>
                                </v-card>
                              </v-flex>
                            </v-layout>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn slot="activator" flat color="blue-grey darken-3" v-for="link in links" @click="dialog=true"
                              :key="link">
                              <v-icon>{{ link }}</v-icon>
                              </v-btn>
                          </v-card-actions>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                  </v-layout>
                 <v-alert outline color="error" icon="info"
                  :value="!users.length"
                  transition="scale-transition"
                 >
                 Измените запрос!
                </v-alert>
                </v-container>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>

 <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">

            <v-toolbar-title>Карточка</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <!-- <v-btn dark flat @click.native="dialog = false">Сохранить</v-btn> -->
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-flex xs12 sm6 offset-sm3>
          <v-card-text>
             <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Имя"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Item"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>


    <v-btn
      @click="dialog=false"
      :disabled="!valid"
    >
сохранить
    </v-btn>

  </v-form>
          </v-card-text>
          </v-flex>
        </v-card>
      </v-dialog>



    </main>
  </v-app>
</template>

<script>
import users from '../static/users.json'
export default {
  data() {
    return {
      users,
      first: '',
      links: ['edit'],
      dialog: false,
      valid: true
    }
  },
  name: 'App',
  methods: {
    userSearch(e) {
      const searchWord = e.target.value.toLowerCase()
      this.users = users.filter(
        user =>
          user.last__name.toLowerCase().includes(searchWord) ||
          user.first__name.toLowerCase().includes(searchWord) ||
          user.department.toLowerCase().includes(searchWord) ||
          user.unit.toLowerCase().includes(searchWord) ||
          user.position.toLowerCase().includes(searchWord) ||
          user.email
            .toString()
            .toLowerCase()
            .includes(searchWord) ||
          Object.values(user.phone)
            .toString()
            .includes(searchWord)
      )
    },
    userClear() {
      this.users = users
    },
    emptyMethod() {
      console.log('click!!!')
    },
    editItem() {
      console.log()
    }
  },
  watch: {
    first(val) {
      if (val === null) {
        this.users = users
      }
    }
  }
}
</script>

<style>
</style>
