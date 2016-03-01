class Dashing.JiraListIssuesJql extends Dashing.Widget

 ready: ->
   # This is fired when the widget is done being rendered
   elements = document.getElementsByClassName('issue-title');
   
    
   
   console.log("LALA");
   console.log(elements.length);
   
   #for i in [0..elements.length]
	#console.log(elements[i]);
	

 onData: (data) ->
   # Handle incoming data
   # You can access the html node of this widget with `@node`
   # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.
   
   
