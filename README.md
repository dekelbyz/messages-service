<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://tkctl.tikalk.com/images/we-full-stack.png" width="320" alt="Tikal Logo" /></a>
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
        <img href="localhost" src="https://camo.githubusercontent.com/0d358238ba8c67946e6555aad926b947e1a5048f/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667" height="94"/> 
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

## STEPS

First, you will need to `REGISTER` and `LOGIN` the app. <br> <br>
The way of doing that is by following the `auth-service` I have developed for this project. <br>
learn more about it: https://github.com/dekelbyz/auth-service. <br><br>
With that been done, you will gain an `access_token` variable. <br><br>
To activate the `messages-service` and be able to write messages to your friends, <br>
you will need to provide your `access_token` which every HTTP request you make for the `messages-service`.

example path: http://localhost:2000/ <br><br>

examples will be provided with the `axios` syntax.

## SEND A MESSAGE

**POST**

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
axios.post('http://localhost:2000/messages/send',
  params: {
  recipient: "ElonMusk",
  content:" Hey Elon! Seems like Dekel is really passionate about backend development."
  },
  headers: {
  authorization: access_token
  })
```

## GET MESSAGES

**GET**

| Type        | Name                            | Description                                                  | Schema |
| ----------- | ------------------------------- | ------------------------------------------------------------ | ------ |
| **Headers** | **access_token** <br>_required_ | The access_token generated for you while logging in the app. | string |

example:

```bash
axios.post('http://localhost:3000/messages',
  headers:{
  authorization: access_token
  })
```

## What's now?

```bash
 That is all for now! :)
  I would really appreciate an honest opinion.
```

## Author - Dekel Bayazi.
