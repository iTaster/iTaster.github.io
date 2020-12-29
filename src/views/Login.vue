<template>
    <main class="Login">
        <div class="the-sky">
            <div id="start1"></div>
            <div id="start2"></div>
            <div id="start3"></div>
        </div>
        <form class="form" onsubmit="return false" autocomplete="off">
            <div class="form-inner">
                <h2>User Login</h2>
                <div class="input-wrapper">
                    <label for="login-username">Username</label>
                    <div class="input-group"><span class="icon">
              <svg viewBox="0 0 24 24">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
              </svg></span>
                        <input value="iTaster" id="login-username" type="text" disabled data-lpignore="true"/>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="login-password">Password</label>
                    <div class="input-group"><span class="icon">
              <svg viewBox="0 0 24 24">
                <path d="M11.83,1.73C8.43,1.79 6.23,3.32 6.23,3.32C5.95,3.5 5.88,3.91 6.07,4.19C6.27,4.5 6.66,4.55 6.96,4.34C6.96,4.34 11.27,1.15 17.46,4.38C17.75,4.55 18.14,4.45 18.31,4.15C18.5,3.85 18.37,3.47 18.03,3.28C16.36,2.4 14.78,1.96 13.36,1.8C12.83,1.74 12.32,1.72 11.83,1.73M12.22,4.34C6.26,4.26 3.41,9.05 3.41,9.05C3.22,9.34 3.3,9.72 3.58,9.91C3.87,10.1 4.26,10 4.5,9.68C4.5,9.68 6.92,5.5 12.2,5.59C17.5,5.66 19.82,9.65 19.82,9.65C20,9.94 20.38,10.04 20.68,9.87C21,9.69 21.07,9.31 20.9,9C20.9,9 18.15,4.42 12.22,4.34M11.5,6.82C9.82,6.94 8.21,7.55 7,8.56C4.62,10.53 3.1,14.14 4.77,19C4.88,19.33 5.24,19.5 5.57,19.39C5.89,19.28 6.07,18.92 5.95,18.6V18.6C4.41,14.13 5.78,11.2 7.8,9.5C9.77,7.89 13.25,7.5 15.84,9.1C17.11,9.9 18.1,11.28 18.6,12.64C19.11,14 19.08,15.32 18.67,15.94C18.25,16.59 17.4,16.83 16.65,16.64C15.9,16.45 15.29,15.91 15.26,14.77C15.23,13.06 13.89,12 12.5,11.84C11.16,11.68 9.61,12.4 9.21,14C8.45,16.92 10.36,21.07 14.78,22.45C15.11,22.55 15.46,22.37 15.57,22.04C15.67,21.71 15.5,21.35 15.15,21.25C11.32,20.06 9.87,16.43 10.42,14.29C10.66,13.33 11.5,13 12.38,13.08C13.25,13.18 14,13.7 14,14.79C14.05,16.43 15.12,17.54 16.34,17.85C17.56,18.16 18.97,17.77 19.72,16.62C20.5,15.45 20.37,13.8 19.78,12.21C19.18,10.61 18.07,9.03 16.5,8.04C14.96,7.08 13.19,6.7 11.5,6.82M11.86,9.25V9.26C10.08,9.32 8.3,10.24 7.28,12.18C5.96,14.67 6.56,17.21 7.44,19.04C8.33,20.88 9.54,22.1 9.54,22.1C9.78,22.35 10.17,22.35 10.42,22.11C10.67,21.87 10.67,21.5 10.43,21.23C10.43,21.23 9.36,20.13 8.57,18.5C7.78,16.87 7.3,14.81 8.38,12.77C9.5,10.67 11.5,10.16 13.26,10.67C15.04,11.19 16.53,12.74 16.5,15.03C16.46,15.38 16.71,15.68 17.06,15.7C17.4,15.73 17.7,15.47 17.73,15.06C17.79,12.2 15.87,10.13 13.61,9.47C13.04,9.31 12.45,9.23 11.86,9.25M12.08,14.25C11.73,14.26 11.46,14.55 11.47,14.89C11.47,14.89 11.5,16.37 12.31,17.8C13.15,19.23 14.93,20.59 18.03,20.3C18.37,20.28 18.64,20 18.62,19.64C18.6,19.29 18.3,19.03 17.91,19.06C15.19,19.31 14.04,18.28 13.39,17.17C12.74,16.07 12.72,14.88 12.72,14.88C12.72,14.53 12.44,14.25 12.08,14.25Z"></path>
              </svg></span>
                        <input id="login-password" type="password" v-model="pwd" data-lpignore="true"
                               @focus="msg?msg=false:''"/>
                    </div>
                    <p v-if="msg" class="login-error">Please check your password. </p>
                </div>
                <div class="btn-group">
                    <button class="btn btn--primary" @click="verify">Sign in</button>
                    <a v-show="false" class="btn--text" href="#0">Forgot password?</a>
                </div>
            </div>
        </form>
    </main>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        name: "Login",
        data() {
            return {
                k: 'aGFjaw==',
                msg: false,
                pwd: null
            }
        },
        created() {
            const a = this;
            const b = atob;
            const k = Cookies.get('iTaster');
            console.log(k,a.k, a===a.k);
            if (k && b(k) === a.k) a.$router.push({name: 'Home'})
        },
        methods: {
            verify() {
                const a = this;
                const b = a.pwd;
                const c = btoa;
                if (b && b.length) {
                    let k = c(b).padStart(7, 'iTaster');
                    if (k === "aGFjaw==") {
                        Cookies.set('iTaster', c(k), {expires: 7})
                        a.$router.push({name: 'Home'})
                    }
                } else {
                    a.msg = true;
                    a.password = null;
                }
            }
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');


    $windowWidth: 2000;

    @mixin sky($stars) {
        $box-shadow: ();
        @for $i from 0 through $stars {
            $box-shadow: $box-shadow, (round(random() * $windowWidth) + px) (round(random() * $windowWidth) + px) #fff;
        }
        box-shadow: $box-shadow;
    }

    @mixin label-styles {
        font-size: calc(var(--font-size) / 1.65);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.065rem;
    }

    :root {
        --space-root: 1rem;
        --space-xs: calc(var(--space-root) / 2);
        --space-s: calc(var(--space-root) / 1.5);
        --space-m: var(--space-root);
        --space-l: calc(var(--space-root) * 1.5);
        --space-xl: calc(var(--space-root) * 2);
        --space-xxl: calc(var(--space-root) * 2.5);
        --color-primary: #7fb80e;
        --color-secondary: black;
        --color-tertiary: #17182f;
        --color-error: #f56c6c;
        --base-border-radius: 0.25rem;
        --ease: cubic-bezier(0.075, 0.82, 0.165, 1);
        --duration: 350ms;
        --font-family: 'Roboto', sans-serif;
        --font-size: 1.25rem;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    a {
        color: var(--color-primary);

        &:focus {
            color: var(--color-secondary);
        }
    }

    h2 {
        font-weight: 700;
        font-size: calc(var(--font-size) * 1.5);
    }

    .Login {
        display: grid;
        height: 100vh;
        place-items: center;
        padding: var(--space-m);
        font-size: var(--font-size);
        font-family: var(--font-family);
        line-height: 1.2;
        background-color: var(--color-tertiary);

        .form {
            position: relative;
            width: 100%;
            max-width: 450px;
            margin: 0 auto;
            transform: skewY(-5deg) translateY(10%) scale(0.94);
            transition: box-shadow var(--duration) var(--ease),
            transform var(--duration) var(--ease);

            &:before,
            &:after {
                content: '';
                position: absolute;
                pointer-events: none;
                background-color: darken(white, 8%);
                width: 25%;
                height: 100%;
                transition: background-color var(--duration) var(--ease),
                transform var(--duration) var(--ease);
            }

            &:before {
                top: 0;
                right: calc(100% - 1px);
                transform-origin: 100% 100%;
                transform: skewY(-35deg) scaleX(-1);
                z-index: -1;
            }

            &:after {
                top: 0;
                left: calc(100% - 1px);
                transform-origin: 0 0;
                transform: skewY(-35deg) scaleX(-1);
                z-index: 2;
            }

            &:hover,
            &:focus-within {
                transform: scale(1.0001);
                box-shadow: 0 1rem 3rem rgba(black, 0.1);

                &:before,
                &:after {
                    background-color: white;
                    transform: skewY(0);
                }
            }
        }

        .form-inner {
            position: relative;
            padding: var(--space-xl);
            background-color: white;
            z-index: 1;
        }

        .input-wrapper {
            margin-top: var(--space-l);

            &:focus-within {
                label {
                    color: var(--color-secondary);
                }

                .icon {
                    background-color: var(--color-secondary);
                }

                input {
                    border-color: var(--color-secondary);
                }
            }
        }

        .input-group {
            position: relative;

            input {
                border-radius: var(--base-border-radius);
                padding-left: calc(var(--space-s) + 60px);
            }

            .icon {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                border-top-left-radius: var(--base-border-radius);
                border-bottom-left-radius: var(--base-border-radius);
                pointer-events: none;
            }
        }

        label {
            @include label-styles;
            display: block;
            margin-bottom: var(--space-xs);
            color: var(--color-primary);
        }

        .icon {
            display: flex;
            align-items: center;
            flex: 0 1 auto;
            padding: var(--space-m);
            background-color: var(--color-primary);

            svg {
                width: 1.25em;
                height: 1.25em;
                fill: white;
                pointer-events: none;
                user-select: none;
                transition: transform var(--duration) var(--ease);
            }
        }

        input {
            flex: 1 1 0;
            width: 100%;
            outline: none;
            padding: var(--space-m);
            font-size: var(--font-size);
            font-family: var(--font-family);
            color: var(--color-secondary);
            border: 2px solid var(--color-primary);

            &:focus {
                color: var(--color-primary);
            }
        }

        .btn-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: var(--space-xxl);

            > * + * {
                margin-left: var(--space-s);
            }
        }

        .btn {
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: space-between;
            outline: none;
            padding: var(--space-m) var(--space-l);
            cursor: pointer;
            border: 2px solid transparent;
            border-radius: var(--base-border-radius);
        }

        .btn--primary {
            @include label-styles;
            background-color: var(--color-primary);
            border-color: var(--color-primary);
            color: white;

            &:focus {
                background-color: var(--color-secondary);
                border-color: var(--color-secondary);
            }
        }

        .btn--text {
            font-size: calc(var(--font-size) / 1.5);
            padding: 0;
        }

        .login-error {
            position: absolute;
            color: var(--color-error);
            font-size: 14px;
            margin-top: var(--space-xs);
        }

        .the-sky {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            #start1 {
                @include sky(700);
                width: 1px;
                height: 1px;
                animation: animStar 50s linear infinite;
                animation-delay: -10s;
            }

            #start2 {
                @include sky(200);
                width: 2px;
                height: 2px;
                animation: animStar 100s linear infinite;
                animation-delay: -8s;
            }

            #start3 {
                @include sky(100);
                width: 3px;
                height: 3px;
                animation: animStar 150s linear infinite;
                animation-delay: -5s;
            }


            @keyframes animStar {
                from {
                    transform: translateY(0px)
                }
                to {
                    transform: translateY(-2000px)
                }
            }
        }
    }
</style>