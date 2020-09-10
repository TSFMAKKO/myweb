
document.write('<link rel="stylesheet" href="./btn.css">');
// document.write('<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>');

// class vue_methods {
//     constructor() {
//         this.toggle = function (e) {



//             if (!this.status.toggle) {
//                 this.btn_open();

//             } else {
//                 this.btn_close();

//             }

//             console.log('toggle', e.target);
//             this.status.toggle = !this.status.toggle;

//         },
//             this.btn_open = function () {
//                 this.$refs.circle.classList.add('open');
//                 this.$refs.btn.classList.add('btn_open');
//             },
//             this.btn_close = function () {
//                 this.$refs.circle.classList.remove('open');
//                 this.$refs.btn.classList.remove('btn_open');
//             }
//     }

// }

// class vue_data {
//     constructor() {
//         this.status = {
//             toggle: false,
//         }
//     }
// }

// function vue_methods() {

//     let toggle = function (e) {



//         if (!this.status.toggle) {
//             this.btn_open();

//         } else {
//             this.btn_close();

//         }

//         console.log('toggle', e.target);
//         this.status.toggle = !this.status.toggle;

//     }

//     let btn_open = function () {
//         this.$refs.circle.classList.add('open');
//         this.$refs.btn.classList.add('btn_open');
//     }

//     let btn_close = function () {
//         this.$refs.circle.classList.remove('open');
//         this.$refs.btn.classList.remove('btn_open');
//     }

//     return {
//         toggle, btn_open, btn_close
//     }
// }

function vue_methods() {
    return {
        toggle(e) {
            if (!this.status.toggle) {
                this.btn_open();

            } else {
                this.btn_close();

            }

            console.log('toggle', e.target);
            this.status.toggle = !this.status.toggle;

        },
        btn_open() {
            this.$refs.circle.classList.add('open');
            this.$refs.btn.classList.add('btn_open');
        },
        btn_close() {
            this.$refs.circle.classList.remove('open');
            this.$refs.btn.classList.remove('btn_open');
        }


    }
}

function vue_data() {
    return {
        status: {
            toggle: false,
        }
    }
}

function vue_obj(el) {
    return {
        el: el,
        data: {
            ...vue_data()  
        },
        methods :{
            ...vue_methods()
        }
    }
}

// class vue_obj {
//     constructor(el) {
//         this.el = el;
//         this.data = { ...vue_data() };
//         this.methods = { ...vue_methods() };
//     }

// }


function productHTML(id) {
    let html = `<div id="${id}" class="btn" ref="btn">
    <div class="container" @click="toggle(event)">
        <div class="circle" ref="circle"></div>
    </div>
</div>`;

    return html;
}

