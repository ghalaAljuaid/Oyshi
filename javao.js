


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


function CheckPassword(){

    var password = document.getElementById("p").value;
    var cnfrmPassword = document.getElementById("cp").value;
    
    if(password.length <= 6){
     document.getElementById('mes').style.color = 'red';
     document.getElementById('mes').innerHTML  = "Password must be more than 6"
      
     
    }
    else{

	  if(password != cnfrmPassword){
		document.getElementById('mes').style.color = 'red';
        document.getElementById('mes').innerHTML  = "Password don’t match"
       
       
      }
	   if(password == cnfrmPassword){
		document.getElementById('mes').style.color = 'green';
        document.getElementById('mes').innerHTML  = "Password match"
       
       
      }
	}

    
    
	
}





