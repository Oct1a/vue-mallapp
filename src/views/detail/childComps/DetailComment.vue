<template>
<div class="buyer-comment">
        <div class="box-title">
            买家评价 {{comment.length}} | 销量 {{goodsBuyNum}}
          <a href="" class="comment-more">></a>
        </div>
        <div class="comment-tag">
          <div class="tag-item" v-for="(item,index) in commentTag" :key="index">
              <span>{{item.tag}}({{item.num}})</span>
          </div>
        </div>
        <div class="buyer-item" v-for="(item,index) in comment" :key="index">
            <div class="buyer-info">
              <img :src="item.comment_body.user_img" alt="">
              <span>{{item.comment_body.user_name}}</span>
            </div>
            <div class="comment">
                <p>物流很快{{item.comment_body.content}}</p>
            </div>
            <div class="date">
                <span>{{item.comment_body.modified_time | getCommentDate }}</span>
                <span>颜色:默认</span>
                <span>尺码:默认</span>
            </div>
        </div>
    </div>
</template>

<script>

import {dateFormat} from 'common/util.js'

export default {
  name:'DetailComment',
  props: {
    comment: {
      type: Array,
      default: []
    },
    commentTag:{
      type:Array,
      default:()=>[
        {tag:'有图片',num:214},
        {tag:'发货快',num:129},
        {tag:'颜色正',num:126},
        {tag:'鞋型好',num:124},
        {tag:'不磨脚',num:123},
        {tag:'图片描述一致',num:122}
      ]
    },
    goodsBuyNum:0
  },
  filters: {
    getCommentDate(timemap) {
        return dateFormat(timemap*1000,'YYYY-MM-DD')
    }
  },
}
</script>

<style scoped>
 /* 买家评论 */
  .buyer-comment{
    padding: 10px;
  }
  .buyer-comment .box-title{
     color: rgba(0,0,0,0.5);
    font-size: 14px;
  }
  .comment-more{
    float:right;
    font-size:14px;
    font-weight: bold;
    color: #ccc;
    margin-right: 10px;
  }
  .comment-tag{
    margin-top:10px;
    font-size: 14px;
  }
  .tag-item{
    display: inline-block;
    padding: 7px;
    margin: 4px;
    background: #ffe8ee;
    color: var(--color-high-text);
  }
  .buyer-item{
    padding-top: 20px;
    /* border-top: 1px solid #ccc; */
  }
  .buyer-item .buyer-info img{
    width: 40px;
    height:40px;
    border-radius: 50%;
    vertical-align: middle;
  }
    .buyer-item .buyer-info span{
      font-size: 16px;
      margin-left: 10px;
    }
    .comment{
      margin:15px 0px 15px 0;
    }
    .date{
      font-size: 14px;
    }
    .date span:not(:first-child){
      margin:0px 9px;
    }
</style>