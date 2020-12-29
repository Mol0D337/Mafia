<template>
  <div class="">
    <form @submit.prevent="lol">
      <input type="text" class="message" >
      <button>Send</button>
      <hr>
      <div class="panel" ></div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "chat",

    data () {
      return {
        connection: null
      }
    },

    mounted () {
      this.connection = new WebSocket('ws://127.0.0.1:8777');
      console.log(this.connection, 'conn');
    },

    methods : {
      lol () {
        const message = document.querySelector('.message');
        const btn = document.querySelector('button');
        const panel = document.querySelector('.panel');

        // var conn = new WebSocket('ws://127.0.0.1:8777');
        const conn = this.connection;
        console.log(conn, 'conn');
        // console.log(this.connection, 'conn');
        conn.onopen = function() {
          console.log("Connection established!");
        //  кнопка на открытие чата
        };
        conn.onmessage = function(e) {
          console.log(e.data);
          panel.innerHTML += e.data + '<br>';
        };
        //---------------------------
        btn.onclick = function(){
          const msg = message.value;
          console.log(this.connection, 'error');
          conn.send(msg);
          console.log(msg);
        }
      }
    },
  }
</script>

<style scoped>

</style>
