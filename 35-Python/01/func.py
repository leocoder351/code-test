# 函数
"""
def 函数名 (参数列表) :
    函数体
"""

def hello (str) :
    print("hello: %s" %(str));

hello('Tom');

def function01 (a, b) :
    return a + b;

print(function01(1,2));

def function02 (a = 0, b = 0) :
    return a * b;

print(function02(3,4));
print(function02());

# 变量作用域
"""
L （Local）局部作用域
E （Enclosing）闭包函数外的函数作用域
G （Global）全局作用域
B （Built-in）内建作用域
"""

x = int(32);  # 内建作用域

g_a = 0;      # 全局作用域

def function03 () :
    o_c = 1;  # 闭包函数外的函数中
    def function04 () :
        i_b = 3;  # 局部作用域

def function05 () :
    pass