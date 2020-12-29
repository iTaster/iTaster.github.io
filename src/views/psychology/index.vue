<template>
    <main class="PSY">
        <h1>
            心理学思维导图
        </h1>
        <ul class="tab-wrap">
            <li>
                <input type="radio" id="tab-1" name="tab" checked/>
                <label for="tab-1" class="label-1">
                    普通心理学
                </label>
                <article class="tab-content">
                    <img src="./svg/GP.svg" alt="">
                </article>
            </li>
            <li>
                <input type="radio" id="tab-2" name="tab"/>
                <label for="tab-2" class="label-2">
                    教育心里学
                </label>
                <article class="tab-content">
                </article>
            </li>
            <li>
                <input type="radio" id="tab-3" name="tab"/>
                <label for="tab-3" class="label-3">
                    发展心理学
                </label>
                <article class="tab-content">
                </article>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        name: "PSY"
    }
</script>

<style>

    body {
        padding: 0;
        margin: 0;
        background: #1e1f26;
    }

    svg{
        display: block;
        margin:10px auto;
        margin-bottom: 0;
    }

    .page-wrap {
        width: 95%;
        margin: 0 auto;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
        padding: 0;
        margin: 20px 0;
        color: #fff;
        text-align: center;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    input[type="radio"] {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    .tab-wrap {
        float: none;
        list-style: none;
        position: relative;
        margin: 0 auto;
        padding: 0;
        text-align: left;
    }

    .tab-wrap li {
        float: left;
        display: block;
    }

    .tab-wrap label {
        position: relative;
        display: inline-block;
        padding: 1.5em 1.5em 1em;
        color: #fff;
        text-decoration: none;
        margin: 0 10px 0 0px;
    }

    .label-1 {
        z-index: 100;
    }

    .label-2 {
        z-index: 90;
    }

    .label-3 {
        z-index: 80;
    }

    .tab-wrap label:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 10px;
        left: 0;
        z-index: -1;
        border: .1em solid current;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        background: #1e1f26;


        -webkit-transform: perspective(5px) rotateX(2deg);
        transform: perspective(5px) rotateX(2deg);

        -webkit-transform-origin: left;
        -ms-transform-origin: left;
        transform-origin: left;
    }

    .tab-wrap .tab-content {
        z-index: 200;
        display: none;
        overflow: hidden;
        width: 100%;
        position: absolute;
        top: 53px;
        left: 0;
        padding: 20px;
        background: #1e242f;
        border-radius: 3px;
        border: .1em solid current;
        border-top: 0;
    }

    .tab-wrap [id^="tab"]:checked + label {
        z-index: 200;
        margin-bottom: -1px;
        border-top-width: 1px;
    }

    .tab-wrap [id^="tab"]:checked + label:before {
        background: #1e242f;
    }

    .tab-wrap [id^="tab"]:checked ~ .tab-content{
        display: block;
    }
</style>