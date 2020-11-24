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

var t1 = 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.';

var t2 = 'No more than 2GB. All files in your account must fit your allotted storage space.';

var t3 = 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.';

var t4 = 'Yes! Send us a message and we’ll process your request no questions asked.';

var t5 = 'Chat and email support is available 24/7. Phone lines are open during normal business hours.';

function create700(one, two, three){
    document.getElementById(one).style.cssText = 'font-weight: 700;';
    var ch = document.getElementById(one)
    ch.style.cssText += ' margin-bottom: 0rem;';
    document.getElementById(three).style.cssText = 'transform: rotate(180deg);';

};

function create400(one, two, three){
    document.getElementById(one).style.cssText = 'font-weight: 400;';
    var ch = document.getElementById(one)
    ch.style.cssText += ' margin-bottom: 1rem;';
    document.getElementById(three).style.cssText = 'transform: rotate(0deg);';
};

img1.addEventListener('click',function() {

    if (did1 === 'true') {
        create700('p1', '1', 'c1')
        did1 = 'false';
        document.getElementById('pj1').innerHTML = t1;
        console.log('this2 ' +document.getElementById('p1').style.cssText);

        create400('p2', '2', 'c2')
        did2 = 'true';
        document.getElementById('pj2').innerHTML = '';

        create400('p3', '3', 'c3')
        did3 = 'true';
        document.getElementById('pj3').innerHTML = '';

        create400('p4', '4', 'c4')
        did4 = 'true';
        document.getElementById('pj4').innerHTML = '';

        create400('p5', '5', 'c5')
        did5 = 'true';
        document.getElementById('pj5').innerHTML = '';

    } else {
        create400('p1', '1', 'c1')
        did1 = 'true';
        document.getElementById('pj1').innerHTML = '';
    }

});

img2.addEventListener('click', function(){

    if (did2 === 'true') {

        create700('p2', '2', 'c2')
        did2 = 'false';
        document.getElementById('pj2').innerHTML = t2;

        create400('p1', '1', 'c1')
        did1 = 'true';
        document.getElementById('pj1').innerHTML = '';

        create400('p3', '3', 'c3')
        did3 = 'true';
        document.getElementById('pj3').innerHTML = '';

        create400('p4', '4', 'c4')
        did4 = 'true';
        document.getElementById('pj4').innerHTML = '';

        create400('p5', '5', 'c5')
        did5 = 'true';
        document.getElementById('pj5').innerHTML = '';

    } else {
        create400('p2', '2', 'c2')
        did2 = 'true';
        document.getElementById('pj2').innerHTML = '';
    }

});

img3.addEventListener('click', function(){

    if (did3 === 'true') {
        create700('p3', '3', 'c3')
        did3 = 'false';
        document.getElementById('pj3').innerHTML = t3;

        create400('p1', '1', 'c1')
        did1 = 'true';
        document.getElementById('pj1').innerHTML = '';

        create400('p2', '2', 'c2')
        did2 = 'true';
        document.getElementById('pj2').innerHTML = '';

        create400('p4', '4', 'c4')
        did4 = 'true';
        document.getElementById('pj4').innerHTML = '';

        create400('p5', '5', 'c5')
        did5 = 'true';
        document.getElementById('pj5').innerHTML = '';

    } else {
        create400('p3', '3', 'c3')
        did3 = 'true';
        document.getElementById('pj3').innerHTML = '';
    }

});

img4.addEventListener('click', function(){

    if (did4 === 'true') {
        create700('p4', '4', 'c4')
        did4 = 'false';
        document.getElementById('pj4').innerHTML = t4;

        create400('p1', '1', 'c1')
        did1 = 'true';
        document.getElementById('pj1').innerHTML = '';

        create400('p3', '3', 'c3')
        did3 = 'true';
        document.getElementById('pj3').innerHTML = '';

        create400('p2', '2', 'c2')
        did2 = 'true';
        document.getElementById('pj2').innerHTML = '';

        create400('p5', '5', 'c5')
        did5 = 'true';
        document.getElementById('pj5').innerHTML = '';

    } else {
        create400('p4', '4', 'c4')
        did4 = 'true';
        document.getElementById('pj4').innerHTML = '';
    }

});

img5.addEventListener('click', function(){

    if (did5 === 'true') {
        create700('p5', '5', 'c5')
        did5 = 'false';
        document.getElementById('pj5').innerHTML = t5;

        create400('p1', '1', 'c1')
        did1 = 'true';
        document.getElementById('pj1').innerHTML = '';

        create400('p3', '3', 'c3')
        did3 = 'true';
        document.getElementById('pj3').innerHTML = '';

        create400('p4', '4', 'c4')
        did4 = 'true';
        document.getElementById('pj4').innerHTML = '';

        create400('p2', '2', 'c2')
        did2 = 'true';
        document.getElementById('pj2').innerHTML = '';

    } else {
        create400('p5', '5', 'c5')
        did5 = 'true';
        document.getElementById('pj5').innerHTML = '';
    }

});
