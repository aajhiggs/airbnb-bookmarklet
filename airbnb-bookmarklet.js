javascript:(function(){ 

  var locationString = 'London, UK',
      maxPrice = 100,
      mapZoom = 14,
      otherVars = "",
      checkInDay = "Monday",
      nights = 2,
      offset;
      
  switch (checkInDay) {
    case 'Monday': offset = 7; break;
    case 'Tuesday': offset = 8; break;
    case 'Wednesday': offset = 9; break;
    case 'Thursday': offset = 10; break;
    case 'Friday': offset = 11; break;
    case 'Saturday': offset = 12; break;
    case 'Sunday': offset = 13; break;
  }
  
  locationString = locationString.replace(/[\s,]/gi,'-');
  
  function formatDate(d) {
    return ("0" + d.getDate()).slice(-2)+'-'+("0" + (d.getMonth() + 1)).slice(-2)+'-'+d.getFullYear();
  }

	function getDates() {
	  d = new Date();
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:1),
	  	  checkin = new Date(d.setDate(diff+offset)),
	  	  checkout = new Date(d.setDate(diff+offset+nights));
	  return new Array(
	  	formatDate(checkin),
	  	formatDate(checkout)
	  );
	}

	var dates = getDates();
	
	window.location.href = "https://www.airbnb.co.uk/s/"+locationString+"?checkin="+dates[0]+"&checkout="+dates[1]+"&price_max="+maxPrice+"&zoom="+mapZoom+otherVars; 
}());
