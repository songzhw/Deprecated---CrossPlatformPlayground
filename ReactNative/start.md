1. install

```s
$ sudo npm install -g create-react-native-app

$ sudo npm install --global expo-cli

$ 
```

2. create a project 

```s
$ create-react-native-app RN101
(choose a template: "blank" or "tab")
```

3. install expo in your Android Phone
[Expo App on Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

4. start app
```s
$ cd RN101
$ expo start

(expo scan the QR code on the terminate or http://localhost:19002)
```

5. modify the app.js
and you would see the effect in Expo app


p.s. Update Node.js & npm
```s
# update npm
$ sudo npm install npm@latest -g

# update node
$ sudo npm install -g n
$ sudo n stable
```