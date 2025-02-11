/* * Licensed to the Apache Software Foundation (ASF) under one * or more contributor license agreements. See the NOTICE file * distributed with this work for additional information * regarding
copyright ownership. The ASF licenses this file * to you under the Apache License, Version 2.0 (the * "License"); you may not use this file except in compliance * with the License. You may obtain a
copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, * software distributed under the License is distributed on an * "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY * KIND, either express or implied. See the License for the * specific language governing permissions and limitations * under the License. */

<template>
  <el-form :model="formData" :rules="rules" :inline="inline" :label-position="labelPosition" :class="(inline ? 'demo-form-inline' : '', 'form_style')">
    <el-form-item v-for="item of formItem" :key="item.itemID" :label="$t(item.label)" :prop="item.itemID" :style="{ width: item.labelWidth }">
      <el-input
        v-if="item.type === 'INPUT'"
        v-model="formData[item.itemID]"
        :size="item.size"
        :style="{ width: item.width }"
        :placeholder="$t(item.placeholder)"
        :disabled="item.disabled"
        @blur="getFormData"
        @keyup.enter="getFormData"
        :suffix-icon="item.suffixIcon"
        :prefix-icon="item.prefixIcon"
      >
      </el-input>
      <el-input :size="item.size" v-if="item.type === 'TEXT'" v-model="formData[item.itemID]" class="input-inner" :suffix-icon="item.suffixIcon" :prefix-icon="item.prefixIcon" readonly> </el-input>
      <el-date-picker
        v-model="formData[item.itemID]"
        v-if="item.type === 'DATE'"
        :size="item.size"
        prefix-icon=""
        range-separator="~"
        type="datetimerange"
        :start-placeholder="item.startPlaceholder"
        :end-placeholder="item.endPlaceholder"
        @blur="item.Event"
      >
      </el-date-picker>
    </el-form-item>
    <input id="hiddenText" type="text" style="display: none" />
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElDatePicker } from 'element-plus';
import { reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
export default {
  name: 'FormTable',
  props: {
    form: Array,
  },
  setup(props, { emit }) {
    const { t } = useI18n();
    const formObj = reactive(props.form);
    let prop = {};
    const requiredArry = formObj.formItem.filter((item) => item.required);
    if (requiredArry.length > 0) {
      requiredArry.forEach((item) => {
        prop[item.itemID] = [
          {
            required: true,
            message: t(item.message),
            trigger: item.type === 'INPUT' ? 'blur' : 'change',
          },
        ];
      });
    }
    const rules = reactive(prop);
    function getFormData() {
      emit('serchFormData');
    }
    return {
      ...toRefs(formObj),
      rules,
      getFormData,
    };
  },
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElDatePicker,
  },
};
</script>

<style lang="scss" scoped>
.demo-form-inline {
  display: flex;
}
</style>
<style lang="scss">
.form_style {
  .el-form-item__content {
    vertical-align: middle;
    line-height: 30px;
  }
}
.input-inner {
  .el-input__inner {
    border: none !important;
  }
}
</style>
