<template>
  <div id="row justify-content-md-center">
    <nav id="main-navigation">
      <div class="pull-left">
        <ul class="outer-menu">
          <!-- 대메뉴 -->
          <li class="outer-menu-item"
              v-on:mouseover="isShow= true"
              v-on:mouseleave="isShow= false"
          >
            <span class="menu-title">About</span>
            <!-- 소메뉴 -->
            <ul class="inner-menu" v-if="isShow">
              <li class="inner-menu-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/complain">Complain</router-link>
              </li>
              <li class="inner-menu-item">
                <router-link to="/register">회원가입</router-link>
              </li>
            </ul>
          </li>
          <!-- 대메뉴 -->
          <li class="outer-menu-item"
              v-on:mouseover="isShow02= true"
              v-on:mouseleave="isShow02= false"
          >
            <span class="menu-title">상품정보</span>
            <!-- 소메뉴 -->
            <ul class="inner-menu" v-if="isShow02">
              <li class="inner-menu-item">
                <router-link to="/infocup">컵소개</router-link>
              </li>
            </ul>
          </li>
          <!-- 대메뉴 -->
          <li class="outer-menu-item"
              v-on:mouseover="isShow03= true"
              v-on:mouseleave="isShow03= false"
          >
            <span class="menu-title">찾아오시는길</span>
            <!-- 소메뉴 -->
            <ul class="inner-menu" v-if="isShow03">
              <li class="inner-menu-item">
                <router-link to="#">데이터</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="pull-right">
        <div class="search-bar">
          <form>
            <input type="text" class="input-search"/>
            <input type="submit" class="input-search-submit" value="검색"/>
          </form>
        </div>
      </div>
    </nav>
    <div class="col-me-8">
      <article>
        <div class="article-header">
          <h1 class="article-title">HTML5 개요와 활용</h1>
          <p class="article-date">2013년 02월 14일</p>
        </div>
        <div class="article-body">
          <img src="@/assets/images/macintosh.png"/>
          <br/>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo justo ac lorem pretium vitae rhoncus lectus ullamcorper.
            Aliquam facilisis euismod diam sollicitudin commodo. Nunc sagittis
            sapien venenatis lorem vestibulum cursus pellentesque mi sodales.
            Donec pellentesque hendrerit turpis, vitae tempor nibh ultricies at.
            Aliquam consequat rutrum erat, vel sodales tellus sagittis at. Proin
            sollicitudin augue eu augue vehicula vitae bibendum odio porta.
            Aliquam elit arcu, venenatis in imperdiet ut, scelerisque non dolor.
            Donec in vulputate tortor. Fusce egestas rutrum mi quis ultricies.
            Vivamus blandit augue ac felis ullamcorper consectetur. Curabitur
            pretium fringilla neque, vitae cursus massa auctor vitae. Integer
            non massa sit amet lacus accumsan blandit. Vivamus fermentum tellus
            at justo iaculis eu tempus lorem venenatis. Suspendisse quis eros
            consectetur tellus posuere commodo. In hac habitasse platea
            dictumst.
          </p>
          <br/>
          <p>
            Praesent orci quam, ornare sed scelerisque ac, porta a justo.
            Pellentesque quis magna sed magna vehicula semper ac ut enim. Duis
            ut mattis ligula. Mauris at sem elit. Vestibulum justo tortor,
            malesuada non tincidunt quis, feugiat ut metus. Maecenas varius
            neque ut diam ultrices scelerisque. Praesent lectus massa, tincidunt
            vel adipiscing non, vehicula ut magna. Cras quis lacinia ipsum. Sed
            consequat consectetur volutpat. Integer sed tortor risus. Donec
            accumsan ante vel justo porttitor volutpat.
          </p>
        </div>
      </article>
      <article>
        <div class="article-header">
          <h1 class="article-title">HTML5 응용과 실습</h1>
          <p class="article-date">2013년 02월 17일</p>
        </div>
        <div class="article-body">
          <img src="@/assets/images/iphone.png"/>
          <br/>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo justo ac lorem pretium vitae rhoncus lectus ullamcorper.
            Aliquam facilisis euismod diam sollicitudin commodo. Nunc sagittis
            sapien venenatis lorem vestibulum cursus pellentesque mi sodales.
            Donec pellentesque hendrerit turpis, vitae tempor nibh ultricies at.
            Aliquam consequat rutrum erat, vel sodales tellus sagittis at. Proin
            sollicitudin augue eu augue vehicula vitae bibendum odio porta.
            Aliquam elit arcu, venenatis in imperdiet ut, scelerisque non dolor.
            Donec in vulputate tortor. Fusce egestas rutrum mi quis ultricies.
            Vivamus blandit augue ac felis ullamcorper consectetur. Curabitur
            pretium fringilla neque, vitae cursus massa auctor vitae. Integer
            non massa sit amet lacus accumsan blandit. Vivamus fermentum tellus
            at justo iaculis eu tempus lorem venenatis. Suspendisse quis eros
            consectetur tellus posuere commodo. In hac habitasse platea
            dictumst.
          </p>
          <br/>
          <p>
            Praesent orci quam, ornare sed scelerisque ac, porta a justo.
            Pellentesque quis magna sed magna vehicula semper ac ut enim. Duis
            ut mattis ligula. Mauris at sem elit. Vestibulum justo tortor,
            malesuada non tincidunt quis, feugiat ut metus. Maecenas varius
            neque ut diam ultrices scelerisque. Praesent lectus massa, tincidunt
            vel adipiscing non, vehicula ut magna. Cras quis lacinia ipsum. Sed
            consequat consectetur volutpat. Integer sed tortor risus. Donec
            accumsan ante vel justo porttitor volutpat.
          </p>
        </div>
      </article>
    </div>

    <!--      <section id="main-section">-->

    <!--      </section>-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShow: false,
      isShow02: false,
      isShow03: false
    }
  }
}
</script>
