// JavaScript Document


var ITP = {
         Widgets: {
           
         Accordion:function(parameters)
         {
			
         this.$name=$(parameters.el);
         if(parameters.speed)
           {
             this.$speed=parameters.speed;
           }
         else
           {
            this.$speed=0;
           }
		   console.log(this.$name,this.$speed);
            this.$label=this.$name.find('.label');
            this.$content=this.$name.find('.content');  
         }
       }
  
    };
  
 ITP.Widgets.Accordion.prototype.init = function () {
	 		console.log(this.$content);
           this.$content.hide();
           this.$content.first().show();   
           this.$label.first().addClass('active');
        };
  
 ITP.Widgets.Accordion.prototype.performaction = function () {
    var self=this;
	
	this.$label.on('click', function() {
    var displayProperty = $(this).next(this.$content).css('display');
    
if (displayProperty == 'none') 
{
self.$label.removeClass('active');    // Remove active class from all other panels  
$(this).addClass('active');      /* Add class to the current panel */


self.$content.slideUp(); /*Slide up all remaining panel*/ 
$(this).next(this.$content).slideDown(300); // slideDown
    
} 
   
else {
      
$(this).next(this.$content).slideUp(300); // could use hide()
$(this).removeClass('active');       
      
    } 
});  
};


 
    var accordion1 = new ITP.Widgets.Accordion({
        el: '#accordion1',
        speed: 300
    });
var accordion2 = new ITP.Widgets.Accordion({
        el: '#accordion2'
    });

    
 console.log("Start");

accordion1.init();
accordion1.performaction();

accordion2.init();
accordion2.performaction();


