<template>
  <v-app>
    <v-navigation-drawer
        :value="navigationDrawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
        
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="cursor-pointer">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      ref="appBar"
      id="appBar"
      
    >
      <v-app-bar-nav-icon @click="ChangeDrawer()" />
      <v-toolbar-title class="cursor-pointer" @click="$router.push('/')">{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods:{
    ChangeDrawer(){
      this.navigationDrawer = !this.navigationDrawer
    },
  },
  data () {
    return {
      clipped: true,
      fixed: true,
      navigationDrawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Ordenes',
          to: '/ordenes'
        },
        {
          icon: 'mdi-truck',
          title: 'Camiones',
          to: '/camiones',
        },
        {
          icon: 'mdi-map-marker',
          title: 'Direcciones',
          to: '/direcciones'
        },
        {
          icon: 'mdi-card-account-details',
          title: 'Conductores',
          to: '/conductores'
        }
      ],
      miniVariant: false,
      title: 'Lucy'
    }
  },
};
</script>


<style>
  ::-webkit-scrollbar{
    width: 1px;
  }
  ::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px blue;
    border-radius: 10px;
  }
</style>