document.addEventListener("DOMContentLoaded", function() {

    var counter = function() {
        var sectionCounter = document.getElementById('section-counter');
        if (sectionCounter !== null) {
            var waypoint = new Waypoint({
                element: sectionCounter,
                handler: function(direction) {
                    if (direction === 'down' && !this.element.classList.contains('ftco-animated')) {
                        var numbers = sectionCounter.querySelectorAll('.number');
                        numbers.forEach(function(number) {
                            var num = parseInt(number.getAttribute('data-number'));
                            animateValue(number, 0, num, 7000);
                        });
                        this.element.classList.add('ftco-animated');
                    }
                },
                offset: '95%'
            });
        }
    }
    counter();

    var contentWayPoint = function() {
        var items = document.querySelectorAll('.ftco-animate');
        items.forEach(function(item) {
            var waypoint = new Waypoint({
                element: item,
                handler: function(direction) {
                    if (direction === 'down' && !item.classList.contains('ftco-animated')) {
                        item.classList.add('item-animate');
                        var animationDelay = 0;
                        var itemAnimate = setInterval(function() {
                            item.style.animationDelay = animationDelay + 'ms';
                            item.classList.add('fadeIn');
                            item.classList.add('ftco-animated');
                            clearInterval(itemAnimate);
                        }, 50);
                    }
                },
                offset: '95%'
            });
        });
    };
    contentWayPoint();

    function animateValue(element, start, end, duration) {
        var range = end - start;
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var timer = setInterval(function() {
            current += increment;
            element.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }


	var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('#ftco-nav');

        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
});
