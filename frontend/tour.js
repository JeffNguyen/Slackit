var Shepherd = require('tether-shepherd');

var Tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
  }
});

var defaultButtons = [
  {
    text: "Back",
    action: Tour.back
  },

  {
    text: "Next",
    action: Tour.next
  },
];

Tour.addStep('tutorialStart', {
  title: 'Welcome to Slackit!',
  text: 'Follow the guide for a quick tutorial of Slackit features!',
  showCancelLink: true,
  buttons: [
    {
      text: "Next",
      action: Tour.next
    },
  ]});

Tour.addStep('publicChannelIntro', {
  text: 'These are public channels - every new user is automatically subscribed to them and anyone can write messages.',
  attachTo: '.channel-selected right',
  showCancelLink: true,
  buttons: defaultButtons
});

Tour.addStep('privateChannelIntro', {
  text: 'Users can create their own private channel here - and add users through email. Try it now!',
  attachTo: '.create-channel-button right',
  showCancelLink: true,
  buttons: defaultButtons
});

Tour.addStep('privateChannelShow', {
  text: 'Here is a private channel. If a private channel is selected - there will be an add person icon, which means you can invite others to join!',
  attachTo: '.channel-unselected-private right',
  showCancelLink: true,
  buttons: defaultButtons
});

Tour.addStep('redditIntro', {
  text: 'Clicking this button will allow you to listen to new Reddit subreddit posts. Subreddits are determined by the channel currently selected. Only valid subreddits apply. Try listening in on a popular subreddit which will stream newer posts more frequently.',
  attachTo: '.reddit-button bottom',
  showCancelLink: true,
  buttons: defaultButtons
});

Tour.addStep('tutorialFinish', {
  title: 'Hooray!',
  text: 'You have finished the tutorial! You can always click the info button at the top right to go through it once more.',
  showCancelLink: true,
  buttons: [
      {
        text: "Back",
        action: Tour.back
      },
      {
        text: "Done",
        action: Tour.complete
      }
    ]
  });

module.exports = Tour;