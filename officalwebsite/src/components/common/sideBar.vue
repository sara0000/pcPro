<template>
    <div style="float: left;">
      <ul ref="sideBar">
        <li>
          link1
          <ul>
            <li>
                  <router-link to="/home/user">
                  link1.1
                </router-link>
              <button v-on:click="sendMsg">同级组件传值</button>
            </li>
            <li><router-link to="/home/profile">link1.2</router-link></li>
            <li><router-link to="/home/posts">link1.3</router-link></li>
            <li><router-link to="/">link1.4</router-link></li>
          </ul>
        </li>
        <li>
          link2
          <ul>
            <li><router-link to="/">link2.1</router-link></li>
            <li><router-link to="/">link2.2</router-link></li>
            <li><router-link to="/">link2.3</router-link></li>
            <li><router-link to="/">link2.4</router-link></li>
          </ul>
        </li>
        <li>
          link3
          <ul>
            <li><router-link to="/">link3.1</router-link></li>
            <li><router-link to="/">link3.2</router-link></li>
            <li><router-link to="/">link3.3</router-link></li>
            <li><router-link to="/">link3.4</router-link></li>
          </ul>
        </li>
        <li>
          link4
          <ul>
            <li><router-link to="/">link4.1</router-link></li>
            <li><router-link to="/">link4.2</router-link></li>
            <li><router-link to="/">link4.3</router-link></li>
            <li><router-link to="/">link4.4</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
  import bus from '../../assets/eventBus'
    export default {
        name: "sideBar",
      methods:{
          sendMsg(){
            bus.$emit("userEvent",'this message is from sideBar')
          }
      }
    }
</script>

<style scoped>

</style>
