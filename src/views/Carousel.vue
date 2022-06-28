<template>
  <div class="cursor">
  <div class="cursor__ball cursor__ball--big ">
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
    </svg>
  </div>
  
  <div class="cursor__ball cursor__ball--small">
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
    </svg>
  </div>
</div>

<div class="left">
  <h1>Hello</h1>
  <p>Check out this link:</p>
  <a class="hoverable">Hover meh</a>  
</div>

<div class="right">
  <h1>Hello</h1>
  <p>Check out this link:</p>
  <a class="hoverable">Hover meh</a>  
</div>
</template>

<script>
export default{

methods: {
  function() {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 4],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'King of the Ring Fight',
        'Sound of Streets',
        'Urban Fashion',
        'Windy Sunset'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 3],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 3],
        rangeContent: function () {
            return '<a class="ms-slide__link">View Case</a>';
        },
        vertical: true,
        interactive: false
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 3],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

}}}




</script>



<style scoped lang="scss">
 body {
	height: 100vh;
	background: #010101;
	cursor: none;
	margin: 0;
	display: flex;
	font-family: monospace;
	a {
		border-bottom: 2px solid #fff;
		padding: 10px 0;
		margin-top: 25px;
	}
	.cursor {
		pointer-events: none;
	}
	.cursor__ball {
		position: fixed;
		top: 0;
		left: 0;
		mix-blend-mode: difference;
		z-index: 1000;
		circle {
			fill: #f7f8fa;
		}
	}
	.right {
		background: #fff;
		a {
			border-bottom: 2px solid #000;
		}
	}
}
body h1,
body p,
body a {
	color: #fff;
}
body .left,
body .right {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
body .right h1,
body .right p,
body .right a {
	color: #000;
}


</style>
