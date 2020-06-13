
const colors = {
  beige: {
    work: "#E6E1C3"
  },
  blue: {
    work: "#7e80af"
  },
  pink: {
    work: "#caa1d4"
  },
  ceramic: {
    work: "#916051"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet">
      <title>developer profile</title>
      <style>
        body{
          font-family: 'Source Sans Pro', sans-serif;
          background-color: ${colors[data.favcolor].work};
        }
        ul{
          padding: 0;
        }
        li{
          list-style: none;
        }
        h1, h2, p {
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 300;
          margin: 0;
        }
        h1 {
          font-size: 24pt;
          line-height: 1.8;
        }
        h2 {
          font-size: 14pt;
          line-height: 1.5;
        }
        p {
          font-size: 12pt;
          line-height: 1.4;
          }
        a {
          text-decoration: none;
          color: black;
        }
        .info{
          display: inline-block;
          margin: 10px 20px;
          font-size: 18px;
        }
        .jumbotron{
          text-align: center;
          background-color: #ebebeb;
          padding: 60px;
          border-radius: 10px;
        }
        .work{
          background-color: ${colors[data.favcolor].work};
          padding-top: 80px;
          padding-bottom:115px;
          text-align: center;
        } 
        .infocard{
          height: 80px;
          width: 240px;
          text-align: center;
          margin-bottom: 20px;
          padding-top: 30px;
          display: inline-block;
          background-color: white;
          border-radius: 10px;
        }     
        .gitSect{
          width:780px;
          margin:0 auto;
        }   
      </style>
    </head>
         
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div><img src="${data.profilePic}" class="" alt="profile photo"></div>
        <h1 class="display-4">My name is ${data.name}</h1>
        <h2 class="">${data.bio}</h2>
        <p class="lead">${data.company}</p>
        <ul>
          <li class="info">          
            <a href="url"><img src="./images/map.png" width="20" height="20"> ${data.location}</a></li>
          <li class="info">            
            <a href="${data.html_url}"><img src="./images/github.png" width="20" height="20">Github</a></li>
          <li class="info">          
            <a href="${data.blog}"><img src="./images/blog.png" width="20" height="20">Blog</a> </li>
        </ul>
      </div>
    </div>

  <div class="work">
    <div class="gitSect">
      <div class="infocard">
          <h2>Public Repositories</h2>
          <p>${data.repos}</p>
      </div>
      <div class="infocard">
          <h2>Followers</h2>
          <p>${data.followers}</p>
      </div>
      <div class="infocard">
          <h2>Following</h2>
          <p>${data.following}</p>
      </div>
      <div class="infocard">
          <h2>Github Stars</h2>
          <p>${data.star}</p>
      </div>
    </div>
  </div>
</body>
</html>`

}

module.exports = generateHTML





