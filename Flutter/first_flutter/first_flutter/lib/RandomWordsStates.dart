import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

class RandomWordsWidget extends StatefulWidget {
    @override
    RandomWordsState createState() => new RandomWordsState();
}

class RandomWordsState extends State<RandomWordsWidget> {
    final Set<WordPair> _saved = new Set<WordPair>();
    final List<WordPair> _suggestions = <WordPair>[];
    final TextStyle _biggerFont = const TextStyle(fontSize: 18.0);

    @override
    Widget build(BuildContext context) {
        return _buildSuggestions();
    }

    Widget _buildSuggestions() {
        return new ListView.builder(
            padding: const EdgeInsets.all(16.0),
            itemBuilder: (BuildContext _context, int pos){
                if(pos.isOdd) {
                    return new Divider();
                }
                final int index = pos ~/ 2;
                if(index >= _suggestions.length){
                    _suggestions.addAll(generateWordPairs().take(10));
                }
                return _buildRow(_suggestions[index]);
            }
        );
    }

    Widget _buildRow(WordPair wordPair){
        final bool isAlreadySaved = _saved.contains(wordPair);
        return new ListTile(
            title: new Text(wordPair.asPascalCase, style: _biggerFont),
            trailing: new Icon(
                isAlreadySaved ? Icons.favorite : Icons.favorite_border,
                color: isAlreadySaved ? Colors.red : null,
            ),
        );
    }
}
