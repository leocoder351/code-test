import "dart:math" show Random;

void main () {
  print("hello world");
  print(new Die(n:12).roll());
}

class Die {
  static Random shaker = new Random();
  int slides, value;
  
  Die({int n:6}) {
    if (n >= 4) {
      slides = n;
    } else {
      throw new ArgumentError();
    }
  }

  int roll () {
    return value = shaker.nextInt(slides);
  }
}