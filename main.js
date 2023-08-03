
// counts from 0% to 100% over a period of time using a setInterval function.

$(document).ready(function() {
  
    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");
        
      counter++;
      c++;
        
      if(counter == 101) {
          clearInterval(i);
          $('.loading-page').css('display', 'none');
          $('.no-show').css('overflow', 'visible');
      }
    }, 50);
  });


// Function to preload images
function preloadImages(imageUrls) {
    const preloadedImages = [];
    for (const imageUrl of Object.values(imageUrls)) {
      const img = new Image();
      img.src = imageUrl;
      preloadedImages.push(img);
    }
}


const backgroundImages = {
    1:'images/soju/ezgif-frame-001.jpg',
    2:'images/soju/ezgif-frame-002.jpg',
    3:'images/soju/ezgif-frame-003.jpg',
    4:'images/soju/ezgif-frame-004.jpg',
    5:'images/soju/ezgif-frame-005.jpg',
    6:'images/soju/ezgif-frame-006.jpg',
    7:'images/soju/ezgif-frame-007.jpg',
    8:'images/soju/ezgif-frame-008.jpg',
    9:'images/soju/ezgif-frame-009.jpg',
}

preloadImages(backgroundImages);
  

/************************************* WELCOME *****************************************/
const welcomeBackgroundImages = {
    1:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-001.jpg',
    2:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-002.jpg',
    3:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-003.jpg',
    4:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-004.jpg',
    5:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-005.jpg',
    6:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-006.jpg',
    7:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-007.jpg',
    8:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-008.jpg',
    9:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-009.jpg',

    10:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-010.jpg',
    11:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-011.jpg',
    12:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-012.jpg',
    13:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-013.jpg',
    14:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-014.jpg',
    15:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-015.jpg',
    16:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-016.jpg',
    17:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-017.jpg',
    18:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-018.jpg',
    19:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-019.jpg',

    20:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-020.jpg',
    21:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-021.jpg',
    22:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-022.jpg',
    23:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-023.jpg',
    24:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-024.jpg',
    25:'images/welcome/ezgif-4-3c585fc60c-jpg/ezgif-frame-025.jpg',

}

preloadImages(welcomeBackgroundImages);

$(document).ready(function () {
    // Scroll handling for the "soju" section
    const $sojuSection = $('.soju');
    const $helloSection = $('.hello');
    const sojuSectionOffset = $sojuSection.offset().top;
    $(window).scroll(function () {
      const scrollPosition = $(this).scrollTop();
      if (scrollPosition >= sojuSectionOffset) {
        const pixelsScrolled = scrollPosition - sojuSectionOffset;
        const backgroundUpdates = Math.min(Math.floor(pixelsScrolled / 50) + 1, 10);
        const imageToUse = backgroundImages[backgroundUpdates];
        $sojuSection.css('background-image', `url('${imageToUse}')`);
  
        if (backgroundUpdates === 10) {
          $sojuSection.css('position', 'relative');
          $helloSection.css('opacity', '1');
        } else {
          $sojuSection.css('position', 'sticky');
          $helloSection.css('opacity', '0');
        }
      }
    });
  
    // Scroll handling for the "welcome" section
    const $welcomeSection = $('.welcome');
    const $aboutSection = $('.about');
    const welcomeSectionOffset = $welcomeSection.offset().top;
    $(window).scroll(function () {
      const scrollPosition = $(this).scrollTop();
      if (scrollPosition >= welcomeSectionOffset) {
        const pixelsScrolled = scrollPosition - welcomeSectionOffset;
        const backgroundUpdates = Math.min(Math.floor(pixelsScrolled / 20) + 1, 26);
        const imageToUse = welcomeBackgroundImages[backgroundUpdates];
        $welcomeSection.css('background-image', `url('${imageToUse}')`);
  
        if (backgroundUpdates === 26) {
          $welcomeSection.css('position', 'relative');
          $aboutSection.css('opacity', '1');
        } else {
          $welcomeSection.css('position', 'sticky');
          $aboutSection.css('opacity', '0');
        }
      }
    });
  
    // Scrolling down arrow fade
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      const $arrow = $('.arrow');
      if (scroll >= 1) {
        $arrow.addClass('fade');
      } else {
        $arrow.removeClass('fade');
      }
    });
  });


  // Navbar scrolling
  function handleNavbar() {
    const tab = document.querySelector('.tab');
    let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollingDown = false;

    function updateNavbar() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > lastScrollPosition) {
        if (!isScrollingDown) {
          tab.style.visibility = 'visible';
          isScrollingDown = true;
        }
      } else {
        if (isScrollingDown && currentScrollPosition > 0) {
          tab.style.visibility = 'hidden';
          isScrollingDown = false;
        }
      }
      lastScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', updateNavbar);
  }

  document.addEventListener('DOMContentLoaded', function () {
    handleNavbar();
  });

  // Scrolling to section
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionClass = link.getAttribute('href').substring(1);
        const targetSections = document.getElementsByClassName(targetSectionClass);
        if (targetSections.length > 0) {
          targetSections[0].scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });

  // Founding Fathers carousel
  document.getElementById('next').onclick = function () {
    const lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };
  document.getElementById('prev').onclick = function () {
    const lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  };