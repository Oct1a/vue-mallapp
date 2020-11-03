<template>
    <div id="tabBar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name:'tabBar',
}
</script>

<style>
#tabBar{
    display: flex;
    height: 49px;
    /* line-height: 49px; */

    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;

    background:rgb(250, 250, 250);
    box-shadow:1px -3px 5px #f6f6f6;
  }

</style>