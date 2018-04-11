window.onload = function () {

    new Vue({
        el: '#vue',
        data: {
            isHidden: false,
            buttonText: "Hide"
        },
        methods: {
            hideThis: function () {
                if (this.isHidden) {
                    this.isHidden = false;
                    this.buttonText = "Hide";
                } else {
                    this.isHidden = true                    
                    this.buttonText = "Show";
                }
            }
        }
    });

    var isWeekday = function(){
        var d = new Date();
        var n = d.getDay();
        if(n > 4){
            return false;
        }else{
            return true;
        }
    };

    new Vue({
        el: '#vueDonuts',
        // computed: {
        //     emailWithDate: function(){
        //         if(isWeekday()){
        //             return this.emailRoot + " tomorrow!";
        //         }else{
        //             return this.emailRoot + " Monday!";
        //         }
        //     }
        // },
        data:{
            emailRoot: "mailto:?bcc=Craig.Trulove@perficient.com;Zach.Gay@perficient.com;Venice.Thacker@perficient.com;Will.Sullivan@perficient.com;michael.yao@perficient.com;Chase.Spivey@perficient.com;Matt.Haneburger@perficient.com;Shu.Jackson@perficient.com;Courtney.Dean@perficient.com;Jason.Barrett@perficient.com;george.chang@perficient.com;Nick.Sturdivant@perficient.com;Brian.Ball@perficient.com;Ryan.Selley@perficient.com;TL.Stephanchick@perficient.com;Corey.Smith@perficient.com;Justin.Combs@perficient.com;matt.connolly@perficient.com;bill.veldman@perficient.com;mike.ball@perficient.com;Jeffrey.Correa@perficient.com;Larry.Thomas@perficient.com;ravind.budhiraja@perficient.com;Marshall.Sorenson@perficient.com;Amelie.VonFluegge@perficient.com;Joshua.Hulsey@perficient.com&subject=Donuts!&body=Hey everyone, %0D%0A%0D%0AI'll be bringing in donuts",
        },
        // mounted: function(){
        //     if(isWeekday()){
        //         this.emailDisplay = this.emailRoot + " tomorrow!";
        //     }else{
        //         this.emailDisplay = this.emailRoot + " Monday!";
        //     }
        // },
        methods: {
            dateTheEmail: function(){
                if(isWeekday()){
                    return this.emailRoot + " tomorrow!";
                }else{
                    return this.emailRoot + " Monday!";
                }
            }
        }
    });

    new Vue({
        el:'#vuewatchtest',
        data:{

        },
        watch:{

        }
    });

    Vue.component('button-counter',
    {
        data: function(){
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    });

    new Vue({ el: '#vuecounter'})
}
