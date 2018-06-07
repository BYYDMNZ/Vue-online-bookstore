<template>
    <div class="tan">
        <div class="chuan">
            <p>{{txt}}</p>
            <button class="btn btn-block btn-warning" @click="closed">关闭</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        props:['txt'],
        methods:{
          closed(){
            this.$emit("closedTheAlert")
          }
        }
    }
</script>

<style scoped>
.tan{
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100000;
}
.chuan{
  width: 40%;
  height: 40%;
  padding-bottom: 1rem;
  border: 1px solid #eee;
  box-shadow: 8px 8px 5px #333;
  z-index: 107000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#eee;
  border-radius: 0.6rem;
  text-align: center;
  padding: 40px;
}
  p{
    padding: 0;
    margin-top: 20px;
    font-size: 25px;
    font-weight: bold;
    color:indigo;
    margin-bottom: 70px;
  }
  button{
  }
</style>
