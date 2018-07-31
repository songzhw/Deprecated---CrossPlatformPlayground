import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';


class RandomWordsWidget extends StatefulWidget {
    @override
    RandomWordsState createState() => new RandomWordsState();
}

class RandomWordsState extends State<RandomWordsWidget> {
  @override
  Widget build(BuildContext context) {
    final WordPair wordPair = new WordPair.random();
    return new Text(wordPair.asPascalCase);
  }

}