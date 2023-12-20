function createNotification(title, options) {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      var notification = new Notification(title, options);
      setTimeout(() => notification.close(), 3000);        // this checks if the notifications got enabled by the user (if granted it spams)
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) { //this tries to repeat the request of allowing when denied
        if (permission === "granted") {
          var notification = new Notification(title, options);
          setTimeout(() => notification.close(), 3000); 
        }
      });
    }
  }
  
  // the different notifs you can get
  const notifications = [
    {
      title: "INSANITY",
      body: "LEFT RIGHT LEFT RIGHT UP THIS WEBSITE WILL MAKE YOUR HEAD EXPLODE"
    },
    {
      title: "AYOOO!?!?!?!?",
      body: "IS THAT THE GRIM REAPER????!??!?!?!??"
    },
    {
      title: "QUOTE OF THE DAY????",
      body: "you can start up your car. but you only start going when you hit the gas"
    }
  ];
  
  // the loop repeating notifications every 5 seconds
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * notifications.length);
    const randomNotification = notifications[randomIndex];
    createNotification(randomNotification.title, {
      body: randomNotification.body,
      icon: "img/bxs-hot.svg" 
    });
  }, 5000); 

//---------------------------------------------------------------------------------------------------------------------


const gifURLs = [
  'img/ezgif.gif',              //the gifs that will be used
  'img/hi-staff-staff.gif',
  'img/dance-party.gif',
  'img/garfiel-garfield.gif',
  'img/dog-stare-zoom.gif',
  'img/me-when-the-meme.gif',
  'img/me-when.gif',
  'img/caption-8.gif',
  'img/get-real-meme.gif',
];

function openPopup() {
  const width = 400;   //decides where you the gif goes
  const height = 300;
  const leftPos = Math.floor(Math.random() * (window.screen.width - width));
  const topPos = Math.floor(Math.random() * (window.screen.height - height));

  const randomGifURL = gifURLs[Math.floor(Math.random() * gifURLs.length)];   //randomizes which gif gets used
  const popup = window.open('', '_blank', `width=${width},height=${height},left=${leftPos},top=${topPos}`); //opens the pop up

  if (popup) {
    const gifHTML = `
      <img id="popupGif" src="${randomGifURL}" alt="Popup GIF" style="width: 100%; height: 100%;">
    `;        

    popup.document.write(gifHTML);

    popup.focus(); // the popup gains focus
  }
}

// opens the gif every 10 secs
function openPopupEvery10Seconds() {
  setInterval(openPopup, 7000); 
}

// opens the popup every 10 secs using the function above
window.onload = openPopupEvery10Seconds;