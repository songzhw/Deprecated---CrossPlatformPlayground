import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(title: "Friendly Chat", home: new ChatScreen());
  }
}

class ChatScreen extends StatefulWidget {
  @override
  State createState() => new ChatState();
}

class ChatState extends State<ChatScreen>{
  var _textController = new TextEditingController();

  @override
  Widget build(BuildContext context) {
    var scaffold = new Scaffold(
      appBar: new AppBar(title: new Text("FriendlyChat"),),
      body: _buildTextComposer(),
    );
    return scaffold;
  }

  Widget _buildTextComposer(){
    var textField = new TextField(
      controller: _textController,
      onSubmitted: _onSumit,
      decoration: new InputDecoration.collapsed(hintText: "Type to sned"),
    );

    return new Container(
      margin: const EdgeInsets.symmetric(horizontal: 8.0), //单位相当于andorid中的dp
      child: textField,
    );

  }

  void _onSumit(String text) {
    _textController.clear();
  }


}
