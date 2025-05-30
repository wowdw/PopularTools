# PopularTools - 开发辅助工具

本项目采用 [MIT 许可证](LICENSE) 开源。

这是一个提供常用文本转换功能的Visual Studio Code扩展，帮助开发者快速处理文本格式。

## 功能

此扩展提供以下文本转换工具，可通过命令面板或右键菜单使用：

### 1. 文本转大写

将选中的文本转换为大写形式。

使用方法：
1. 选中需要转换的文本
2. 右键点击，选择"转换为大写"，或者
3. 打开命令面板 (Ctrl+Shift+P)，输入并选择 "转换为大写"

### 2. 文本转驼峰命名

将选中的文本转换为驼峰命名格式（例如："hello world" → "helloWorld"）。

使用方法：
1. 选中需要转换的文本
2. 右键点击，选择"转换为驼峰命名"，或者
3. 打开命令面板 (Ctrl+Shift+P)，输入并选择 "转换为驼峰命名"

### 3. JSON格式化

格式化选中的JSON文本，使其更易读。

使用方法：
1. 选中需要格式化的JSON文本
2. 右键点击，选择"格式化 JSON"，或者
3. 打开命令面板 (Ctrl+Shift+P)，输入并选择 "格式化 JSON"

## 安装

1. 打开VS Code
2. 打开扩展视图 (Ctrl+Shift+X)
3. 搜索 "PopularTools"
4. 点击安装

## 使用示例

### 文本转大写
原文本：`hello world`  
转换后：`HELLO WORLD`

### 文本转驼峰命名
原文本：`hello world`  
转换后：`helloWorld`

### JSON格式化
原文本：`{"name":"John","age":30,"city":"New York"}`  
转换后：
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
