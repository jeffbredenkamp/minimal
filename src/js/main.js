window.onload = () => {
    const anchors = document.querySelectorAll('.nav-link');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 200);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];

      console.log(anchors);
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        transition_el.classList.add('is-active');
  
        setInterval(() => {
          window.location.href = target;
        }, 200);
      })
    }
  }

const menuBtn = document.querySelector('#navbar-toggle');
const menuNav = document.querySelector('#navbar-nav');

menuBtn.onclick = function() {
	menuNav.classList.toggle('active');
  menuBtn.classList.toggle('active');

	menuBtn.setAttribute(
		"aria-expanded",
		menuBtn.getAttribute("aria-expanded") == 'true' ? 'false' : 'true'
	);
}

menuBtn.onkeydown = function(e) {
	if (e.key == "Enter") {
		menuNav.classList.toggle('active');
        
		e.preventDefault();
		menuBtn.setAttribute(
			"aria-expanded",
			menuBtn.getAttribute("aria-expanded") == 'true' ? 'false' : 'true'
		);
	}
  };

  // Back to top

var scrollpos = window.scrollY;
var backToTop = document.getElementById("back-to-top");

function add_class_on_scroll() {
  backToTop.classList.add("active");
}

function remove_class_on_scroll() {
  backToTop.classList.remove("active");
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 250){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});