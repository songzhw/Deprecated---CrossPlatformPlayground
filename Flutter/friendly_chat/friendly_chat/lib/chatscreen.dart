import 'package:flutter/material.dart';

const String _name = "songzhw";

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
        var textFieldPart = new Flexible(child: textField,);

        var iconButton = new IconButton(
            icon: new Icon(Icons.send),
            onPressed: () => _onSumit(_textController.text)
        );
        var iconPart = new Container(
            margin: new EdgeInsets.symmetric(horizontal: 4.0),
            child: iconButton
        );

        var row = new Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0), //单位相当于andorid中的dp
            child: new Row(children: <Widget>[textFieldPart, iconPart],),
        );

        return new IconTheme(
            data: new IconThemeData(color: Theme.of(context).accentColor),
            child: row);

    }

    void _onSumit(String text) {
        _textController.clear();
    }

}

// ============
class ChatMessage extends StatelessWidget {
    final String text;

    ChatMessage(this.text);

    @override
  Widget build(BuildContext context) {
    var avatar = new Container(
        margin: const EdgeInsets.only(right: 16.0),
        child: new CircleAvatar(child: new Text(_name[0])), //以首字母做头像
    );

    var nameText = new Text(_name, style: Theme.of(context).textTheme.subhead);
    var messageText = new Container(
        margin: const EdgeInsets.only(top: 5.0),
        child: new Text(text)
    );
    var nameMessageText = new Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[nameText, messageText],
    );


    return new Container(
        margin: const EdgeInsets.symmetric(vertical: 10.0),
        child: new Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[avatar, nameMessageText],
        ),
    );
  }
}