import { useState } from 'react';
import { Transition } from 'react-transition-group';

export const CreditCardForm = () => {
  const currentCardBackground = Math.floor(Math.random()* 25 + 1)
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const minCardYear =new Date().getFullYear()
  
  return   <div className="wrapper" id="app">
  <div className="card-form">
    <div className="card-list">
      <div className="card-item" v-bind:className="{ '-active' : isCardFlipped }">
        <div className="card-item__side -front">
          <div className="card-item__focus" v-bind:className="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div>
          <div className="card-item__cover">
            <img
            v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" className="card-item__bg"/>
          </div>
          
          <div className="card-item__wrapper">
            <div className="card-item__top">
              <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip"/>
              <div className="card-item__type">
                <Transition name="slide-fade-up">
                  <img src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" alt="" className="card-item__typeImg"/>
                </Transition>
              </div>
            </div>
            <label for="cardNumber" className="card-item__number" ref="cardNumber">
              <template v-if="getCardType === 'amex'">
               <span v-for="(n, $index) in amexCardMask" :key="$index">
                <transition name="slide-fade-up">
                  <div
                    className="card-item__numberItem"
                    v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
                  >*</div>
                  <div className="card-item__numberItem"
                    :className="{ '-active' : n.trim() === '' }"
                    :key="$index" v-else-if="cardNumber.length > $index">
                    {{cardNumber[$index]}}
                  </div>
                  <div
                    className="card-item__numberItem"
                    :className="{ '-active' : n.trim() === '' }"
                    v-else
                    :key="$index + 1"
                  >{{n}}</div>
                </transition>
              </span>
              </template>

              <template v-else>
                <span v-for="(n, $index) in otherCardMask" :key="$index">
                  <transition name="slide-fade-up">
                    <div
                      className="card-item__numberItem"
                      v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''"
                    >*</div>
                    <div className="card-item__numberItem"
                      :className="{ '-active' : n.trim() === '' }"
                      :key="$index" v-else-if="cardNumber.length > $index">
                      {{cardNumber[$index]}}
                    </div>
                    <div
                      className="card-item__numberItem"
                      :className="{ '-active' : n.trim() === '' }"
                      v-else
                      :key="$index + 1"
                    >{{n}}</div>
                  </transition>
                </span>
              </template>
            </label>
            <div className="card-item__content">
              <label for="cardName" className="card-item__info" ref="cardName">
                <div className="card-item__holder">Card Holder</div>
                <transition name="slide-fade-up">
                  <div className="card-item__name" v-if="cardName.length" key="1">
                    <transition-group name="slide-fade-right">
                      <span className="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{{n}}</span>
                    </transition-group>
                  </div>
                  <div className="card-item__name" v-else key="2">Full Name</div>
                </transition>
              </label>
              <div className="card-item__date" ref="cardDate">
                <label for="cardMonth" className="card-item__dateTitle">Expires</label>
                <label for="cardMonth" className="card-item__dateItem">
                  <transition name="slide-fade-up">
                    <span v-if="cardMonth" v-bind:key="cardMonth">{{cardMonth}}</span>
                    <span v-else key="2">MM</span>
                  </transition>
                </label>
                /
                <label for="cardYear" className="card-item__dateItem">
                  <transition name="slide-fade-up">
                    <span v-if="cardYear" v-bind:key="cardYear">{{String(cardYear).slice(2,4)}}</span>
                    <span v-else key="2">YY</span>
                  </transition>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-item__side -back">
          <div className="card-item__cover">
            <img
            v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" className="card-item__bg">
          </div>
          <div className="card-item__band"></div>
          <div className="card-item__cvv">
              <div className="card-item__cvvTitle">CVV</div>
              <div className="card-item__cvvBand">
                <span v-for="(n, $index) in cardCvv" :key="$index">
                  *
                </span>

            </div>
              <div className="card-item__type">
                  <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" className="card-item__typeImg">
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-form__inner">
      <div className="card-input">
        <label for="cardNumber" className="card-input__label">Card Number</label>
        <input type="text" id="cardNumber" className="card-input__input" v-mask="generateCardNumberMask" v-model="cardNumber" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardNumber" autocomplete="off">
      </div>
      <div className="card-input">
        <label for="cardName" className="card-input__label">Card Holders</label>
        <input type="text" id="cardName" className="card-input__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autocomplete="off">
      </div>
      <div className="card-form__row">
        <div className="card-form__col">
          <div className="card-form__group">
            <label for="cardMonth" className="card-input__label">Expiration Date</label>
            <select className="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
              <option value="" disabled selected>Month</option>
              <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
                  {{n < 10 ? '0' + n : n}}
              </option>
            </select>
            <select className="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
              <option value="" disabled selected>Year</option>
              <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                  {{$index + minCardYear}}
              </option>
            </select>
          </div>
        </div>
        <div className="card-form__col -cvv">
          <div className="card-input">
            <label for="cardCvv" className="card-input__label">CVV</label>
            <input type="text" className="card-input__input" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autocomplete="off">
          </div>
        </div>
      </div>

      <button className="card-form__button">
        Submit
      </button>
    </div>
  </div>
  
  <a href="https://github.com/muhammederdem/credit-card-form" target="_blank" className="github-btn">
    See on GitHub
  </a>
</div>
};
