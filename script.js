// Event listeners for navigation and buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener('click', () => {
      document.querySelector('#history').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    document.querySelector('#history button').addEventListener('click', () => {
      document.querySelector('.more-content').toggleAttribute('style');
    });
  
    document.querySelectorAll('.grid-item').forEach((item) => {
      item.addEventListener('click', () => {
        item.querySelector('p').toggleAttribute('style');
      });
    });
  });
  
  // Animation for .main
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var elements = document.querySelectorAll(".main");
      elements.forEach(function (element) {
        element.style.opacity = 1;
        (function fade() {
          element.style.opacity -= 0.1;
          if (element.style.opacity > 0) {
            setTimeout(fade, 100); // 100 milliseconds = 0.1 seconds
          } else {
            element.style.display = "none";
          }
        })();
      });
    }, 10000); // 10000 milliseconds = 10 seconds
  });
  
  // Flag animation
  var element = $(".loader");
  var wid = 1;
  var color = ['#FF9933', '#000080', '#128807'];
  
  function f() {
    widpercent = wid + "%";
    element.width(widpercent);
    colortext = wid % 3;
    $(".LoadText>span").html(widpercent).css("color", color[colortext]);
    wid++;
    if (wid <= 100) {
      setTimeout(f, 100);
    } else {
      $(".loader").hide(600);
      $(".LoadText>span").html("Happy Independence day");
      $(".LoadText").width($(".LoadText>span").width());
      $(".LoadText").css("margin-top", "300px");
      $(".LoadText>span").css("color", "#FFF");
      $("body").css("background", "url('http://webneel.com/wallpaper/sites/default/files/images/08-2013/18-india-independence-day-wallpaper.preview.jpg')");
      $("body").css("background-size", "cover");
    }
  }
  f();
  
  // Flag hoisting animation
  window.onload = function () {
    var flag = document.getElementById("flag"),
      openFlag = document.getElementById("openFlag"),
      hoistBtn = document.getElementById("flag-hoist"),
      resetBtn = document.getElementById("resetBtn"),
      pigeon = document.getElementById("pigeon"),
      txt = document.getElementById("txt"),
      myname = document.getElementById("myName"),
      pro = new TimelineMax(),
      pro2 = new TimelineMax(),
      proST = new SplitText("#txt");
  
    hoistBtn.disabled = true;
    txt.hidden = true;
    myname.innerHTML = "SUBBU";
  
    openFlag.onclick = function () {
      $("#flag").show();
      hoistBtn.disabled = false;
    }
  
    hoistBtn.onclick = function () {
      txt.hidden = false;
  
      pro.to(flag, 3, {
        bottom: 230
      })
  
      pro.to(pigeon, 3, {
        scale: "10",
        x: -1400,
        y: -500,
        ease: SlowMo.ease.config(0.8, 0.8)
      })
  
      pro.staggerFrom(proST.words, 2.5, {
        opacity: 0,
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: 100,
        ease: Elastic.easeOut.config(0.4, 0.2),
        y: 0
      }, 1, allDone)
    }
  
    resetBtn.onclick = function () {
      reload();
    }
  
    function allDone() {
      proST.revert();
    }
  }