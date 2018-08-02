import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(title: "Friendly Chat", home: new ChatScreen());
  }
}

class ChatScreen extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    var scaffold = new Scaffold(
      appBar: new AppBar(title: new Text("FriendlyChat"),),
    );
    return scaffold;
  }

}
