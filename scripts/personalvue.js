window.onload = function () {
    var navigationTabs = [
        {id: 0, text: "About Me", link:"#aboutme"},
        {id: 1, text: "Bootstrap", link:"#bootstrap"},
        {id: 2, text: "Canvas", link:"#canvasDrawing"},
        {id: 3, text: "Change Style", link:"#changestyles"},
        {id: 4, text: "Transforms", link:"#transforms"},
        {id: 5, text: "Animations", link:"#animations"},
        {id: 8, text: "Geolocation", link: "#geolocation"},
        {id: 9, text: "Storage", link: "#webstorage"},
        {id: 6, text: "Donuts", link:"#donuts"},
        {id: 7, text: "Vue", link:"#vue"}
    ];

    var NavigationComponent = Vue.component('vue-nav-li', {
        props: ['navlink'],
        template: '<li><a v-bind:href="navlink.link"><div>{{ navlink.text }}</div></a></li>'
    });
    
    var NavigationVue = new Vue({
        el: "#Vue-nav",
        components: {
            'nav-component': NavigationComponent
        },
        data: {
            navigationItems: navigationTabs
        }
    });
    
    var crazyDataObj = {
        thursday: "blursday",
        perplexing: 3,
        notANumber: false,
        someFunct: function(){
            if(this.notANumber){
                crazyDataObj.thursday = "wednesday";
            }else{
                crazyDataObj.perplexing = 90;
            }
            console.log(crazyDataObj.thursday + " " + crazyDataObj.perplexing);
        },
        main: [
            {hurt: "today"},
            3,
            false,
            "avec with con",
            {moreObjects: "this"}
        ]
    };

    var mainVue = new Vue({
        el: "#vueHide",
        data: {
            crazy: crazyDataObj.main,
            isHidden: false,
            buttonText: "Hide",
            items: [
                { content: "haha", value: "har har", show: false },
                { content: "good byye", value: "hello", show: true },
                { content: "now now", value: "there there", show: true }
            ],
            userProfile:{
                name: "Khan",
                age: 999
            }
        },
        randomProp: "so random:",
        methods: {
            hideThis: function () {
                if (this.isHidden) {
                    this.isHidden = false;
                    this.buttonText = "Hide";
                    for(i=0; i<this.items.length; i++){
                        this.items[i].show = false;
                    };
                    for(i=0; i<forVue.items.length; i++){
                        forVue.items[i].anotherValue = true;
                    };
                } else {
                    this.isHidden = true
                    this.buttonText = "Show";
                    for(i=0; i<this.items.length; i++){
                        this.items[i].show = true;
                    };
                    for(i=0; i<forVue.items.length; i++){
                        forVue.items[i].anotherValue = false;
                        forVue.items[i].content = forVue.parentData;
                    };
                }
            },
            hellofunction: function(key, value){
                Vue.set(this.userProfile, key, value);
            }
        }
    });
    
    var forVue = new Vue({
        el: "#vueforpractice",
        data: {
            parentData: "another test",
            somethingData: "dat data",
            displayThis: true,
            items: [
                {content: "first content", anotherValue: false},
                {content: "second content", anotherValue: true},
                {content: "last one", anotherValue: true}
            ]
        },
        somethingRandom: "booga booga",
        methods: {
            fakeFunction: function () {
                if (mainVue.isHidden) {
                    this.displayThis = false;
                    this.somethingData = "dope";
                } else {
                    this.displayThis = true
                    this.somethingData = "fo sho";
                }
            }
        }
    });
    
    
    var isWeekday = function () {
        var d = new Date();
        var n = d.getDay();
        if (n > 4) {
            return false;
        } else {
            return true;
        }
    };

    var donutVue = new Vue({
        el: '#vueDonuts',
        data: {
            emailRoot: "mailto:?bcc=Craig.Trulove@perficient.com;Amber.Fuller@perficient.com;Hunter.Smith@perficient.com;Jack.Marsh@perficient.com;Lucas.Smith@perficient.com;Jeremy.Sao@perficient.com;Genevieve.Palmich@perficient.com;Zach.Gay@perficient.com;Venice.Thacker@perficient.com;Will.Sullivan@perficient.com;michael.yao@perficient.com;Chase.Spivey@perficient.com;Matt.Haneburger@perficient.com;Shu.Jackson@perficient.com;Courtney.Dean@perficient.com;Jason.Barrett@perficient.com;george.chang@perficient.com;Nick.Sturdivant@perficient.com;Brian.Ball@perficient.com;Ryan.Selley@perficient.com;TL.Stephanchick@perficient.com;Corey.Smith@perficient.com;Justin.Combs@perficient.com;matt.connolly@perficient.com;bill.veldman@perficient.com;mike.ball@perficient.com;Jeffrey.Correa@perficient.com;Larry.Thomas@perficient.com;ravind.budhiraja@perficient.com;Marshall.Sorenson@perficient.com;Amelie.VonFluegge@perficient.com;Joshua.Hulsey@perficient.com&subject=Donuts!&body=Hey everyone, %0D%0A%0D%0AI'll be bringing in donuts",
        },
        methods: {
            dateTheEmail: function () {
                if (isWeekday()) {
                    return this.emailRoot + " tomorrow!";
                } else {
                    return this.emailRoot + " Monday!";
                }
            }
        }
    });
}
