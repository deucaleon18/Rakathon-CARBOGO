<h1 align="center">CARBOGO</h1>


<p align="center">
<img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"/> <br><br>
<a href="" target="blank"><img align="center" src="images/ganache.png" alt="django" height="40" width="80"/></a>
<a href="" target="blank"><img align="center" src="images/metamask.png" alt="django" height="40" width="40"/></a>
<a href="" target="blank"><img align="center" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="django" height="40" width=""/></a>
<a href="" target="blank"><img align="center" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black" alt="react" height="40" width="90"/></a>
<a href="" target="blank"><img align="center" src="images/web3.png" alt="django" height="40" width="50"/></a>

</p>


<br>

<h4 align="center">We have build a DApp (Decentralized Application) CARBOGO which will serve as a single platform where the government can issue carbon credits and the factories can purchase these carbon credits according to the calculated daily carbon usage of the day.</h4>

<p align="center">A carbon credit represents the right to emit a measured amount of greenhouse gases. Carbon credits work as a certification that business or individual owning them is counterbalancing the emission of greenhouse gases (GHG).</p>

<br>

## Installation and Setup :

### **Node.JS**

##### **For Windows Users :**
Download it by clicking [here](https://nodejs.org/en/).

*It is recommended that you download LTS version.*


##### **For Linux Users :**
Go to your terminal and type :
 ```
$ sudo apt install nodejs
$ sudo apt install npm
 ```

<br>

### **Ganache Local Development Blockchain**
We recommend using [Ganache](https://www.trufflesuite.com/ganache) as your personal blockchain for Ethereum development. It will allow you to deploy smart contracts, develop applications, and run tests. It is available on Windows, Mac, and Linux as a desktop application and a command-line tool !

Download it by clicking [here](https://www.trufflesuite.com/ganache).  *(For both Windows and Linux)*

##### **For Linux Users :**

*Once the download is complete, go to the folder where you have downloaded the file and open the terminal and type the following to make the file executable :*
```
Chmod a+x <filename.AppImage>
```

<br>

### **Metamask Wallet**

For this project, we would require an ethereum wallet, and here we will use the popular open-source wallet metamask.

**On chrome/firefox/brave :** *(It is recommended that you use Brave browser)*

1. Go to the extensions page of your browser and install the metamask plugin, click [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).
2. On installation the user will be redirected to a setup page and the user has to choose a password and a recovery phrase.

For in-depth detail click [here](https://docs.metamask.io/guide/)

<br>

### React Truffle Box

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
  Starting the development server...
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

### Screenshots


![Screenshot (299)](https://user-images.githubusercontent.com/77899467/180588481-4daba447-f08d-48c7-9da8-74d852019805.png)
![Screenshot (305)](https://user-images.githubusercontent.com/77899467/180588483-31bef553-ae8f-474f-bf92-dc9e324edd40.png)
![Screenshot (300)](https://user-images.githubusercontent.com/77899467/180588476-34c3faaa-523b-417d-8c59-32b6ef3e8907.png)

![Screenshot (304)](https://user-images.githubusercontent.com/77899467/180588479-a62c7781-f2f6-4144-858a-740b4792b0b0.png)
![Screenshot (301)](https://user-images.githubusercontent.com/77899467/180588474-acccb782-1871-430a-b6db-6c610906c3b6.png)

![Screenshot (302)](https://user-images.githubusercontent.com/77899467/180588480-0689ecc1-21f5-4cd9-9b7e-8b95a01e1bf1.png)

![Screenshot (307)](https://user-images.githubusercontent.com/77899467/180588485-b27cc8ea-fb8b-49a7-8c54-384cdff5c697.png)






### FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Create React App](https://create-react-app.dev). Either one would be a great place to start!
