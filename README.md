# Slackit

[Slackit][heroku]

[heroku]: http://slack-it.herokuapp.com

Slackit is a full-stack web application inspired by Slack with built-in Reddit functionality. It is built with Ruby on Rails on the backend and React JS on the frontend. React is combined with the Flux architecture to handle scaleability and single-direction data flow.

It consists of three core components. The channel component lists all the current channels the user is subscribed to. The chat component lists all the messages that correspond to the current channel. The stream component streams any new Reddit posts based on the channel name (if the channel name is an applicable subreddit).

## Features & Implementation

### Backend User Authentication

Slackit utilizes a Devise which is a standardized library for entry level authentication in web applications. It has all the necessary functions and validations to ensure a secure and consistent user experience. The password is hashed into a password token using BCrypt. The usual validations such as no duplicate emails, matching passwords, and minimum password length apply here. 

There is also a guest feature - which will log you in as an anonymous user with full user functionality. This is to demo to users who do not want to create an account or wish to remain anonymous when using the application.

### Single-Page App (excluding authentication)

Many industry chat apps rely on a single-page chat interface once the user creates an account or logs in. Slackit relies on this model to produce its own version of chat. As soon as the user is authenticated, either through account login, account creation, or guest login, the
user will be sent to a root page which will be the starting point for rendering the frontend using ReactJS.

React Router is a library part of React that simplifies a lot of the URL management and passing of data. Slackit uses the router to information to the three core components which allow them to work seamlessly together.

### Channel Component 

The channel component's core functionality is to indicate to the user which channel they are currently 'watching'. These channels could be public or private. The public channels are global and automatically come with every new account. The private channels allow users to invite
anyone so long as they know their email. Users can be subscribed to many channels and many channels can have many users. They are linked together in the database through a join table called ChannelUsers. When creating a channel, one is automatically subscribed to it and an entry is made. One can also be invited to the channel which will also create an entry in the join table. The ChannelStore is responsible for executing any callbacks established from any view component. Anytime the channels update for a specific user, the Flux Architecture will be followed which either creates or fetches all the channels. Once the store retrieves the dispatch saying flux loop has started, the store will execute the callbacks which in turn will allow the components to re-render based on potentially new states. In this case, the new state would be a new channel belonging to the user. 

### Chat Component

The chat component is responsible for fetching all the messages anytime the messages within a 'watched' channel has been updated. It also immediately fetches all the past messages from within a channel upon mount. It also uses the flux architecture in order to keep up to date messages without having to go to a new page. 


### Stream Component

The stream component uses Pusher to pull in any new posts from any subreddits that you have been subscribed to. The component is inactive by default. The way to activate it is to set the state of the component based on the click of the Reddit alien in the header. Incoming posts can will link you to the live reddit link.


![image of chat interface](https://github.com/JeffNguyen/Slackit/blob/master/202.png)


