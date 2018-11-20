# 数据类型
'''
Number（数字）
String（字符串）
List（列表）
Tuple（元组）
Sets（集合）
Dictionary（字典）
'''

a = 10;
b = 2.3;
c = True;
d = 3 + 4j;   # 复数 j复数单位

e = False;

print(a);
print(b);
print(c);
print(d);

# type()
print(type(a));
print(type(b));
print(type(c));
print(type(d));

# 变量
a1 = 200;
_a2 = 300;
A1 = 400;

a = b = c = 1;  # 多变量赋值
a, b, c = 1, 2.3, 'abc';  # 多变量赋值

del a;

# 运算符
'''
算数运算符
**  求幂运算符
//  求整除运算符

比较（关系）运算符
==
!=
>
<
>=
<=

赋值运算符
=
+=
-=
*=
/=
%=
**=
//=

逻辑运算符
&& || ! # java or js
and or not # python

位运算符
& | ^ ~ << >>

成员运算符
in
not in

身份运算符
is
is not

运算符优先级
'''

# 字符串
"""
多行注释
"""

# Python中没有字符类型
a = 'fsadas';
b = "asdas";
c = """
多行字符串
多行
多行
""";

print(a);
print(b);
print(c);

print(a+b+c)