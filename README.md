<p align="center">
  <a href="https://www.tikalk.com/" target="blank"><img src="https://tkctl.tikalk.com/images/we-full-stack.png" width="320" alt="Tikal Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This is an Express.js messages micro-service I wrote as
part of a home assignment provided to me by Tikal</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  <div align="center">
  <div style="display: flex;">
    <a href="#">
    <div style="display: flex;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="94"/> 
      <img src="https://i.ibb.co/tqHYP3q/pngwing-com.png" height="130"/> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"  height="94"/> 
  </div>  
        <div style="display: flex;">
     <img src="https://ky-solutions.fr/nuxt/img/typescript.5c70a1d.png" height="95"/> 
      <img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2013-2015.png" height="100"/> 
    </div>
    </a>
    </div>
</div>

## Description

This is a messages micro-service. <br>
With this restfulAPI you will be able to send messages to your friends via HTTP requests. <br><br>
Assuming you have `Docker` installed on your computer, you will be able to <br>
load this project along side other micro-services and mongoDB that belong to this project easily. <br>

<span><b>Learn more here:
<a href="https://docs.docker.com/get-started/" target="blank"><img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2013-2015.png" width="50" alt="Docker Logo" /></a></b></span>

## Steps

First, you will need to `REGISTER` and `LOGIN` the app. <br> <br>
The way of doing that is by following the `auth-service` I have developed for this project. <br>
learn more about it: https://github.com/dekelbyz/auth-service. <br><br>
With that been done, you will gain an `access_token` variable. <br><br>
To activate the `messages-service` and be able to write messages to your friends, <br>
you will need to provide your `access_token` with every HTTP request you make for the `messages-service`.

example path: http://localhost:2000/ <br><br>

## Send a message

**POST**

<b>Endpoint: messages/send</b>

<b>Parameters:</b>

| Type        | Name                            | Description                                                  | Schema |
| ----------- | ------------------------------- | ------------------------------------------------------------ | ------ |
| **Body**    | **username** <br>_required_     | The username of the person you want to send message to.      | string |
| **Body**    | **content** <br>_required_      | Your message content.                                        | string |
| **Headers** | **access_token** <br>_required_ | The access_token generated for you while logging in the app. | string |

**RULES**

```bash
  THE RECIPIENT USER MUST BE A REGISTERED ONE. (USERNAMES ARE CASE SENSITIVE)
  access_token MUST BE A VALID ONE. (THEY EXPIRE WITHIN 2 HOURS)
```

**EXAMPLE**

```bash
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer access_token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "recipient": "Dekel asdasd",
  "content": "you are one hell of a programmer!"
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:2000/messages/send", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

<br><br><br>

## Get messages

**GET**

<b>Endpoint: messages</b>

| Type        | Name                            | Description                                                  | Schema |
| ----------- | ------------------------------- | ------------------------------------------------------------ | ------ |
| **Headers** | **access_token** <br>_required_ | The access_token generated for you while logging in the app. | string |

example:

```bash
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer access_token");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:2000/messages/all", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## What's now?

```bash
 That is all for now! :)
  I would really appreciate an honest opinion.
```

## Author - Dekel Bayazi.
