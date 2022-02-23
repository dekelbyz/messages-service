<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://tkctl.tikalk.com/images/we-full-stack.png" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This is an Express.js messages micro-service I wrote as
part of a home assignment provided to me by Tikal</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a messages micro-service. <br>
With this restfulAPI you will be able to send messages to your friends via HTTP requests. <br><br>
Assuming you have `Docker` installed on your computer, you will be able to <br>
load this project along side other micro-services and mongoDB that belong to this project easily. <br>
Learn more about `Docker`: https://docs.docker.com/get-started/

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
axios.post('http://localhost:3000/messages/all',
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
