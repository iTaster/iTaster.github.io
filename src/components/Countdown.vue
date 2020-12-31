<template><div id="Countdown" class="flip-clock"></div></template>

<script>
    export default {
        name: "Countdown",
        mounted() {
            console.clear();

            function CountdownTracker(label, value){

                let el = document.createElement('span');

                el.className = 'flip-clock__piece';
                el.innerHTML = `<b class="flip-clock__card card">
                                    <b class="card__top"></b>
                                    <b class="card__bottom"></b>
                                    <b class="card__back">
                                        <b class="card__bottom"></b>
                                    </b>
                                </b>
                                <span class="flip-clock__slot">${label}</span>`;

                this.el = el;

                let top = el.querySelector('.card__top'),
                    bottom = el.querySelector('.card__bottom'),
                    back = el.querySelector('.card__back'),
                    backBottom = el.querySelector('.card__back .card__bottom');

                this.update = function(val){
                    val = val>100?val:( '0' + val ).slice(-2);
                    if ( val !== this.currentValue ) {
                        if ( this.currentValue >= 0 ) {
                            back.setAttribute('data-value', this.currentValue);
                            bottom.setAttribute('data-value', this.currentValue);
                        }
                        this.currentValue = val;
                        top.innerText = this.currentValue;
                        backBottom.setAttribute('data-value', this.currentValue);

                        this.el.classList.remove('flip');
                        void this.el.offsetWidth;
                        this.el.classList.add('flip');
                    }
                }

                this.update(value);
            }

            // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

            function getTimeRemaining(endtime) {
                let t = Date.parse(endtime) - Date.parse(new Date());
                return {
                    'Total': t,
                    'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
                    'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
                    'Minutes': Math.floor((t / 1000 / 60) % 60),
                    'Seconds': Math.floor((t / 1000) % 60)
                };
            }

            function getTime() {
                let t = new Date();
                return {
                    'Total': t,
                    'Hours': t.getHours() % 12,
                    'Minutes': t.getMinutes(),
                    'Seconds': t.getSeconds()
                };
            }

            function Clock(countdown,callback) {

                countdown = countdown ? new Date(Date.parse(countdown)) : false;
                callback = callback || function(){};

                let updateFn = countdown ? getTimeRemaining : getTime;

                this.el = document.getElementById('Countdown');
                // this.el.className = 'flip-clock';

                let trackers = {},
                    t = updateFn(countdown),
                    key, timeinterval;

                for ( key in t ){
                    if ( key === 'Total' ) { continue; }
                    trackers[key] = new CountdownTracker(key, t[key]);
                    this.el.appendChild(trackers[key].el);
                }

                let i = 0;
                function updateClock() {
                    timeinterval = requestAnimationFrame(updateClock);

                    // throttle so it's not constantly updating the time.
                    if ( i++ % 10 ) { return; }

                    let t = updateFn(countdown);
                    if ( t.Total < 0 ) {
                        cancelAnimationFrame(timeinterval);
                        for ( key in trackers ){
                            trackers[key].update( 0 );
                        }
                        callback();
                        return;
                    }

                    for ( key in trackers ){
                        trackers[key].update( t[key] );
                    }
                }

                setTimeout(updateClock,500);
            }
            // let ChineseNewYear = new Date("Feb 12, 2021");
            // let a = new Clock(ChineseNewYear, function(){ alert('Happy New Year!') });
            // document.body.appendChild(a.el);

            let deadline = new Date("Dec 25, 2021");
            let c = new Clock(deadline, function(){ alert('countdown complete') });
            console.log(c);
            document.getElementById('Countdown').appendChild(c.el);
            // console.log(document.getElementById('Countdown'));
            // this.$refs.Countdown.innerHTML=c.el;

            // let clock = new Clock();
            // document.body.appendChild(clock.el);

        },
    }
</script>

<style>
    .flip-clock {
        text-align: center;
        -webkit-perspective: 400px;
        perspective: 400px;
        margin: auto 10px;
    }
    .flip-clock *,
    .flip-clock *:before,
    .flip-clock *:after {
        box-sizing: border-box;
    }
    .flip-clock__piece {
        display: inline-block;
        margin: 0 5px;
    }
    .flip-clock__slot {
        font-size: x-small;
    }
    .card {
        display: block;
        position: relative;
        padding-bottom: 0.72em;
        font-size: 1.2em;
        line-height: 0.95;
        border-radius: 0.15em;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
        outline: 1px solid transparent;
        overflow: hidden;
    }
    .card__top,
    .card__bottom,
    .card__back::before,
    .card__back::after {
        display: block;
        height: 0.72em;
        color: #ccc;
        background: #222;
        padding: 0.25em 0.25em;
        backface-visiblity: hidden;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        width: 1.8em;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    .card__bottom {
        color: #FFF;
        position: absolute;
        top: 50%;
        left: 0;
        border-top: solid 1px #000;
        background: #393939;
        pointer-events: none;
        overflow: hidden;
    }
    .card__bottom::after {
        display: block;
        margin-top: -0.72em;
    }
    .card__back::before,
    .card__bottom::after {
        content: attr(data-value);
    }
    .card__back {
        position: absolute;
        top: 0;
        height: 100%;
        left: 0%;
        pointer-events: none;
    }
    .card__back::before {
        position: relative;
        z-index: -1;
        overflow: hidden;
    }
    .flip .card__back::before {
        -webkit-animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
        animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
    }
    .flip .card__back .card__bottom {
        -webkit-transform-origin: center top;
        transform-origin: center top;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
        animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
    }
    @-webkit-keyframes flipTop {
        0% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            z-index: 2;
        }
        0%,
        99% {
            opacity: 0.99;
        }
        100% {
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            opacity: 0;
        }
    }
    @keyframes flipTop {
        0% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            z-index: 2;
        }
        0%,
        99% {
            opacity: 0.99;
        }
        100% {
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            opacity: 0;
        }
    }
    @-webkit-keyframes flipBottom {
        0%,
        50% {
            z-index: -1;
            -webkit-transform: rotateX(90deg);
            transform: rotateX(90deg);
            opacity: 0;
        }
        51% {
            opacity: 0.99;
        }
        100% {
            opacity: 0.99;
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            z-index: 5;
        }
    }
    @keyframes flipBottom {
        0%,
        50% {
            z-index: -1;
            -webkit-transform: rotateX(90deg);
            transform: rotateX(90deg);
            opacity: 0;
        }
        51% {
            opacity: 0.99;
        }
        100% {
            opacity: 0.99;
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            z-index: 5;
        }
    }

</style>