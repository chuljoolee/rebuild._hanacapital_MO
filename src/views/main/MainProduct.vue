<script>
// Main_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ProductIcon from '@/components/ui/imageData/ProductIcon.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StickyBar,
    NavTab,
    NavTabButton,
    RoundStatus,
    ProductIcon,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
        dockBar: useUiDockBarStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setApp(true); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);

      store.ui.dockBar.setActive(() => 'product');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();

      store.ui.dockBar.setActive();
    });

    return {
      BASE_URL,
    };
  },
};
</script>

<template>
  <PageContents :classNames="{ head: $style['head'] }">
    <template v-slot:head>
      <PageTextGroup>
        <PageMainText>상품</PageMainText>
      </PageTextGroup>

      <StickyBar>
        <NavTab
          :scroll="true"
          :auto="true"
          :classNames="{ wrap: 'row-margin-none' }"
        >
          <NavTabButton tagName="button" type="button" :active="true"
            >신용대출</NavTabButton
          >
          <NavTabButton tagName="button" type="button">자동차</NavTabButton>
          <NavTabButton tagName="button" type="button"
            >의료기·설비</NavTabButton
          >
          <NavTabButton tagName="button" type="button">제휴</NavTabButton>
        </NavTab>
      </StickyBar>
    </template>

    <!-- Case : 상품이 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">상품을 준비중입니다.</p>
    </div>
    <!-- // Case : 상품이 없을 때 -->

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <!-- 신용대출 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/pig.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                소득이 있다면 쉽고 빠른 신용대출
              </div>
              <div :class="$style['icon-list__title']">e하나신용대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 1억원ㆍ무서류
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/building.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                아파트 소유자를 위한 무담보대출
              </div>
              <div :class="$style['icon-list__title']">행복아파트론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 2억원ㆍ최대 84개월
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/apt.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                최대한도 5천만원 · 최대 84개월
              </div>
              <div :class="$style['icon-list__title']">아파트론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                행복아파트론 미진행 고객용 아파트 대출
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-security.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                차량 소유자를 위한 특별한도
              </div>
              <div :class="$style['icon-list__title']">원큐자동차담보대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 1억원ㆍ최대 84개월
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/vip.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                하나캐피탈 손님을 위한
              </div>
              <div :class="$style['icon-list__title']">우수고객추가대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                중도상환수수료 0원
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/home.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                최대한도 5억원 · 최대 27개월
              </div>
              <div :class="$style['icon-list__title']">e임대주택론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                임대보증금을 담보로 빠르고 간편한 대출
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/real-estate-security.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                최대한도 1억원 · 최대 84개월
              </div>
              <div :class="$style['icon-list__title']">사업자주택담보대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                개인사업자 전용 사업자주택담보대출
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/stock.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                주식매입자금지원 금융서비스
              </div>
              <div :class="$style['icon-list__title']">스탁론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 6억원
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- s: 250225 추가 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/apt.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                최대한도 LTV 최대 70% · 기간 최대 40년
              </div>
              <div :class="$style['icon-list__title']">하나모기지론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                고정금리의 안정성과 변동금리의 혜택
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- e:// 250225 추가 -->
        <!-- // 신용대출 -->

        <!-- 자동차 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-rent.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                부담은 줄이고 편리함을 늘린
              </div>
              <div :class="$style['icon-list__title']">장기렌터카</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/auto-lease.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                다양한 혜택, 편리한 내차 이용
              </div>
              <div :class="$style['icon-list__title']">오토리스</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-pay.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">기간 12개월 ~ 60개월</div>
              <div :class="$style['icon-list__title']">오토할부</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                판매사와 제휴, 합리적인 할부
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-green.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">기간 12개월 ~ 72개월</div>
              <div :class="$style['icon-list__title']">오토론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                신차살때, 합리적인 금리와 한도
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-used.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">스마트한 중고차 구입</div>
              <div :class="$style['icon-list__title']">중고차오토론</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-change.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">원래조건 그대로</div>
              <div :class="$style['icon-list__title']">오토승계</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/direct-autoloan.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">기간 12개월 ~ 60개월</div>
              <div :class="$style['icon-list__title']">원큐다이렉트오토론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                저렴한 금리, 간편한 이용
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <!-- // 자동차 -->

        <!-- 의료기·설비 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/medical.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">일반리스</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/dentist-gray.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">일반할부</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/goods-loan.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">내구재할부</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- // 의료기·설비 -->

        <!-- 제휴 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/hana-insurance-vertical.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">하나손해보험</div>
              <div :class="$style['icon-list__title']">
                에코플러스 자동차보험
              </div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                지금 가입하세요
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/hanacard.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">하나카드</div>
              <div :class="$style['icon-list__title']">
                나만의 원더플한 혜택
              </div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                하나카드 발급하기
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/hyundai.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">현대카드</div>
              <div :class="$style['icon-list__title']">카드 디자인 선택이</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                가능한 법인 카드
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/lotte-card.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">롯데카드</div>
              <div :class="$style['icon-list__title']">
                가전, 골프채, 휴대폰도
              </div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                이제 가볍게 환승!
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/yanadoo.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">야나두</div>
              <div :class="$style['icon-list__title']">
                하루 10분, 야나두 영어를
              </div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                렌탈 이용해 보세요!
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/lomad.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">로마드</div>
              <div :class="$style['icon-list__title']">고품격 가구들과</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                하이엔드 라이프스타일을 만나보세요
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/torder.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">티오더</div>
              <div :class="$style['icon-list__title']">태블릿 메뉴판은</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                국민 메뉴판 티오더!
              </div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- // 제휴 -->
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainProduct.scss';
</style>
