Progress

1) User Authentication

* I decided to roll with Devise instead of creating a simple User Auth that we learned because it would give me more experience utilizing industry standard gems. Devise automatically creates a bunch of user functionality such as signing up with email, resetting with email, and confirming an account through email. I am currently only using it for generic account creation. 

* I need to make sure the urls link up perfectly with the overall mapping of my web app. I'm beginning to integrate the functionality in my views/layout/application file. I created a global sign out button if the user is logged in. If I were to extend the functionality of Devise, I can either modify the existing generated views html and/or extend the controllers functionality - which can be found [here](https://github.com/plataformatec/devise/tree/master/app/controllers/devise)

* Setting up a general CSS foundation is great, but applying custom styling to specific controller actions/views means that you must also render a different layout for the specific action. For devise, this meant writing specific registrations/sessions controller and calling super to inherit what was already written - but also specifically calling layout to render the specific layout which includes a specific css. This is bundled together with application.css.

PROBLEM - when the asset pipeline bundles, for some reason - going from page to page which utilizes the same class (and potentially different stylings) doesn't reset. When I go from sessions to registrations - the style in sessions of the login box overwrites and doesn't change within the registrations. It might be the way rails deals with bundling.

POTENTIAL SOLUTION - I could maybe name the classes differently so there is no namespace collision, but that would ruin the whole point of CSS.

SOLUTION TO CSS - Don't trying breaking up the asset pipeline, don't worry about if css files get bundled together and can't figure out namespacing where a class should apply to two different pages with different styles. Just slightly alter the classes, get the style to work, and move on.

Use Jbuilder because instead of just always rendering the whole json of the object created in a specific
controllre, you can control what gets sent down the pipeline. For example, maybe u want to send more information associated with a message - u can build that up in jbuilder and send it to the client side for immediate use.

Built a functional webchat app using this guide https://blog.pusher.com/making-reactjs-realtime-with-websockets/ it needed a bit of tweaking but they have a great example here https://github.com/pusher-community/react-realtime-chat

Built a web chat app for single instance in which the user is connected to the server - once its refreshed, all the messages are gone. Now expanding it to fit flux architecture.