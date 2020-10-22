$(document).ready(function() {
  //modules
  if(typeof(obSlider) == "object"){
    obSlider.init();
  }
  if(typeof(obTabs) == "object"){
    obTabs.init();
  }
  //end

  $( "body" ).on("click", ".js-toggle-down", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideDown( "fast");
      if (target.css("display") !== "none" && $(this).attr("data-static") != "true") {
        $(this).addClass("d-none");
        $(this).removeClass("d-flex");
      }
  });
  $( "body" ).on("click", ".js-toggle-up", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideUp( "fast" );
    $(this).parents(".js-toggle-wrapper").first().find(".js-toggle-down")
      .addClass("d-flex")
      .removeClass("d-none");
  });
  $( "body" ).on("click", ".js-toggle", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideToggle( "fast");
    $(this).toggleClass("active");
  });

  //toggle class
  $("body").on("click", ".js-toggle_class", function(e){
    e.preventDefault();
    let $target = [],
        targetSelectors = $(this).attr("data-target").split(','),
        className = $(this).attr("data-class"),
        $ctx = $(this);

    if ($(this).attr("data-is_parent") == "true") {
      targetSelectors.forEach(function (selector) {
        $target.push($(this).parents(selector).first());
      });
    } else {
      targetSelectors.forEach(function (selector) {
        $target.push($(selector));
      });
    }

    $target.forEach(function ($targetItem) {
      if ($targetItem.hasClass(className)) {
        $targetItem.removeClass(className);
        $ctx.removeClass(className);

      } else {
        $targetItem.addClass(className);
        $ctx.addClass(className);
      }
    });
  })
  //end
  //animate input
  $('input')
      .focusin(function(){
        $(this).parents('.form-group').first().addClass('focused');
      })
      .focusout(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).parents('.form-group').first().removeClass('focused');
        }
      });
  $("body").find("input").each(function () {
    if ($(this).val() !== "") {
      $(this).parents('.form-group').first().addClass('focused');
    }
  })
  //end
  //popup
  $("body").on("click", "[data-popup-open]", function(e){
    e.preventDefault();
    var $target = $($(this).attr("data-popup-open"));
    if($target.length > 0){
      $(".popup").hide();
      $("body").css("overflow", "hidden");
      $target.fadeIn();
      if($target[0].hasAttribute("data-animate")){
        $target.find(".popup-content").addClass("animate");
      }
      //dropdown init
      $target.find(".js-drop_down").each(function(){
        $(this).find(".js-drop_down-content").each(function(){
          if (!$(this)[0].hasAttribute("data-height")) {
            $(this).attr("data-height", $(this).outerHeight());
            $(this).height(0);
          }
        })
      })
      //end
    }
  })
  $("body").on("click", "[data-popup-close]", function(e){
    e.preventDefault();
    var $popup = $(this).parents(".popup").first();
    $("body").css("overflow", "auto");
    $popup.hide();
    $popup.find(".popup-content").removeClass("animate");
  })
  $("body").on("click touchstart", function(e){
    if($(e.target).closest(".js-popup_content").length > 0) return;
    if($(e.target).closest("[data-popup-open]").length > 0) return;
    $("body").css("overflow", "auto");
    $(".popup .popup-content").removeClass("animate");
    $(".popup").hide();
  })
  //end

  //accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  //end accordion
});

