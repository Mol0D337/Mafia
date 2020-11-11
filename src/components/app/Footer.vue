<template>
    <div class="footer">
        <div class="footer__left">
            MAFIA
        </div>
        <div class="footer__right">
            ONLINE
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        background: #2f363c;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "chineserocksrg";
    }

    .footer__left {
        font-size: 100px;
        color: #fefefe;
        letter-spacing: 20px;
        width: 400px;
        text-align: center;
    }

    .footer__right {
        font-size: 50px;
        color: #f40200;
        letter-spacing: 10px;
        width: 400px;
        text-align: center;
    }
</style>
