Progress

1) User Authentication

* I decided to roll with Devise instead of creating a simple User Auth that we learned because it would give me more experience utilizing industry standard gems. Devise automatically creates a bunch of user functionality such as signing up with email, resetting with email, and confirming an account through email. I am currently only using it for generic account creation. 

* I need to make sure the urls link up perfectly with the overall mapping of my web app. I'm beginning to integrate the functionality in my views/layout/application file. I created a global sign out button if the user is logged in. If I were to extend the functionality of Devise, I can either modify the existing generated views html and/or extend the controllers functionality - which can be found [here](https://github.com/plataformatec/devise/tree/master/app/controllers/devise)

* Setting up a general CSS foundation is great, but applying custom styling to specific controller actions/views means that you must also render a different layout for the specific action. For devise, this meant writing specific registrations/sessions controller and calling super to inherit what was already written - but also specifically calling layout to render the specific layout which includes a specific css. This is bundled together with application.css.

PROBLEM - when the asset pipeline bundles, for some reason - going from page to page which utilizes the same class (and potentially different stylings) doesn't reset. When I go from sessions to registrations - the style in sessions of the login box overwrites and doesn't change within the registrations. It might be the way rails deals with bundling.

POTENTIAL SOLUTION - I could maybe name the classes differently so there is no namespace collision, but that would ruin the whole point of CSS.