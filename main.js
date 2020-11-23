var img1 = document.getElementById("c1");
var img2 = document.getElementById("c2");
var img3 = document.getElementById("c3");
var img4 = document.getElementById("c4");
var img5 = document.getElementById("c5");

var did1 = 'true';
var did2 = 'true';
var did3 = 'true';
var did4 = 'true';
var did5 = 'true';

function create700(one, two, three){
    document.getElementById(one).style.cssText = 'font-weight: 700;';
    document.getElementById(two).style.cssText = 'opacity: 1;';
    document.getElementById(three).style.cssText = 'transform: rotate(180deg);';

}

function create400(one, two, three){
    document.getElementById(one).style.cssText = 'font-weight: 400;';
    document.getElementById(two).style.cssText = 'opacity: 0;';
    document.getElementById(three).style.cssText = 'transform: rotate(0deg);';
}

img1.addEventListener('click',function() {

    if (did1 === 'true') {
        create700('p1', 'pj1', 'c1')
        did1 = 'false';

        create400('p2', 'pj2', 'c2')
        did2 = 'true';

        create400('p3', 'pj3', 'c3')
        did3 = 'true';

        create400('p4', 'pj4', 'c4')
        did4 = 'true';

        create400('p5', 'pj5', 'c5')
        did5 = 'true';
    } else {
        create400('p1', 'pj1', 'c1')
        did1 = 'true';
    }

});

img2.addEventListener('click', function(){

    if (did2 === 'true') {

        create700('p2', 'pj2', 'c2')
        did2 = 'false';

        create400('p1', 'pj1', 'c1')
        did1 = 'true';

        create400('p3', 'pj3', 'c3')
        did3 = 'true';

        create400('p4', 'pj4', 'c4')
        did4 = 'true';

        create400('p5', 'pj5', 'c5')
        did5 = 'true';

    } else {
        create400('p2', 'pj2', 'c2')
        did2 = 'true';
    }

});

img3.addEventListener('click', function(){

    if (did3 === 'true') {
        create700('p3', 'pj3', 'c3')
        did3 = 'false';

        create400('p1', 'pj1', 'c1')
        did1 = 'true';

        create400('p2', 'pj2', 'c2')
        did2 = 'true';

        create400('p4', 'pj4', 'c4')
        did4 = 'true';

        create400('p5', 'pj5', 'c5')
        did5 = 'true';
    } else {
        create400('p3', 'pj3', 'c3')
        did3 = 'true';
    }

});

img4.addEventListener('click', function(){

    if (did4 === 'true') {
        create700('p4', 'pj4', 'c4')
        did4 = 'false';

        create400('p1', 'pj1', 'c1')
        did1 = 'true';

        create400('p3', 'pj3', 'c3')
        did3 = 'true';

        create400('p2', 'pj2', 'c2')
        did2 = 'true';

        create400('p5', 'pj5', 'c5')
        did5 = 'true';
    } else {
        create400('p4', 'pj4', 'c4')
        did4 = 'true';
    }

});

img5.addEventListener('click', function(){

    if (did5 === 'true') {
        create700('p5', 'pj5', 'c5')
        did5 = 'false';

        create400('p1', 'pj1', 'c1')
        did1 = 'true';

        create400('p3', 'pj3', 'c3')
        did3 = 'true';

        create400('p4', 'pj4', 'c4')
        did4 = 'true';

        create400('p2', 'pj2', 'c2')
        did2 = 'true';
    } else {
        create400('p5', 'pj5', 'c5')
        did5 = 'true';
    }

});
