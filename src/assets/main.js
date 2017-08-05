$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/jimika.json',
  	dataType: 'jsonp',
  	success: function(response){
  		var coursesCompletedArray = response.courses.completed;
  		coursesCompletedArray.forEach(function(course){
  			
  			var courseDiv = $(document.createElement('div'));
  			courseDiv.addClass('course');
  			courseDiv.prepend('<h3>'+ course.title+'</h3>');
  			
  			var img = $(document.createElement('img'));
  			img.attr({src : course.badge});
  			img.prependTo(courseDiv);
  			

			var link = $(document.createElement('a'));
  			link.attr({target : "_blank", href : course.url});
  			link.addClass('btn btn-primary');
  			link.text("See Course");

  			link.appendTo(courseDiv);

  			courseDiv.appendTo($('#badges'));
  		});

  	}
  });

});

