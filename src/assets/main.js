$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/jimika.json',
  	dataType: 'jsonp',
  	success: function(response){
  		var coursesCompletedArray = response.courses.completed;
  		coursesCompletedArray.forEach(function(course){
  			var courseDiv = $(createElement('div'));
  			courseDiv.addClass('.course');
  			$('#badges').append(courseDiv);
  		})

  	}
  });

});

