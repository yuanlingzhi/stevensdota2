$(document).ready(function()
		{
	

	
			$(".Index_Module img").each(function(){
				$(this).mouseenter(
					function()
					{
						$(this).animate({ 
						    width:  "200px",
						    height: "250px", 
						  }, 1000 );
						$(this).animate({ 
						    width: "200px",
						    height: "200px", 
						  }, 1000 );
					}
				);
				
			});
		});