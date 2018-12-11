/*window.addEventListener('load', function () {*/
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var stepProcess= new Vue({
	el:'#stepProcess',
	data:function(){
		return{
			showStep1:true,
			showStep2:false,
			showStep3:false,
			isDisabled2:true,
			isDisabled3:true,
		}
	},
	methods:{
		nextStep: function(){
			console.log(this);
			this.showStep1=false;
			this.showStep2=true;
			this.showStep3=false;
			this.isDisabled2=false;
			
			},
		nextStep2: function(){
			
			console.log(this);
			this.showStep1=false;
			this.showStep2=false;
			this.showStep3=true;
			this.isDisabled3=false;
			},
		previousStep1: function(){
			this.showStep1=true;
			this.showStep2=false;
			this.showStep3=false;
			
		},
		previousStep2: function(){
			this.showStep1=false;
			this.showStep2=true;
			this.showStep3=false;
			
		}
	}
/*});*/



})