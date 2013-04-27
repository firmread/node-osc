node-osc
========

system for local wireless communication via wifi through web browser

Run node server locally via MAMP to split out OSC from the network

(MIGHT NOT REQUIRED)

I'm not sure if it needed or not but we have Macports install
http://www.macports.org/
then

```
sudo port install nodejs

sudo port install npm

npm install mysql
```



PRE-REQUISITES: 
node.js https://github.com/joyent/node
node-osc https://github.com/TheAlphaNerd/node-osc
```
sudo npm install node-osc
```
socket.io https://github.com/learnboost/socket.io/
```
sudo npm install socket.io
```


then also install in the target http server folder with 
```
sudo npm install socket.io node-osc
```


open the server by get to target http server folder and run
```
node app
```


all credit goes to Apon Palanuwech
