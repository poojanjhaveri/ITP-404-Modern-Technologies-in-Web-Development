// JavaScript Document

// Our main class

var ITP = {
         Widgets: {
           
         Accordion:function(parameters)		 // For accordion
         {
         this.$name=$(parameters.el);		// Store the id
         if(parameters.speed)				// Store the speed if speed is not passed in, then default speed=0
           {
             this.$speed=parameters.speed;
           }
         else
           {
            this.$speed=0;
           }
            this.$label=this.$name.find('.label');
            this.$content=this.$name.find('.content');  
         }
       }
  
    };
  
 ITP.Widgets.Accordion.prototype.init = function () {		// For initializaing - as mentioned in the assignment
           this.$content.hide();
           this.$content.first().slideDown(this.$speed);   
           this.$label.first().addClass('active');
        };
  
 ITP.Widgets.Accordion.prototype.performaction = function () {		// For performing action as mentioned in assignment
    var self=this;
	this.$label.on('click', function() {							// Event Delegation
    var displayProperty = $(this).next(this.$content).css('display');	// get the display property
    
	if (displayProperty == 'none') 
	{
		self.$label.removeClass('active');    				// Remove active class from all other panels  
		$(this).addClass('active');      					/* Add class to the current panel */
		self.$content.slideUp(self.$speed); 				/*Slide up all remaining panel*/ 
		$(this).next(this.$content).slideDown(self.$speed); // slideDown   
	} 
   
else {     
	$(this).next(this.$content).slideUp(self.$speed); // could use hide()
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

accordion1.init();
accordion1.performaction();

accordion2.init();
accordion2.performaction();


