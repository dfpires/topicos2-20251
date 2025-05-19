import 'package:flutter/material.dart';
void main(){
  runApp(MyApp);
}
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Contador',
      home: HomePage()
    )
  }
}
// é um widget com estado, pode mudar o conteúdo da tela
class HomePage extends StatefulWidget {
  // createState() define a lógica do estado ()
  @override
  _HomePageState createState() => _HomePageState()
}

class _HomePageState extends State<HomePage> {

}