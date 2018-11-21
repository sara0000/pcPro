<template>
    <div>
      <ul>
        <li v-for="company in linkCompany">{{company}}</li>
      </ul>
      message from sideBar:{{msg}}
    </div>
</template>

<script>
  import bus from '../../assets/eventBus';
    export default {
        name: "foot",
      props:['linkCompany'],
     data(){
       return {
         msg:''
       }
     },
      mounted(){
          var self=this;
        bus.$on("userEvent",function (msg) {
          self.msg=msg;
          console.log(msg);
        })
      }
    }
</script>

<style scoped>

</style>
