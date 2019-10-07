<template>
    <div id="app">{{ test }} {{name}}</div>
</template>

<script>
/* eslint-disable */
import {  fromEvent } from 'rxjs'
import {take} from 'rxjs/operators'
import { Observable } from 'rxjs'

  export default {
    data() {
      return {
        test:'vueDemoq',
        name: new Observable.of('张三')
      }
    },
    mounted(){
      fromEvent(document,'click').pipe(
        take(3)//Observable 只发出源 Observable 最初发出的的3个值
      ).subscribe(res => {
        console.log(11)
      })
    }
  }
/* eslint-disable */
</script>

<style>
    #app{
        color: red;
    }
</style>
