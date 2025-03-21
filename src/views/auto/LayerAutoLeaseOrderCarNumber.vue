<script>
// AF_M02_l011
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicHr,
  },
  setup() {
    const state = reactive({
      carNumberError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          차량번호를<br />
          등록해 주세요
        </PageMainText>
        <PageSubText>
          차량번호 등록을 완료하시면, 최종 인수확인 전화 드리겠습니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <FormList>
          <!-- Case : 차량번호 등록_스크래핑 전 :disabled="false" -->
          <FormListItem
            titleText="차량번호"
            target="#layerAutoLeaseOrderCarNumberInput"
            :disabled="false"
            :class="$style['appoint-wrap']"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError" :disabled="false">
                <InputBlockCell
                  :flexible="true"
                  :class="$style['appoint-wrap-input']"
                >
                  <BasicInput
                    title="차량번호"
                    id="layerAutoLeaseOrderCarNumberInput"
                    :disabled="false"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    :disabled="false"
                    :class="$style['appoint-btn']"
                    >확인</BasicButton
                  >
                </template>
              </InputBlock>

              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : 차량번호 등록_스크래핑 전 :disabled="false" -->

          <!-- Case : 차량번호 등록_스크래핑 후 :disabled="true" -->
          <FormListItem
            titleText="차량번호"
            target="#layerAutoLeaseOrderCarNumberInputCase"
            :disabled="true"
            :class="$style['appoint-wrap']"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError" :disabled="true">
                <InputBlockCell
                  :flexible="true"
                  :class="$style['appoint-wrap-input']"
                >
                  <BasicInput
                    title="차량번호"
                    id="layerAutoLeaseOrderCarNumberInputCase"
                    :disabled="true"
                    defaultValue="123가1234"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    :disabled="true"
                    :class="$style['appoint-btn']"
                    >확인</BasicButton
                  >
                </template>
              </InputBlock>

              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : 차량번호 등록_스크래핑 후 :disabled="true" -->
        </FormList>

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              연락드릴 시간 : 평일 오전 09:00~ 오후 05:30
            </div>
          </li>
        </ul>
      </div>

      <!-- Case : 차량번호 등록_스크래핑 후 -->
      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-body-2 row-margin-item-medium">체크리스트</h3>
        <ul class="reset-list">
          <li class="row-margin-item-medium">
            <CheckBox
              id="layerAutoLeaseOrderCarNumberCheckBox1"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>차량번호가 맞습니까?</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li class="row-margin-item-medium">
            <CheckBox
              id="layerAutoLeaseOrderCarNumberCheckBox2"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>
                차량을 정상적으로 인수 하셨습니까?
              </CheckBoxLabelText>
            </CheckBox>
          </li>
        </ul>
      </section>
      <!-- // Case : 차량번호 등록_스크래핑 후 -->

      <template v-slot:foot>
        <!-- Case : 기본 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- // Case : 기본 -->

        <!-- Case : 차량번호 등록을 통해 진입 시 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- // Case : 차량번호 등록을 통해 진입 시 -->
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoLeaseOrderCarNumber.scss';
</style>
