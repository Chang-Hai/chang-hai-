# 字符串方法

## split()

把字符串拆分为字符串数组
参数：
  separator：可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
  limit: 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
example:
var str="How are you doing today?";
var n=str.split(" ");
How,are,you,doing,today?

## join

把数组中的所有元素放入一个字符串 arrayObject.join(separator)
参数：
  separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
返回值：
  返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。

## fill

用于一个固定值替换数组的元素

参数：
value: 必填，需要填充的值
start: 可选，填充开始的位置
end: 停止填充的位置

exampl:

使用固定数值填充数值
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.fill("watermale)
conson.log() // watermale watermale watermal watermal
