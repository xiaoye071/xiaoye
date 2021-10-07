$(function () {
  /*
   * 垂直滚动事件
   */
  //	var swiper = new Swiper('.swiper-container', {
  //      pagination: '.swiper-pagination',
  //      direction: 'vertical',
  //      slidesPerView: 1,
  //      paginationClickable: true,
  //      mousewheelControl: true
  // });

  /*
   * 让页面滚动更有趣
   */
  if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 150,
      mobile: true,
      live: true,
    })

    wow.init()
  }

  /*
   * 返回顶部
   */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $(".toTop").fadeIn()
    } else {
      $(".toTop").fadeOut()
    }
  })

  $(".toTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    )
  })

  /*
   * 滚动导航
   */

  $("#nav").onePageNav()
})
