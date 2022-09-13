// link: <script src="js/dropDownElementControl.js"></script>

function hideContentControl(
  item,
  prevueContainer,
  hideContainer,
  hidderButton,
  hidderButtonText1,
  hidderButtonText2,
  maxItemCountInRow
) {
  hideContainer.css({ overflow: "hidden" });

  let on = true;
  let hideContainerActive = true;
  let hidderButtonFontSize;

  if ($(window).width() <= 859) {
    hidderButtonFontSize = "20px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  } else {
    hidderButtonFontSize = "25px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  }

  hidderButton.on("click", () => {
    if (hideContainerActive) {
      hideContainerActive = false;
    } else {
      hideContainerActive = true;
    }
  });

  $(window).on("resize", () => {
    let itemHeight =
      parseInt(item.height()) +
      parseInt(item.css("margin-bottom")) +
      parseInt(item.css("margin-top"));
    let itemsCountInRow = Math.floor(
      parseInt(prevueContainer.width()) /
        (parseInt(item.width()) +
          parseInt(item.css("margin-left")) +
          parseInt(item.css("margin-right")))
    );
    let itemRow = Math.ceil(item.length / itemsCountInRow);

    if (!hideContainerActive) {
      hideContainer.height(
        (itemRow - (maxItemCountInRow + 1 - itemsCountInRow)) * itemHeight
      );
    }

    if ($(window).width() <= 859) {
      hidderButtonFontSize = "20px";
      hidderButton.css({ "font-size": hidderButtonFontSize });
    } else {
      hidderButtonFontSize = "25px";
      hidderButton.css({ "font-size": hidderButtonFontSize });
    }
  });

  setInterval(() => {
    let itemHeight =
      parseInt(item.height()) +
      parseInt(item.css("margin-bottom")) +
      parseInt(item.css("margin-top"));
    let itemsCountInRow = Math.floor(
      parseInt(prevueContainer.width()) /
        (parseInt(item.width()) +
          parseInt(item.css("margin-left")) +
          parseInt(item.css("margin-right")))
    );
    let itemRow = Math.ceil(item.length / itemsCountInRow);

    if (hideContainerActive) {
      if (on) {
        hideContainer.animate({ height: 0 }, 600);
        hidderButton.css({ "font-size": 0 });
        setTimeout(() => {
          hidderButton.text(hidderButtonText1);
          hidderButton.css({ "font-size": hidderButtonFontSize });
        }, 300);

        on = false;
      }
    } else {
      if (!on) {
        hideContainer.animate(
          {
            height:
              (itemRow - (maxItemCountInRow + 1 - itemsCountInRow)) *
              itemHeight,
          },
          600
        );
        hidderButton.css({ "font-size": "0" });
        setTimeout(() => {
          hidderButton.text(hidderButtonText2);
          hidderButton.css({ "font-size": hidderButtonFontSize });
        }, 300);

        on = true;
      }
    }
  }, 10);
}

function hideTextControl(
  textContainer,
  prevueText,
  hideText,
  hidderButton,
  hidderButtonText1,
  hidderButtonText2
) {
  let hidderTextFule = false;
  let on = false;
  let hidderButtonFontSize;

  if ($(window).width() <= 859) {
    hidderButtonFontSize = "20px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  } else {
    hidderButtonFontSize = "25px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  }

  hidderButton.on("click", () => {
    if (hidderTextFule) {
      hidderTextFule = false;
    } else {
      hidderTextFule = true;
    }
  });

  $(window).on("resize", () => {
    if ($(window).width() <= 859) {
      hidderButtonFontSize = "20px";
      hidderButton.css({ "font-size": hidderButtonFontSize });
    } else {
      hidderButtonFontSize = "25px";
      hidderButton.css({ "font-size": hidderButtonFontSize });
    }
  });

  setInterval(() => {
    if (hidderTextFule) {
      if (on) {
        hidderButton.css({ "font-size": 0 });
        setTimeout(() => {
          hidderButton.text(hidderButtonText2);
          hidderButton.css({ "font-size": hidderButtonFontSize });
        }, 300);

        textContainer.text(hideText);
        hidderTextFule = true;
        on = false;
      }
    } else {
      if (!on) {
        hidderButton.css({ "font-size": 0 });
        setTimeout(() => {
          hidderButton.text(hidderButtonText1);
          hidderButton.css({ "font-size": hidderButtonFontSize });
        }, 300);

        textContainer.text(prevueText);
        hidderTextFule = false;
        on = true;
      }
    }
  }, 10);
}

function dropDownUlControl(
  ul,
  buttonText,
  windowWidthForActive,
  id) {
  ul.css({ overflow: "hidden" });

  let on = true;
  let hideUlActive = true;
  let ulHeight =
    parseInt(ul.height()) +
    parseInt(ul.css("padding-top")) +
    parseInt(ul.css("padding-bottom"));

  ul.before($(`<div class='drop-down-menu ddm${id}'></div>`));

  let dropDownMenu = $(`.ddm${id}`);

  dropDownMenu.append(
    $(`<div class="drop-down-menu-button-container ddmbc${id}"></div>`)
  );
  dropDownMenu.append(ul);

  let buttonContainer = $(`.ddmbc${id}`);

  buttonContainer.append(
    $(`<p class='drop-down-menu-button ddmb${id}'>${buttonText}</p>`)
  );
  buttonContainer.append(
    $(`<div class='drop-down-menu-button-arrow ddmba${id}'></div>`)
  );

  let buttonArrow = $(`.ddmba${id}`);

  buttonContainer.on("click", (e) => {
    if (hideUlActive) {
      hideUlActive = false;
    } else {
      hideUlActive = true;
    }
  });

  let mainWidth = parseInt($(".main").width());

  if (mainWidth <= windowWidthForActive) {
    ul.animate({ height: 0 }, 300);
    buttonContainer.css({ display: "flex" });

    hideUlActive = true;
    on = true;
  } else {
    ul.animate({ height: ulHeight }, 300);
    buttonContainer.css({ display: "none" });
    console.log(mainWidth);
    hideUlActive = false;
    on = false;
  }

  setInterval(() => {
    if (hideUlActive) {
      if (on) {
        ul.animate({ height: 0 }, 300);

        buttonArrow.css({ transform: "rotate(0deg)" });

        on = false;
      }
    } else {
      if (!on) {
        ul.animate({ height: ulHeight }, 300);

        buttonArrow.css({ transform: "rotate(90deg)" });

        on = true;
      }
    }
  }, 10);

  $(window).on("resize", () => {
    setTimeout(() => {
      let mainWidth = parseInt($(".main").width());

      if (mainWidth <= windowWidthForActive) {
        ul.animate({ height: 0 }, 300);
        buttonContainer.css({ display: "flex" });
        hideUlActive = true;
        on = true;
      } else {
        ul.animate({ height: ulHeight }, 300);
        buttonContainer.css({ display: "none" });

        hideUlActive = false;
        on = false;
      }
    }, 10);
  });
}
