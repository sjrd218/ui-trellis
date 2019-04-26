<template>
  <span>
      <span class="configpair" v-if="prop.type==='Boolean'">
        <template v-if="value==='true' ||value===true">
          <span :title="prop.desc">{{prop.title}}:</span>
          <span :class="prop.options && prop.options['booleanTrueDisplayValueClass']||'text-success'">yes</span>
        </template>
      </span>
      <span class="configpair" v-else-if="prop.type==='Integer'">
        <span :title="prop.desc">{{prop.title}}:</span>
        <span style="font-family:Courier,monospace">{{value}}</span>
      </span>
      <span class="configpair" v-else-if="['Options', 'Select','FreeSelect'].indexOf(prop.type)>=0">
        <span :title="prop.desc">{{prop.title}}:</span>
        <template v-if="prop.type!=='Options'">
          <span class="text-success">{{prop.selectLabels && prop.selectLabels[value] || value}}</span>
        </template>
        <template v-else>
          <span v-if="typeof value==='string'">
          <span v-for="optval in value.split(/, */)" :key="optval" class="text-success">
            <i class="glyphicon glyphicon-ok-circle"></i>
            {{prop.selectLabels && prop.selectLabels[optval] || optval}}
          </span>
          </span>
          <span v-else-if="value.length>0">
            <span v-for="optval in value" :key="optval" class="text-success">
            <i class="glyphicon glyphicon-ok-circle"></i>
            {{prop.selectLabels && prop.selectLabels[optval] || optval}}
          </span>
          </span>
        </template>
      </span>
      <span v-else class="configpair">
        <span :title="prop.desc">{{ prop.title }}:</span>
        <span class="text-success" v-if="prop.options && prop.options['displayType']==='PASSWORD'">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
        <template v-else-if="prop.options && prop.options['displayType']==='CODE'">
          <expandable :options="{linkCss:'expanderLink text-muted'}">
            <template slot="label">{{value.split(/\r?\n/).length}} lines</template>
             <ace-editor
              v-model="value"
              :lang="prop.options['codeSyntaxMode']"
              height="200"
              width="100%"
              :readOnly="true"
            />
          </expandable>
        </template>
        <template v-else-if="prop.options && prop.options['displayType']==='MULTI_LINE'">
          <expandable :options="{linkCss:'expanderLink text-muted'}">
            <template slot="label">{{value.split(/\r?\n/).length}} lines</template>
            <ace-editor
              v-model="value"
              height="200"
              width="100%"
              :readOnly="true"
            />
          </expandable>
        </template>
        <span class="text-success" v-else>{{ value }}</span>
      </span>
    </span>
</template>
<script lang="ts">
import Vue from 'vue'
import Expandable from '../utils/Expandable.vue'
import AceEditor from '../utils/AceEditor.vue'
export default Vue.extend({
  components:{
    Expandable,
    AceEditor
  },
  props:{
    value:{
      type:String,required:true
    },
    prop:{
      type:Object,required:true
    }
  }
})
</script>
