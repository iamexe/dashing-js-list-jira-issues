class Dashing.JiraListIssuesJql extends Dashing.Widget

 ready: ->
   # This is fired when the widget is done being rendered
   
 onData: (data) ->
    if data.noproblems is false
      $(@node).css({ "background-color": "#990033" })
    else $(@node).css({ "background-color": "teal" })
   # Handle incoming data
   # You can access the html node of this widget with `@node`
   # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.
   
   
