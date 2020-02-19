# os模块
>* os指operating system
>* os.path：
>   * 获取指定文件的当前目录：```os.path.dirname(path)```
>   * 目录拼接：```os.path.join(path1, path2, path3,...)```，返回一个从左向右拼接后的地址
>   * 判断路径是否为绝对路径：```os.path.isabs(path)```，是返回true，否则返回false
>   * 将当前路径转换成绝对路径并返回：```os.path.abspath(path)```
>   * 获取目标文件名：```os.path.split(path)[1]```，返回一个元组，共两个元素，第一个是文件路径，第二个是文件名
>   * 获取目标文件的扩展名：```os.path.splitext(path)[1]```，返回一个元组，共两个元素，除去扩展名的部分，第二个是扩展名
>   * 判断是否是文件：```os.path.isfile(path)```
>   * 判断是否是目录：```os.path.isdir(path)```
>   * 获取文件大小：```os.path.getsize(path)```，以字节形式返回
>   * 判断目录是否存在：```os.path.exists(path)```
>   * 例程：
>       ```
>       # 将目标文件复制到当前目录上
>       import os  # 引入os模块
>       path = r'C:\Users\opd\Desktop\233.png'  # 被复制文件的路径
>       with open(path, 'rb') as input_stream:  # 获取输入流对象input_stream
>           pass
>           data = input_stream.read()  # 获取输入流的数据
>           file_name = input_stream.name[input_stream.name.rfind('\\')+1:]  # 复制后的文件名
>           with open(os.path.join(os.path.dirname(__file__), file_name), 'wb') as output_stream:  # 拼接路径以得到复制后的文件的路径和输出流对象
>               pass
>               output_stream.write(data)  # 写入文件
>       
>       # 文件复制
>       def dir_copy(src, target):
>           pass
>           import os
>           src_name = os.path.split(src)[1]
>           target = os.path.join(target, src_name)
>           if os.path.isdir(src):
>               pass
>               os.mkdir(target)
>               for i in os.listdir(src):
>                   pass
>                   dir_copy(os.path.join(src, i), target)
>           else:
>               pass
>               with open(src, 'rb') as input_stream:
>                   pass
>                   data = input_stream.read()
>                   with open(target, 'wb') as output_stream:
>                       pass
>                       output_stream.write(data)
>       ```
>* os的直接方法：
>   * 获取当前工作区的目录：```os.getcwd() == os.path.dirname(__file__)```
>   * 以列表形式获取当前目录下的所有文件名和目录名：```os.listdir(path)```
>   * 创建目录：```os.mkdir(path)```
>   * 删除空目录：```os.rmdir(path)```
>   * 删除文件：```os.remove(path)```
