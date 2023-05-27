---
description: This is a placeholder description for the rent-guarantee-graphql docker build
---

# Rent Guarantee GraphQL

## Setup

Make sure to do the initial rentals-js set up

https://bitbucket.hotterpads.com/projects/RP/repos/rentals-js/browse/apps/docs/docs/getting-started.md

## Table of Contents

- [The "What do I need to do before running the code](#the-what-do-i-need-to-do-before-running-the-code)
  - [Install Docker, Git, Node, and npm](#install-git-node-and-npm)
  - [Install and Run the Code](#install-and-run-the-code)
- [Updating the Code](#updating-the-code)
- [Docker overview](#docker-overview)
  - [Dockerfile](#dockerfile)
  - [Docker commands](#docker-commands)
  - [Building a docker image](#building-a-docker-image)
  - [Removing a docker image](#removing-a-docker-image)
  - [Start a docker container](#start-a-docker-container)
  - [Executing a docker app](#executing-a-docker-app)
  - [Stop a docker container](#stop-a-docker-container)
  - [Viewing the docker build in google cloud console](#viewing-the-docker-build-in-google-cloud-console)
  - [Pull a docker image from google cloud](#pull-a-docker-image-from-google-cloud)
- [Running rent-guarantee-graphql playground](#running-rent-guarantee-graphql-playground)
- [Running rent-guarantee-admin-web](#running-rent-guarantee-admin-web)
- [Troubleshooting](#troubleshooting)

### Install Docker, Git, Node, and npm

If you have any problems with these steps, make sure you see the [Troubleshooting](#troubleshooting) section below.

**Need to install Docker?** - https://docs.docker.com/get-docker/

**Need to install Git?** - http://git-scm.com/downloads

**Need to install Node?** We recommend using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) instead of installing from source. Installing from source works, but it's difficult to maintain your Node version later on (which is why `nvm` exists)

If you need to verify that you have NVM installed: `nvm --version`. Then install Node:

```sh
# Installs LTS version 14 of Node
# See this page for more install options: https://github.com/nvm-sh/nvm#usage
$ nvm install v14
```

To change to v14 of node:

```sh
$ nvm use v14
```

Verify you have Docker, Git, Node, and npm installed. Installing Node will install npm.

```sh
$ docker -v
$ git --version
$ node --version
$ npm --version
```

You need the version 14 of Node at this time.

### Install and Run the Code

Then **clone**, **install**, and **run** the app:

```sh
# Clone the repo to your local machine (This just clones, it does not "install")
$ git clone https://bitbucket.hotterpads.com/scm/rp/rentals-js.git

# Whichever directory you run the above command from, that directory should
# now have a folder called `rentals-js`.

# Change directory to the `rentals-js` folder:
$ cd rentals-js

# Install yarn globally
$ npm install -g yarn

# Install and run. Make sure you do these two commands from within the `react-workshop` folder:
$ yarn

# Run the rent-guarantee-graphql app
$ rjs ws run g-graphql dev

# If you have issues, read below.
```

Everything is working if the code compiles you could see the following log message in the terminal window:  
`✅ server HMR enabled { port: '4000', msg: 'server started' } No issues found. `

If something goes wrong, you may need to see the [Troubleshooting](#troubleshooting) section below.

## Updating the Code

If you've already cloned the repo but you need to get updated code, then follow these steps:

- First, `cd` into the root directory of the repo
- Then do an `ls` command to ensure you see a `package.json` file listed. If you don't you're not in the root folder of the repo
- Clear out any dirty files in your Git working tree (`git stash` is a safe way to do it, `git reset ---hard` is how to live dangerously)
- Then run these steps to get the updates:

```sh
  $ git fetch origin main && git rebase origin/main
  $ yarn
```

Then you should be able to do your `npm start` again.

## Docker overview

Docker has excellent documentation. [Docker documentation](https://docs.docker.com/get-started/overview/)

### Dockerfile

```sh

ARG base_image=us-docker.pkg.dev/rpimages-id/zillowsf/node:14.15.1-3

FROM $base_image as setup

ARG mode=production
ARG zg_env=production-docker
ARG build_number

ENV SKIP_HOOKS=true

LABEL app=rent-guarantee-graphql
LABEL stage=rent-guarantee-graphql-production

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn workspaces focus @zg-rentals/docker

RUN mkdir -p tmp/node_modules && cp -R node_modules tmp/

RUN yarn install

COPY apps/rent-guarantee-graphql/ ./apps/rent-guarantee-graphql/

RUN ./rjs tasks --lifecycle build -w rent-guarantee-graphql -vvvv --build-number=${build_number} --mode=${mode} --zg-env=${zg_env}


### RUNNER ###
FROM $base_image as runner

ENV ZG_ENV=production-docker
ENV PORT=3000
ENV API=https://hotpads.com
ENV NODE_OUT_FILE="${NODE_LOG_DIR}/rent-guarantee-graphql.log"

COPY --from=setup /usr/src/app/package.json /usr/src/app/package.json
COPY --from=setup /usr/src/app/tmp/node_modules/ /usr/src/app/node_modules/
COPY --from=setup /usr/src/app/apps/rent-guarantee-graphql/ /usr/src/app/apps/rent-guarantee-graphql/

ENTRYPOINT ["/tini", "--"]
CMD ["node", "/usr/src/app/apps/rent-guarantee-graphql/dist/server/docker-entrypoint.js"]
```

### Docker commands

```sh
  $ rjs docker
  rjs docker [options]

  Commands:
    Commands:
    rjs docker build     Build a docker image for workspaces with a Dockerfile
    rjs docker pull      Pull a docker image from google cloud
    rjs docker push      Push a docker image to artifact registry
    rjs docker start     Start a docker container
    rjs docker stop      Stop a docker container
    rjs docker tag       Tag a docker image
    rjs docker validate  Validate a running docker images healthcheck

  Global
        --dry-run        Run without actually making modifications or destructive operations    [boolean] [default: false]
    -v, --verbosity      Set the verbosity of the script output. Use -v, -vv, or -vvv for more verbose[count] [default: 0]
        --show-advanced  Show advanced options                                                                   [boolean]
    -h, --help           Show this help screen                                                                   [boolean]


  Please enter a command to run
```

### Building a docker image

```sh
  $ rjs docker build
? Which workspace would you like to build? rent-guarantee-graphql
 RUNS  Build docker image
 DONE  Build docker image
```

```sh
  $ docker image ls
  $ docker image list
  REPOSITORY                                               TAG          IMAGE ID       CREATED         SIZE
  rent-guarantee-graphql                                   20211006-0   0fc039aa73a9   4 minutes ago   1.85GB
  rent-guarantee-graphql                                   latest       0fc039aa73a9   4 minutes ago   1.85GB
  us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql   20211006-0   0fc039aa73a9   4 minutes ago   1.85GB
  us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql   latest       0fc039aa73a9   4 minutes ago   1.85GB
```

### Removing a docker image

```sh
  $ docker rmi -f 0fc039aa73a9
```

### Start a docker container

#### Production

By default the Dockerfile sets ENV ZG_ENV=production-docker.  
The docker image is reading the .env file.

```sh
  # .env file
  LOG_LEVEL=info
  API=https://hotpads.com
  PORT=3000
```

You'll probably always have to pass the -p port option, since if you don't pass the port we don't really know what it would be inside the docker image (if it is reading the env files) before we run the image.

```sh
  $ rjs docker start -p 3000:3000
```

#### Development

In development, the Admin Web tool runs the commands through a proxy GraphQL port 4000.
The docker image is reading the .env.local file.

```sh
  # .env.local file
  LOG_LEVEL=info
  API=https://comet1.testpads.net
  PORT=4000
```

To run a docker image in development use the following command:

```sh
  $ rjs docker start -w rent-guarantee-graphql --zg-env local -p {port:port}
```

You'll probably always have to pass the -p port option.

For instance,

```sh
  $ rjs docker start -w rent-guarantee-graphql --zg-env local -p 4000:4000
    RUNS  docker start
    ? Which rent-guarantee-graphql image would you like to run?  rent-guarantee-graphql:20211013-0 [60283338c5a9] - 31 minutes ago
    (1.85GB)
    DONE  docker start
    RUNS  Get docker images
    DONE  Get docker images
    {"level":40,"time":1634191674407,"pid":15,"hostname":"1c3a391f41c1","name":"server","msg":"running server"}
    {"level":30,"time":1634191674466,"pid":15,"hostname":"1c3a391f41c1","name":"healthcheck","msg":"instantiating healthcheck"}
    Enabling inline tracing for this federated service. To disable, use ApolloServerPluginInlineTraceDisabled.
    { port: '4000', msg: 'server started' }
```

List the docker container:

```sh
  $ docker container ls
    CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS                                       NAMES
    1c3a391f41c1   60283338c5a9   "/tini -- node /usr/…"   About a minute ago   Up About a minute   0.0.0.0:4000->4000/tcp, :::4000->4000/tcp   rent-guarantee-graphql-1634191672309
```

#### Run the Admin Tool from the browsing running the a docker image

From the command line run this command:

```sh
  $ rjs ws run rent-guarantee-admin-web dev
    RUNS  dev
    RUNS  watch
    DONE  dev
    RUNS  loadEnv
    DONE  loadEnv
    RUNS  dotenv
    DONE  dotenv
    RUNS  queryBosun
    DONE  queryBosun
    RUNS  createConfig
    DONE  createConfig
    RUNS  js
    DONE  js
    RUNS  webConfig
    DONE  webConfig
    RUNS  webpack compile
    DONE  webpack compile
    ℹ ｢wds｣: Project is running at http://localhost:3001/
    ℹ ｢wds｣: webpack output is served from undefined
    ℹ ｢wds｣: Content not from webpack is served from /Users/opagani/projects/zillowgroup/rentals-js/apps/rent-guarantee-admin-web
    ℹ ｢wds｣: 404s will fallback to /index.html
    RUNS  devServer
```

Then, go to the browser at:

```sh
  http://localhost:3001/rent-guarantee/adminApp
```

### Executing a docker app

```sh
  $ docker exec -it 61019d39c31f  bash
  root@61019d39c31f:/usr/src/app#
```

### Stop a docker container

```sh
  $ rjs docker stop
   RUNS  Stop
  ? Which container would you like to stop?  0fc039aa73a9 [fa8bc5c2ca22] - Up 3 minutes (0.0.0.0:4000->4000/tcp, :::4000->4000/tc
  p)
  DONE  Stop
  RUNS  Get running docker containers
  DONE  Get running docker containers
  RUNS  Stopping docker image
  DONE  Stopping docker image
```

```sh
  $ docker container ls
  CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

### Viewing the docker build in google cloud console

In order to access the Zillow group Google cloud console you need to ask permissions to devops.
Please see the following [Jira Ticket](https://jira.hotterpads.com/browse/DEVOPS-7150)

Once you get permissions you will be able to see your docker builds and the Zillow Group Jenkins build. [Jenkins Builds Google Cloud Console](https://console.cloud.google.com/artifacts/docker/rpimages-id/us/jenkins)

### Pull a docker image from google cloud

For auth, you prob need to make a ticket with devops, you'd login via

```sh
  $ gcloud auth login
```

Follow the instructions to download the Cloud SDK and to get authorized.

Once you you are now authenticated with the Cloud SDK, you can run the following command to pull a docker image from google cloud.

```sh
  $ rjs docker pull
  RUNS  Get list of images in repository
  DONE  Get list of images in repository
  ? Which image would you like to pull?
    us-docker.pkg.dev/rpimages-id/jenkins/purser
    us-docker.pkg.dev/rpimages-id/jenkins/radmin-web
    us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee
  ❯ us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql
    us-docker.pkg.dev/rpimages-id/jenkins/rent-payment
    us-docker.pkg.dev/rpimages-id/jenkins/rental-growth-api
    us-docker.pkg.dev/rpimages-id/jenkins/rental-growth-web
  (Move up and down to reveal more choices)
```

Select:

```sh
  us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql
```

```sh
  $ rjs docker pull
  RUNS  Get list of images in repository
  DONE  Get list of images in repository
  ? Which image would you like to pull? us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql
  RUNS  Get tags for image
  DONE  Get tags for image
  ? Which tag would you like to pull? (Use arrow keys)
    Tags
  ❯ 20211013-683, latest, rent-guarantee-graphql-release-candidate
    20211013-682
    20211013-675
    20211013-672
    20211012-663
    20211011-659
  (Move up and down to reveal more choices)
```

Select a Tag:

```sh
  $ rjs docker pull
  RUNS  Get list of images in repository
  DONE  Get list of images in repository
  ? Which image would you like to pull? us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql
  RUNS  Get tags for image
  DONE  Get tags for image
  ? Which tag would you like to pull? 20211013-683, latest, rent-guarantee-graphql-release-candidate
  RUNS  Pull docker image us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql@sha256:2f61a2abb94ef860c63ae21174fef1df63c735dbf2852319fb5b5c95dc1ed129
  DONE  Pull docker image us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql@sha256:2f61a2abb94ef860c63ae21174fef1df63c735dbf2852319fb5b5c95dc1ed129
```

Now you can see the jenkins images in the docker images list:

```sh
  $ docker image ls
  REPOSITORY                                               TAG          IMAGE ID       CREATED          SIZE
  rent-guarantee-graphql                                   20211013-0   60283338c5a9   12 minutes ago   1.85GB
  rent-guarantee-graphql                                   latest       60283338c5a9   12 minutes ago   1.85GB
  us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql   <none>       509ee2527ca9   4 hours ago      1.85GB
  us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql   <none>       aba120a1178d   13 hours ago     1.85GB
```

And you can run the docker container fir that jenkins image:

```sh
  $ rjs docker start -p 3000:3000
    RUNS  docker start
    ? Which workspace would you like to start? rent-guarantee-graphql
    ? Which rent-guarantee-graphql image would you like to run?  rent-guarantee-graphql:20211013-0 [60283338c5a9] - 15 minutes ago
    (1.85GB)
    DONE  docker start
    RUNS  Get docker images
    DONE  Get docker images
    {"level":40,"time":1634190707114,"pid":14,"hostname":"d09ccefe144e","name":"server","msg":"running server"}
    {"level":30,"time":1634190707188,"pid":14,"hostname":"d09ccefe144e","name":"healthcheck","msg":"instantiating healthcheck"}
    Enabling inline tracing for this federated service. To disable, use ApolloServerPluginInlineTraceDisabled.
    { port: '3000', msg: 'server started' }
```

And you can check that the jenkins container is running:

```sh
  $ docker container ls
    CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS                                       NAMES
    d09ccefe144e   60283338c5a9   "/tini -- node /usr/…"   About a minute ago   Up About a minute   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   rent-guarantee-graphql-1634190704499
```

To stop the jenkins docker container:

```sh
  $ rjs docker stop
    RUNS  Stop
    ? Which container would you like to stop?  60283338c5a9 [d09ccefe144e] - Up 2 minutes (0.0.0.0:3000->3000/tcp, :::3000->3000/tc
    p)
    DONE  Stop
    RUNS  Get running docker containers
    DONE  Get running docker containers
    RUNS  Stopping docker image
    DONE  Stopping docker image
```

### Pull a docker image from google cloud

```sh
  $ docker pull us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql:latest
```

```sh
  $ docker run -p 3000:3000 --env ZG_ENV=production-docker --name rent-guarantee-graphql-test us-docker.pkg.dev/rpimages-id/jenkins/rent-guarantee-graphql:latest
```

### Validate a docker image

You probably never need to run rjs docker validate locally.

If you want to validate and shutdown a docker image, you can do:

```sh
  rjs docker start --validate -w rent-guarantee-graphql -p {port:port} --zg-env {zgEnv}
```

For instance,

```sh
  $ rjs docker start --validate -w rent-guarantee-graphql -p 4000:4000 --zg-env local
    RUNS  docker start
    ? Which rent-guarantee-graphql image would you like to run?  rent-guarantee-graphql:20211013-0 [60283338c5a9] - About an hour a
    go (1.85GB)
    DONE  docker start
    RUNS  Get docker images
    DONE  Get docker images
    RUNS  Validating docker image
    DONE  Validating docker image
    RUNS  Stopping docker image
    DONE  Stopping docker image
```

If you want to run docker validate, you need to start the docker image first and supply the url it should check so it would be like:

```sh
  $ rjs docker validate --host {url:port} --path /check
```

### Running rent-guarantee-graphql playground

On the browser go to the GraphQL playground running on port 4000. [GraphQL Playground](http://localhost:4000/graphql)

Go to the Playground settings and change the following setting to allow credentials:

```sh
   "request.credentials": "include",
```

Note: Click on Save Settings

Click on a new tab in Playground and run the following query:

```sh
  query PolicySearchTypes {
    policySearchTypes {
      values {
        value
        displayName
      }
    }
  }
```

You should see some data on the response:

```sh
  {
  "data": {
    "policySearchTypes": values: [
      {
        value: "active",
        displayName: "Active"
      },
      {
        value: "draft",
        displayName: "Draft"
      },
      {

      displayName: "Application Ineligible"
      },
      {
        value: "paymentIneligible",
        displayName: "Payment Ineligible"
      },
      {
        value: "coverageRequestSigningCancelled",
        displayName: "Coverage Request Signing Cancelled"
      },
      {
        value: "expired",
        displayName: "Expired"
      },
      {
        value: "stale",
        displayName: "Stale"
      }
    ]
  }
}
```

### Running rent-guarantee-admin-web

From the command line, at the rentals-js root directory run the following command:

```sh
  [opagani@ZG07461 rentals-js (main)]$ rjs ws run rent-guarantee-admin-web dev
```

Go to the following url in your browser. [Admin Web App](http://localhost:3001/rent-guarantee/adminApp)

## Troubleshooting

A few common problems:

- **You're having problems cloning the repository.** Some corporate networks block port 22, which Git uses to communicate with GitHub over SSH. Instead of using SSH, clone the repo over HTTPS. Use the following command to tell Git to always use `https` instead of `git`:

```sh
$ git config --global url."https://".insteadOf git://

# This adds the following to your `~/.gitconfig`:
[url "https://"]
  insteadOf = git://
```

- **You're having trouble installing Node.** We recommend using [nvm](https://github.com/creationix/nvm). nvm makes it really easy to use multiple versions of Node on the same machine painlessly. After you install nvm, install the latest stable version of Node with the following command:

```sh
$ nvm use default stable
```

- **You can't start the app with `$ rjs ws run g-graphql dev`.** If the app hangs and does not start, it is possible that the PORT_DEV env variable in the code is missing. Run CTRL + C to kill the command. If you see the following log message at the terminal: `missing PORT_DEV env variable`. The port 3001 which it is used by PORT_DEV by the code may be in use. This is the case when you run the rent-guarantee-admin-web, which uses port 3001, before the reant-guarantee=graphql app. Try `lsof -i tcp:3001` (Mac/Linux). If you see a process running kill the process by running the command `kill pidnumber`. Then run the graphql server: `rjs ws run g-graphql dev`.
