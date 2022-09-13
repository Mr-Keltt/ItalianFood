$(() => {
  function cssControl() {
    let windowWidth = $(window).width();

    backgroundControl(header, backgroundHeader);
    backgroundControl(chank2, backgroundChank2);
    backgroundControl(chank4, backgroundChank4);
    backgroundControl(chank6, backgroundChank6);

    if (windowWidth <= 1024) {
      main.width(windowWidth);
    } else if (windowWidth <= 1324) {
      main.width(1024);
    } else {
      main.width(1326);
    }

    if (windowWidth > 812) {
      row.css({
        "padding-right":
          parseInt(main.css("padding-left")) +
          parseInt(main.css("margin-left")),
        "padding-left":
          parseInt(main.css("padding-left")) +
          parseInt(main.css("margin-left")),
      });
    } else {
      row.css({
        "padding-right": 10 + parseInt(main.css("margin-left")),
        "padding-left": 10 + parseInt(main.css("margin-left")),
      });
    }

    if (windowWidth > 950) {
      burgerActive = false;
    }

    if (burgerActive) {
      $("body").css({ overflow: "hidden" });
      row.addClass("row-down");
      rowBurger.addClass("burger-active");
      rowMenu.css({
        top:
          row.height() +
          parseInt(row.css("padding-top")) +
          parseInt(row.css("padding-bottom")),
      });
    } else {
      $("body").css({ "overflow-y": "auto" });

      try {
        rowBurger.removeClass("burger-active");
      } catch (e) {}

      rowMenu.css({ top: -500 });
    }

    if (windowWidth > 1024) {
      if ($(window).scrollTop() >= 70) {
        row.css({ "padding-top": 10, "padding-bottom": 10 });
        row.addClass("row-down");
      } else {
        row.css({ "padding-top": 45 - $(window).scrollTop() / 2 });
        row.removeClass("row-down");
      }
    } else {
      if ($(window).scrollTop() >= 50) {
        row.css({ "padding-top": 10, "padding-bottom": 10 });
        row.addClass("row-down");
      } else {
        row.css({ "padding-top": 25 - $(window).scrollTop() / 2 });
        if (!burgerActive) {
          row.removeClass("row-down");
        }
      }
    }

    if (
      window.pageYOffset + $(window).height() >= header.offset().top + 100 &&
      window.pageYOffset <= header.offset().top + header.height() - 100
    ) {
      headerImg.css({ opacity: 1, left: 0 });
    }

    if (
      window.pageYOffset + $(window).height() >= chank4.offset().top + 300 &&
      window.pageYOffset <= chank4.offset().top + chank4.height() + 200
    ) {
      chank4Img.css({ display: "block" });
      chank4Img.animate({ opacity: 1, top: 0 }, 1500);
    }

    let productsCountInRow = Math.floor(
      parseInt(prouctsMenu.width()) / parseInt(product.width() + 80)
    );
    let productsCountInLastRow =
      product.length -
      Math.floor(product.length / productsCountInRow) * productsCountInRow;

    if (productsCountInRow == 2) {
      $(".product:eq(2)").after($(".product:eq(3)"));
    } else {
      prouctsMenuHidde.prepend($(".product:eq(3)"));
    }
  }

  let backgroundHeader = $(".background__header");
  let backgroundChank2 = $(".background__chank2");
  let backgroundChank4 = $(".background__chank4");
  let backgroundChank6 = $(".background__chank6");
  let main = $(".main");
  let row = $(".row");
  let rowBurger = $(".row__burger");
  let rowMenu = $(".row__menu");
  let rowItem = $(".row__item");
  let search = $(".search__input");
  let header = $(".header");
  let headerText = $(".header__text");
  let headerImg = $(".header__img");
  let headerButton = $(".header__button");
  let prouctsMenu = $(".prouctsMenu");
  let prouctsMenuHidde = $(".prouctsMenuHide");
  let product = $(".product");
  let productsButton = $(".products__button");
  let chank2 = $(".chank2");
  let chank2TextContainer = $(".chank2__textContainer");
  let chank2TextContainerHide = $(".chank2__hideTextContainer");
  let chank2Text = $(".chank2__text");
  let chank2Button = $(".chank2__button");
  let stockText1 = $(".stock__text:eq(0)");
  let stockText2 = $(".stock__text:eq(1)");
  let stockButton1 = $(".stock__button:eq(0)");
  let stockButton2 = $(".stock__button:eq(1)");
  let chank4 = $(".chank4");
  let chank4Img = $(".chank4__img");
  let chank6 = $(".chank6");

  let burgerActive = false;


  setInterval(cssControl, 10);

  hideTextControl(
    headerText,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis quidem fuga cum rerum...",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis quidem fuga cum rerum autem sunt, explicabo dolor. Pariatur temporibus suscipit commodi doloribus ipsa nemo nulla cumque dolor ex ratione voluptatum magnam corporis eligendi officia error aspernatur neque eum expedita consequuntur nam, inventore explicabo quod dolorum! Iste id ex nobis!",
    headerButton,
    "READ MORE",
    "hide");
  hideTextControl(
    stockText1,
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatem quasi...",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatem quasi, eius autem minus sunt ullam repellendus amet quod perspiciatis pariatur placeat, et numquam temporibus quis fuga id fugit officia dolore impedit dolor doloremque. Expedita numquam sit omnis velit odio ipsa. Incidunt amet, nisi delectus alias dolorum eius beatae sunt.",
    stockButton1,
    "READ MORE",
    "hide");
  hideTextControl(
    stockText2,
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illum aliquam adipisci...",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illum aliquam adipisci accusamus qui mollitia soluta voluptate similique consectetur totam blanditiis, ipsa, eaque voluptates enim, ea repudiandae. Dignissimos sed, adipisci cumque obcaecati ducimus impedit ut iure id exercitationem omnis incidunt nemo, est, sunt distinctio. Corporis veniam error atque laboriosam quae?",
    stockButton2,
    "READ MORE",
    "hide");

  hideContentControl(
    product,
    prouctsMenu,
    prouctsMenuHidde,
    productsButton,
    "Show More",
    "Hide",
    3);
  hideContentControl(
    chank2Text,
    chank2TextContainer,
    chank2TextContainerHide,
    chank2Button,
    "MORE INFO",
    "Hide",
    2);

  dropDownUlControl($(".footer__ul-1"), "About", 838, 0);
  dropDownUlControl($(".footer__ul-2"), "Services", 838, 1);
  dropDownUlControl($(".footer__ul-3"), "Other", 838, 2);


  rowBurger.on("click", () => {
    if (burgerActive) {
      burgerActive = false;
    } else {
      burgerActive = true;
    }
  });

  rowItem.on("click", () => {
    let windowWidth = $(window).width();

    if (windowWidth <= 950) {
      burgerActive = false;
    }

    return;
  })

  search.on("focus", () => {
    search.animate({ width: "250px" }, 250);
  });

  search.on("focusout", () => {
    search.animate({ width: "180px" }, 250);
  });
});
