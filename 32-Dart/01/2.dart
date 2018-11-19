import "dart:html";

void main () {
  querySelector("#test")
  ..text = "哈哈"
  ..onClick.listen((e) => window.alert("确定"));

  querySelector("#test").text = "呵呵";
}