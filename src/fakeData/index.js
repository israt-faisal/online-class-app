

const fakeData = 
[{ 
      

      "course": "Logo Design Mastery in Adobe Illustrator",
      "price": 87,
      "name": "Erma Sanders"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcourses.yesimadesigner.com%2Fcourses%2Fphotoshop-cc-masterclass&psig=AOvVaw0IAit8TVfm5Cgdbf1Gdpce&ust=1608605018546000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKClneiG3u0CFQAAAAAdAAAAABAD",
      "course": "Adobe Photoshop CC- Advanced Training Course",
      "price": 70,
      "name": "Sharpe Chan"
    },
    {
      "picture": "https://www.google.com/imgres?imgurl=https%3A%2F%2Frapidfireart.com%2Fwp-content%2Fuploads%2F2020%2F06%2FTHUMBNAIL-How-to-Draw-a-Realistic-Eye-From-the-Side-324x235-1.jpg&imgrefurl=https%3A%2F%2Frapidfireart.com%2Ffree-drawing-tutorials%2F&tbnid=jnVb6ScyigJ5rM&vet=12ahUKEwj2_P2Ah97tAhXRV98KHXqGB9MQMygPegUIARDJAQ..i&docid=EVx8DOBfh6cLqM&w=324&h=235&q=draw&ved=2ahUKEwj2_P2Ah97tAhXRV98KHXqGB9MQMygPegUIARDJAQ",
      "course": "How to Draw from Beginner to Master",
      "price": 123,
      "name": "Elva Floyd"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fblog%2Fintroduction-graphic-design-part-1%2F&psig=AOvVaw0SeO2NZwcHQ9LVIeo_4RIt&ust=1608605171512000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi6wrGH3u0CFQAAAAAdAAAAABAD",
      "course": "Graphic Design Masterclass - Learn Great Design",
      "price": 85,
      "name": "Carla Waller"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Frailsware.com%2Fblog%2Fwhat-is-node-js-used-for%2F&psig=AOvVaw008FAgxnF298dpBUcW4se3&ust=1608605203633000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiv18CH3u0CFQAAAAAdAAAAABAD",
      "course": "Code with Node JS-2020",
      "price": 75,
      "name": "Tanya Durham"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westagilelabs.com%2Fblog%2Fwhy-is-software-testing-and-qa-important-for-any-business%2F&psig=AOvVaw0ggcTRVqMKiGc7lwFGDs8E&ust=1608605243480000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCY0tOH3u0CFQAAAAAdAAAAABAD",
      "course": "Business Analyst: Software Testing Process and Technique",
      "price": 65,
      "name": "Malinda Walls"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fswlh%2Ftop-web-development-trends-you-need-to-consider-for-your-project-in-2019-37e4c83b691d&psig=AOvVaw1WHX1bYpHaPodmIn7T_kgO&ust=1608605281108000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCK8eaH3u0CFQAAAAAdAAAAABAD",
      "course": "The Web Developer Bootcamp-2020",
      "price": 86,
      "name": "Herrera Hutchinson"
    },
    {
      "picture": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog-assets.freshworks.com%2Flive-chat-software%2Fwp-content%2Fuploads%2F2020%2F09%2F24113114%2FBlog_Banner_v1-01-1.jpg&imgrefurl=https%3A%2F%2Fwww.freshworks.com%2Flive-chat-software%2Fcustomer-engagement%2Fwhatsapp-automation-blog%2F&tbnid=WBxvH1d7ThgvYM&vet=12ahUKEwjrvNP2h97tAhUxzlkKHSZQB-sQMygBegUIARC0AQ..i&docid=33zesXa9fXILAM&w=6250&h=2500&q=watsapp%20automation&ved=2ahUKEwjrvNP2h97tAhUxzlkKHSZQB-sQMygBegUIARC0AQ",
      "course": "Watsapp Automation Using Python",
      "price": 91,
      "name": "Deborah Phelps"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slideshare.net%2FJoshuaPierce%2Ffundamentals-of-business-analysis-64589964&psig=AOvVaw0J5tI9EosN-cqWEWXv7w4P&ust=1608680423508000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxz-Gf4O0CFQAAAAAdAAAAABAD",
      "course": "Business Analysis Fundamentals",
      "price": 71,
      "name": "Allyson Whitehead"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.daniel-one.com%2Fcreate-sales-strategy-b2b&psig=AOvVaw0vdqYKRgCGBS1nICz_gSnF&ust=1608680484704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiCp_-f4O0CFQAAAAAdAAAAABAD",
      "course": "B2B Sales Masterclass: People-Focused Selling",
      "price": 54,
      "name": "Carroll Anderson"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.novelvox.com%2Fcareers%2Fcareer-blogs%2Ftech-talk-on-product-management%2F&psig=AOvVaw09s8i9YItsPHFZMwlT24Cz&ust=1608680546603000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjC1J2g4O0CFQAAAAAdAAAAABAD",
      "course": "Product Management",
      "price": 92,
      "name": "Erickson Baldwin"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techmaish.com%2F6-top-cool-video-production-gadgets%2F&psig=AOvVaw1HIpnHZdPICAyalAnlCtdZ&ust=1608680629566000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiMk8Og4O0CFQAAAAAdAAAAABAD",
      "course": "The Complete Video Production Bootcamp",
      "price": 39,
      "name": "Stacie Frazier"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techradar.com%2Fhow-to%2Fphotography-video-capture%2Fcameras%2F77-photography-techniques-tips-and-tricks-for-taking-pictures-of-anything-1320768&psig=AOvVaw3Us5nwMxK7xCqhe-A7raW0&ust=1608680680633000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODUrNig4O0CFQAAAAAdAAAAABAD",
      "course": "Your Road to Better Photography",
      "price": 89,
      "name": "Amie Rojas"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.td.org%2Finsights%2Fthe-5-types-of-leaders&psig=AOvVaw2Qs7HGoFQTQ6Y2pYFyV0VP&ust=1608680729128000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCZkfKg4O0CFQAAAAAdAAAAABAD",
      "course": "Leadership: Practical Leadership Skill",
      "price": 91,
      "name": "Heidi Mccoy"
    },
    {
      "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpmtips.net%2Farticle%2Fthe-art-of-negotiation-in-project-management&psig=AOvVaw2DsU6VBuONO57plTvBE55V&ust=1608680777406000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiOwoqh4O0CFQAAAAAdAAAAABAD",
      "course": "Successful Negotiation: Master Your Negotiation Skills ",
      "price": 95,
      "name": "Wilkinson Newman"
    }
  ]

  const shuffle = a => {
    for (let i= a.length; i; i--){
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
     
    
  }
  shuffle(fakeData);
  
  export default fakeData;
  
  