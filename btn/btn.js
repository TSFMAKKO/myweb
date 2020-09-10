
document.write('<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>');

class vue_methods {
    constructor() {
        this.toggle = function (e) {



            if (!this.status.toggle) {
                this.btn_open();

            } else {
                this.btn_close();

            }

            console.log('toggle', e.target);
            this.status.toggle = !this.status.toggle;

        },
            this.btn_open = function () {
                this.$refs.circle.classList.add('open');
                this.$refs.btn.classList.add('btn_open');
            },
            this.btn_close = function () {
                this.$refs.circle.classList.remove('open');
                this.$refs.btn.classList.remove('btn_open');
            }
    }

}

class vue_data {
    constructor() {
        this.status = {
            toggle: false,
        }
    }
}

class vue_obj {
    constructor(el) {
        this.el = el;
        this.data = { ...new vue_data() };
        this.methods = { ...new vue_methods() };
    }

}