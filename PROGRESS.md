Progress

1) User Authentication

* Devise for ease of setup, industry standard, backend authentication with Rails

* Integrating devise generated code (controllers,models, views) with routes and rest of application 

* Using Foundation as CSS template is great, sometimes there are conflicts because certain elements get pre-styled that you don't want. In that case, you either change the class name to make it unique and apply own css file or you build on top of the Foundation CSS file by including the specific CSS files after Foundation so it has higher precedence. 

* To apply custom styling overall without any Foundation (which means not using application.js since Foundation is compiled there), you need to render a different layout which means writing specific rendering layouts in the devise controllers so the views can correspond.

* Don't try breaking up the asset pipeline, if there is a collision, just use different class names or resolve the collision using overwriting precedence. 

* Use JBuilder to specify parts of the JSON and add additional information to base JSON object (can use associations here etc), controls what gets sent to the client side.

* JBuilder is for making the controller cleaner and tacking on data and formatting the JSON nicely to send back to the client side
ActiveRecord fancy stuff like includes, joins is when you'd want to do something like (messages -> find users -> grab information within users etc)

* Built a functional webchat app using this guide - https://blog.pusher.com/making-reactjs-realtime-with-websockets/ 
* Example here - https://github.com/pusher-community/react-realtime-chat

IMPORTANT NOTE: Ruby/Rails executes on the server side, Javascript is on the client side so
if I wanted to access Ruby/Rails methods (such as Devise current_user) the only way I can
call it is either through ajax requests to a controller which will handle the data, using document
cookie or using hidden input tags. Using document cookie or hidden input will work but if for any
reason you want a one page app in React - the cookie or tag will never change, so if you wanted
response React front end auth, the tags/cookie wouldn't change - you'd have to do ajax request.
However since I have auth all in my backend, when you login or sign up - that's it. All the 
information I need for my session will be in the cookie/tag until I logout. 

-- A BETTER WAY would be to include a script tag in the application layout - and inside the 
script tag, use ruby interpolation to be able to use 'current_user' or any ruby methods, then
append the information that was calculated to the window, so now when you run reactJS - you
can reference the window as it has variables binded to it - so in this case window.current_user has the information we needed on the client side.

React Router is really powerful with ReactJS. I was trying to pass around ids and data between my message_store, channel_store, messageView, and channelView to make sure they line up - so a specifical channel will trigger a specific message list to be shown. This involved a lot of code and passing around a lot of information in the html and javascript. 

Way to solve it was to actually set up react router - so since my page is a single chat interface - I rendered based on '/' or '/:id' and I passed that id (or a default one) as a prop to the children of my parent global component (which is App). The children are all the main components underneath it (ChannelView, HeaderView, FooterView, MessageView, StreamView). Since the channelView and messageView are siblings, I simply passed the props.channelId to both of them, so they both have reference to the :id in the 'url' - so they will always be on the same page. I just have to trigger the listener in messageView based on channel click so the messagelist will update. Since the url will be always the same, I can create actions based on the channelView which will associate with the messageView and anything else on the page.

TODO: Ask about why refresh pushes the scroll a little down on the chat, fix flexbox weirdness where it collapses when we dont want it to

TODO: Hardcore a sleep timer which allows all the components to load through the flux architecture -
based on the sleep timer, show a javascript/css spinner or something and then when the time is gone,
remove the css timer