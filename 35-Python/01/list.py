# 内置数据结构

"""
list（列表）
[var1, var2, var3, var4]

Tuple（元组）
(var1, var2, var3, var4)  # 元组可以认为是只读的List

Sets（集合）
{var1, var2, var3, var4}  # 集合内元素不可重复

Dictionary（字典）
{key1: var1, key2: var2, key3: var3, key4: var4}
"""

# 列表

list = ['abcd', 123, 3.14, True]

print(list)
print(list[0])

list2 = ['list2str', 100]

print(list + list2)

list[0] = 'ABCD'
list[1:3] = [321, 99.99]

print(list)