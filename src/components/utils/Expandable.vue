<template>
    <span>
      <span @click="open=!open" :class="linkCss">
        <slot name="label">More...</slot>
        <i :class="iconCss"></i>
      </span>
      <collapse v-model="open">
        <slot></slot>
      </collapse>
    </span>
</template>
<script lang="ts">
import Vue from 'vue'
import {Collapse} from 'uiv'
import { Component, Prop } from "vue-property-decorator"

@Component({components:{Collapse}})
export default class Expandable extends Vue {
  @Prop({
    type: Object as () => {open: boolean, iconOpen: string, iconClosed: string, linkCss: string},
      default: () => {
        return {open: false}
      }
  })
  options!: any

  open: boolean = !!this.options.open
  iconOpen: string = this.options.iconOpen || 'glyphicon-chevron-down glyphicon'
  iconClosed: string = this.options.iconClosed || 'glyphicon-chevron-right glyphicon'
  linkCss: string =this.options.linkCss || ''

  get iconCss (): string {
      return this.open ? this.iconOpen : this.iconClosed
    }
}

</script>
