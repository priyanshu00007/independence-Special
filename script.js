// Add event listener to the "Explore the Journey" button

document.querySelector('button').addEventListener('click', () => {
    // Scroll to the "History of Independence" section
    document.querySelector('#history').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the "Read More" button
document.querySelector('#history button').addEventListener('click', () => {
    // Toggle the display of the "more-content" div
    document.querySelector('.more-content').toggleAttribute('style');
});

// Add event listener to the navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent default link behavior
        event.preventDefault();
        // Scroll to the corresponding section
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
// Add event listeners to toggle event details
document.addEventListener("DOMContentLoaded", function () {
	const events = document.querySelectorAll(".event");
	events.forEach((event) => {
		event.addEventListener("click", () => {
			const details = event.querySelector("p");
			details.classList.toggle("hidden");
		});
	});
}); 
document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");
    events.forEach((event) => {
        event.addEventListener("click", () => {
            const details = event.querySelector("p");
            details.classList.toggle("hidden");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.display = "none";
	}, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.display = "none";
	}, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.display = "none";
	}, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.opacity = "0";
		document.querySelector(".absolute").style.display = "none";
	}, 5000); // 1000 seconds in milliseconds
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.display = "none";
	}, 1000); // 1 seconds in milliseconds
});
document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".absolute").style.display = "none";
	}, 1000); // 10 seconds in milliseconds
});

// Add event listener to the grid items
document.querySelectorAll('.grid-item').forEach((item) => {
    item.addEventListener('click', () => {
        // Toggle the display of the grid item's description
        item.querySelector('p').toggleAttribute('style');
    });
});
// Add event listener to the "Explore the Journey" button
document.querySelector('button').addEventListener('click', () => {
    // Scroll to the "History of Independence" section
    document.querySelector('#history').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent default link behavior
        event.preventDefault();
        // Scroll to the corresponding section
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
// Add event listener to the "Read More" button
document.querySelector('#history button').addEventListener('click', () => {
    // Toggle the display of the "more-content" div
    document.querySelector('.more-content').toggleAttribute('style');
});

// Add event listener to the navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent default link behavior
        event.preventDefault();
        // Scroll to the corresponding section
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to the grid items
document.querySelectorAll('.grid-item').forEach((item) => {
    item.addEventListener('click', () => {
        // Toggle the display of the grid item's description
        item.querySelector('p').toggleAttribute('style');
    });
});


// flag
var element = $(".loader");
var wid = 1;
var color = ['#FF9933','#000080','#128807'];
function f() {
          widpercent = wid+"%";
   element.width(widpercent);
   colortext = wid%3;
  $(".LoadText>span").html(widpercent).css("color",color[colortext]);
    wid++;
    if( wid <= 100 ){
        setTimeout( f, 100 );
    }
   else{  
      $(".loader").hide(600);
      $(".LoadText>span").html("Happy Independence day");  $(".LoadText").width($(".LoadText>span").width());
$(".LoadText").css("margin-top","300px");
  $(".LoadText>span").css("color","#FFF");   // $("body").css("background","url('http://www.hdwallpapersnews.com/wp-content/uploads/2015/02/indian_flag_wallpaper-cricket_world_cup.jpg')").delay(1000);
      
$("body").css("background","url('http://webneel.com/wallpaper/sites/default/files/images/08-2013/18-india-independence-day-wallpaper.preview.jpg')").delay(1000);
$("body").css("background-size","cover");
   }

}
f();

   
window.onload = function() {
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

  openFlag.onclick = function() {
    $("#flag").show();
    hoistBtn.disabled = false;
  }

  hoistBtn.onclick = function() {
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

  resetBtn.onclick = function() {
    reload();
  }

  function allDone() {
    proST.revert();
  }
}
window.onload = function() {
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
  
    openFlag.onclick = function() {
      $("#flag").show();
      hoistBtn.disabled = false;
    }
  
    hoistBtn.onclick = function() {
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
  
    resetBtn.onclick = function() {
      reload();
    }
  
    function allDone() {
      proST.revert();
    }
  } 