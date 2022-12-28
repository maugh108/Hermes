<template>
    <v-container>
        <v-card class="mx-auto" max-width="344" >
            <v-card-text>
              <div>Driver</div>
              <p class="text-h4 text--primary"> {{ order.driver }} </p>
              <div>Trailer</div>
              <div class="text-h4 text--primary"> {{ order.trailer }} </div>
              <div>Truck</div>
              <div class="text-h4 text--primary"> {{ order.truck }} </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true" >
                Obtener direccion
              </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
              <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary"> 
                  </p>
                  <p> Desde {{ order.origen }} a {{order.destino}}</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false" >
                    Cerrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
    </v-container>
</template>

<script>
    export default {
        name:'OrderCard',
        props:{
            order: Object
        },
        data(){
            return{
                reveal:false
            }
        }
    }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>