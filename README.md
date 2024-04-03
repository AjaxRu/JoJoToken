# JoJoToken
1. Необходимо установить Truffle, Ganache, расширение Solidity для VS Code <br/>
2. Перейти в папку нашего проекта и ввести 
   ```truffle init``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/18888b85-1fd5-4295-9e3f-f9d705f52256)

3. Запускаем проект в VSCode 
```code . ``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/15e85f5e-7ff4-4ab4-9a5f-4111d1bc2311)

4. За основу возьмем реализацию типового ERC-20 токена <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/fb5f82c8-a4e3-416b-b622-282062ccdd5c)

5. В консоли имортируем библиотеку для ERC-20 
```npm install @openzeppelin/contracts ``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f6cc5264-e43c-4253-8401-704dead66951)


6. Запустим 
```truffle compile``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/bd5dd599-07bb-4972-8b21-81bd42debe8d)

7. Создадим migration .js файл <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/97610eb8-4dfc-4bcb-8580-8d33307b8e2d)

8. Открываем Ganache и выбираем наш truffle-config файл и нажимаем start <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/9266ffe4-e6b9-4691-8ab5-481b1e88dd63)

9. Для корректной работы в этом файле нужно раскомментировать development <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f238f7be-fb69-4cbe-b6d4-7d591779514a)

А также (как я поняла, из-за проблемы версий) сделать следующие изменения: <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/44abfcf2-ff38-41d5-9c12-cd85f7df9286)

Нажимаем Save All <br/>
<br/>
10. В консоли вводим 
```truffle migration``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/874f2530-f0a4-4113-b460-76dca5bf66fc)

Контракт задеплоен. Нас наиболее интересует здесь поле account. <br/>
В ganache так же видим изменение статуса контракта. <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/21655bf9-5411-4038-a035-51d82b907d6a)

Можем посмотреть транзакцию, создавшую контракт. <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/f18ebf4f-fc4f-4f95-98ef-eab12a50d2be)

11. Откроем ```truffle console``` <br/>
12. Проверим балланс нашего аккаунта <br/>
```web3.eth.getBalance('0xA68436d24034e8C3C351fb1ed1FE859dD648b15A');```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/7684d469-feeb-4e77-967f-23afc7fba0aa)

13. Переведем деньги с одного аккаунта на другой <br/>
```web3.eth.sendTransaction({from: "0xA68436d24034e8C3C351fb1ed1FE859dD648b15A", to: "0x9aAf6838f33f5fA6401b2BFda1262053C75E1410", value: web3.utils.toWei("70", "ether")});```
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/fda2b2b8-5680-4612-95e5-f20bc720a3c1)
В Ganache можем наблюдать изменения баланса: <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/23d76180-b23e-4de8-a8fa-59f0d1557684)
Также во вкладке транзакции: <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/c3b89b65-e692-4e82-9e85-43d835ce4965)

14. Проведем тесты <br/>
Для начала импортируем библиотеку для тестов
```npm install @openzeppelin/test-helpers``` <br/>
Далее создадим .js файл с тестами. У нас будет 3 теста: <br/>
✔should deploy with correct name and symbol <br/>
✔should mint initial supply to deployer <br/>
✔should transfer tokens correctly <br/>
Закидываем файл в папку "test". <br/>
В консоли в директории нашего проекта запускаем
```truffle test``` <br/>
![image](https://github.com/AjaxRu/JoJoToken/assets/145920622/636e2315-4aea-4a42-8734-3d0d97fe25d0)










