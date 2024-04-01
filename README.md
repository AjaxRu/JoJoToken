# JoJoToken
1. Необходимо установить Truffle, Ganache, расширение Solidity для VS Code
2. Перейти в папку нашего проекта и ввести
   ```truffle init```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/18888b85-1fd5-4295-9e3f-f9d705f52256)

3. Запускаем проект в VSCode 
```code . ```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/15e85f5e-7ff4-4ab4-9a5f-4111d1bc2311)

4. За основу возьмем реализацию типового ERC-20 токена
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/fb5f82c8-a4e3-416b-b622-282062ccdd5c)

5. В консоли имортируем библиотеку для ERC-20
```npm install @openzeppelin/contracts ```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f6cc5264-e43c-4253-8401-704dead66951)


6. Запустим
```truffle compile```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/bd5dd599-07bb-4972-8b21-81bd42debe8d)

7. Создадим migration .js файл
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/97610eb8-4dfc-4bcb-8580-8d33307b8e2d)

8. Открываем Ganache и выбираем наш truffle-config файл и нажимаем start
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/9266ffe4-e6b9-4691-8ab5-481b1e88dd63)

9.Для корректной работы в этом файле нужно раскомментировать development
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f238f7be-fb69-4cbe-b6d4-7d591779514a)

А также (как я поняла, из-за проблемы версий) сделать следующие изменения:
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/44abfcf2-ff38-41d5-9c12-cd85f7df9286)

Нажимем Save All

10. В консоли вводим
```truffle migration```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/874f2530-f0a4-4113-b460-76dca5bf66fc)

Контракт задеплоен. Нас наиболее интересует здесь поле account.
В ganache так же видим изменение статуса контракта.
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/21655bf9-5411-4038-a035-51d82b907d6a)

Можем посмотреть транзакцию, создавшую контракт.
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f18ebf4f-fc4f-4f95-98ef-eab12a50d2be)







