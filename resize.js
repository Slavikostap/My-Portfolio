$(document).ready(function(){
		var n=$(window).height();
		$('#home-bg').css('height', n);
		$('#titlePage').css('height', n);
		$('#myPhilosophy').css('height', n);
		$('#Portfolio').css('height', n);
		$('#Photography').css('height', n);
		$('#about-bg').css('height', n);

		 
		//Scroll down to certain menu

		$('#myPhilosophyButton').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#homeButtonScroll').offset().top }, 'slow');
           //$('#stripe').animate({left:'+=100px'} }, 'slow',);

        });  


		$('#myPortfolioButton').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPhilosophyScroll2').offset().top }, 'slow');
        });

        $('#myPhotographyButton').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPortfolio2').offset().top }, 'slow');
        });

        $('#ContactButton').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPhotography2').offset().top }, 'slow');
        });  

        //****************************
        //		Scroll donw/up
        //****************************
        	//Home
        $('#myPhilosophyScroll').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#homeButtonScroll').offset().top }, 'slow');
        });  

        	//My Philosophy
        $('#homeButtonScroll').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  0}, 'slow');
        });  
        $('#portfolioscroll').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPhilosophyScroll2').offset().top }, 'slow');
        });  

          	//My Portfolio
        $('#myPhilosophyScroll2').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#homeButtonScroll').offset().top }, 'slow');
        });  
        $('#photographyscroll').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPortfolio2').offset().top }, 'slow');
        });  

           	//My Photography
        $('#myPortfolio2').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPhilosophyScroll2').offset().top }, 'slow');
        });  
        $('#contactmescroll').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPhotography2').offset().top }, 'slow');
        });  

           	//About & Contacts
        $('#myPhotography2').click(function(event){
            event.preventDefault();
            $('html, body').animate({ scrollTop:  $('#myPortfolio2').offset().top }, 'slow');
        });  

});

$(window).resize(function(){
        var n=$(window).height();
        $('#home-bg').css('height', n);
        $('#titlePage').css('height', n);
        $('#myPhilosophy').css('height', n);
        $('#Portfolio').css('height', n);
        $('#Photography').css('height', n);
        $('#about-bg').css('height', n);

    });











