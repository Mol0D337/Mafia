<template>
  <div class="">
    <form @submit.prevent="lol">
      <input type="text" class="message">
      <button>Send</button>
      <hr>
      <div class="panel"></div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "chat",
    methods : {
      lol () {
        console.log('12124124');
        var message = document.querySelector('.message');
        var btn = document.querySelector('button');
        var panel = document.querySelector('.panel');

        var conn = new WebSocket('ws://127.0.0.1:8777');
        conn.onopen = function(e) {
          console.log("Connection established!");
        };
        conn.onmessage = function(e) {
          console.log(e.data);
          panel.innerHTML += e.data + '<br>';
        };
        //---------------------------
        btn.onclick = function(){
          var msg = message.value;
          conn.send(msg);
        }
      },
    },
  }
</script>

<style scoped>

</style>
