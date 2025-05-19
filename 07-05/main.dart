import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// Widget principal do aplicativo
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Flutter',
      home: HomePage(),
    );
  }
}

// Tela inicial com estado mutável
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

// Classe com o estado da tela
class _HomePageState extends State<HomePage> {
  String mensagem = 'Olá, Flutter!';

  void mudarMensagem() {
    setState(() {
      mensagem = 'Você clicou no botão!';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Exemplo Simples'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              mensagem,
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: mudarMensagem,
              child: Text('Clique aqui'),
            )
          ],
        ),
      ),
    );
  }
}
