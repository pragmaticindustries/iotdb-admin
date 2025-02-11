/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ref } from 'vue';
import i18n from '@/i18n/index';
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
function useLangSwitch() {
  const langMap = { cn: 0, en: 1 };
  const lang = langMap[localStorage.getItem('lang') || 'cn'];
  const langIndex = ref(lang);
  const handleLangCommand = (val) => {
    const langIndexMap = {
      0: 'cn',
      1: 'en',
    };
    localStorage.setItem('lang', langIndexMap[val]);
    langIndex.value = +val;
    i18n.global.locale = [zhLocale.name, enLocale.name][val];
  };
  return {
    langIndex,
    handleLangCommand,
  };
}

export default useLangSwitch;
