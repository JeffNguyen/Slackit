Progress

1) User Authentication

* I decided to roll with Devise instead of creating a simple User Auth that we learned because it would give me more experience utilizing industry standard gems. Devise automatically creates a bunch of user functionality such as signing up with email, resetting with email, and confirming an account through email. I am currently only using it for generic account creation. 

* I need to make sure the urls link up perfectly with the overall mapping of my web app. I'm beginning to integrate the functionality in my views/layout/application file. I created a global sign out button if the user is logged in. If I were to extend the functionality of Devise, I can either modify the existing generated views html and/or extend the controllers functionality - which can be found [here](https://github.com/plataformatec/devise/tree/master/app/controllers/devise)

