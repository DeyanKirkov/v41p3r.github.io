const questions = [
    {
        id: 100,
        question: "Какво е функция?",
        answer:
            "Функциите са блок от код, на който можем да дадем име и да го преизползваме неопределен брой пъти.",
        example: "function myFunc() { //code goes here}"
    },
    {
        id: 101,
        question: 'Какво са "параметри" в конекста на функция?',
        answer:
            "Параметрите при функциите са свойствата (имената), включени в дефиницията на функцията",
        example: "function myFunc(param) { //code goes here}"
    },
    {
        id: 102,
        question: 'Какво са "аргументи" в конекста на функция?',
        answer:
            "Аргументите са реалните стойности, предадени (получени) на същата функцията.",
        example: "function myFunc() { console.log(arguments);}"
    },
    {
        id: 103,
        question: "Какво е IIFE функция?",
        answer:
            "Instantly Invoked Function Expressions се изпълняват веднага след като са дефинирани и няма нужда да бъдат извиквани. Тези функции са анонимни и не могат да се преизползват.",
        example: "(function () { // … some code })();"
    },
    {
        id: 104,
        question: "Какво е Arrow функция?",
        answer:
            "Предоставят опростен начин на изписване. Нямат свои собствени обвързване(binding) към this, arguments или super и не трябва да се използват като методи в обекти.",
        example: "const arrFunc = (param1, param2) => { // … code }"
    },
    {
        id: 105,
        question: 'Какво е "Type coercion"',
        answer: "JS автоматично преобразува типа на променлива спрямо контекста",
        example:
            '"5" + 2 // returns "52" because 2 is converted to "2" \n "5" * "2" // returns 10 because "5" and "2" are converted to 5 and 2'
    },
    {
        id: 106,
        question: "Какво е explicit type conversion",
        answer:
            "Когато разработчик умишлено конвертира типове, като напише съответния код, като Number(value),това се нарича explicit (изрично) преобразуване на типа.",
        example: "Number(“5”) + 2 // 7"
    },
    {
        id: 107,
        question: "Какво е implicit type conversion",
        answer:
            "Стойностите могат да се преобразуват между различни типове автоматично- implicit. Обикновено се случва, когато се извършват операции със стойности от различни типове.",
        example:
            '"5" + 2 // “52” \n null + 5 // 5 (null results in 0)\n true + true // 2 (true is converted to 1)'
    },
    {
        id: 108,
        question: "Какво е Truthy and Falsy",
        answer:
            "В JavaScript Truthy/Falsy стойност е стойност, която се счита за true/false, когато се срещне в булев контекст.",
        example: "Falsy values: 0, empty string, undefined, null, NaN"
    },
    {
        id: 109,
        question: 'Какво означава логическата операция "&&"?',
        answer: "And (&&) - true, ако и двата операнда са true",
        example:
            'if( a > 0 && a < 10) { // този код ще се изпълни само ако "a" е между 0 и 10}'
    },
    {
        id: 110,
        question: 'Какво означава логическата операция "||"?',
        answer: "Or (||) - true, ако поне единия операнд е true",
        example:
            'if( a < 0 || a > 10) { // този код няма да се изпълни ако "a" е между 0 и 10}'
    },
    {
        id: 111,
        question: 'Какво означава логическата операция "!"?',
        answer: "Not (!) - true, ако условието е false и обратно",
        example:
            'const a = false; \n if(!а) { // този код ще се изпълни ако "a" е false}'
    },
    {
        id: 112,
        question: "Какво е Ternary",
        answer: "Oпростен условен оператор като if / else",
        example: 'const score = 6;\n const result = score > 3 ? "pass" : "fail";'
    },
    {
        id: 113,
        question: "Какво са expressions",
        answer: "Expression е единица код, която връща/произвежда стойност.",
        example: "2>1;\n1991;"
    },
    {
        id: 114,
        question: "Какво са statements",
        answer:
            "Statements - “инструкциите”, които трябва да бъдат изпълнени от компютъра. Statements не произвеждат стойност и не могат да бъдат използвани като аргумент на функция",
        example:
            'if(2>1) console.log("2 is bigger than 1"); // "if" няма return стойност'
    },
    {
        id: 115,
        question: "Кои са примитивните типове данни?",
        answer: "Boolean, Null, Undefined, Number, BigInt, String, Symbol"
    },
    {
        id: 116,
        question: "Какво са масиви? ",
        answer:
            "Масивите позволяват съхраняване на колекция от множество елементи в една променлива.",
        example: 'const names = ["Jack Daniels","Johnie Walker", "Jim Beam"]'
    },
    {
        id: 117,
        question: "Как се индексират стойностите при масиви?",
        answer:
            "Масивите на JavaScript са индексирани с нула: първият елемент на масива е с индекс 0, вторият е с индекс 1 и така нататък"
    },
    {
        id: 118,
        question: 'Какво прави "push()" метода на масивите?',
        answer:
            "Методът push() добавя един или повече елементи в края на масив и връща новата дължина на масива"
    },
    {
        id: 119,
        question: 'Какво прави "pop()" метода на масивите?',
        answer:
            "Методът pop() премахва последния елемент от масив и връща този елемент. Този метод променя дължината на масива"
    },
    {
        id: 120,
        question: 'Какво прави "shift()" метода на масивите?',
        answer:
            "Методът shift() премахва първия елемент от масив и връща този премахнат елемент. Този метод променя дължината на масива"
    },
    {
        id: 121,
        question: 'Какво прави "unshift()" метода на масивите?',
        answer:
            "Методът unshift() добавя един или повече елементи към началото на масив и връща новата дължина на масива."
    },
    {
        id: 122,
        question: 'Какво прави "concat()" метода на масивите?',
        answer:
            "Методът concat() се използва за обединяване на два или повече масива. Този метод не променя съществуващите масиви, а вместо това връща нов масив",
        example:
            "const arr = [1, 2];\nconst arr2 = [3, 4];\nconst arr3 = arr.concat(arr2);//[1,2,3,4]"
    },
    {
        id: 123,
        question: 'Какво прави "slice()" метода на масивите?',
        answer:
            "Методът slice() връща копие на част от масив в нов масив, без да се модифицира оригиналния масив.\n Приема до два аргумента - начален и краен индекс за копиране. Крайния индекс не е включен\n Ако се подаде само един аргумент, той се приема за начален индекс , а като край се приема края на масива.\n Ако се извика без аргументи, slice връща целия масив.",
        example:
            "const phoneBrandsArray = [“samsung”, “iphone”, “huawei”, “motorola”]\nconsole.log(phoneBrandsArray.slice(2)) // “huawei”, “motorola”"
    },
    {
        id: 124,
        question: 'Какво прави "splice()" метода на масивите?',
        answer:
            "Методът splice() променя съдържанието на масив чрез премахване или замяна на съществуващи елементи и/или добавяне на нови елементи на определено място\n Само start параметъра е задължителен.\n Връща масив съдържащ премахнатите елементи"
    },
    {
        id: 125,
        question: 'Какво прави "indexOf()" метода на масивите?',
        answer:
            "Методът indexOf() връща първия индекс, при който даден елемент може да бъде намерен в масива, или -1, ако не присъства"
    },
    {
        id: 126,
        question: 'Какво прави "includes()" метода на масивите?',
        answer:
            "Методът includes() определя дали даден масив включва определена стойност сред своите записи, връщайки true или false според случая."
    },
    {
        id: 127,
        question: 'Какво прави "forEach()" метода на масивите?',
        answer:
            "Методът forEach() изпълнява дадена функция веднъж за всеки елемент от масива. Няма return стойност!"
    },
    {
        id: 128,
        question: 'Какво прави "map()" метода на масивите?',
        answer:
            "Методът map() създава нов масив, попълнен с резултатите от извикване на предоставена функция за всеки елемент в извикващия масив"
    },
    {
        id: 129,
        question: 'Какво прави "filter()" метода на масивите?',
        answer:
            "filter() създава копие на част от даден масив, филтрирано само до елементите от дадения масив, които отговарят на изискванията поставени от дадена функция."
    },
    {
        id: 130,
        question: "Какво е HTML?",
        answer:
            "HyperText Markup Language - позволява създаването и структурирането на уеб страници"
    },
    {
        id: 131,
        question: "Какво е HTML element?",
        answer:
            "HTML елементите са градивната единица на HTML страниците.\n Дефинират се от отварящ и затварящ таг - <> </>\n Не са case sensitive. <P> е еквивалентно на <p>. Конвенцията е да се изписват с малка буква."
    },
    {
        id: 132,
        question: "Какво е HTML клас?",
        answer:
            "Класовете позволяват на CSS и JavaScript да достъпват определени елементи.\n Множество елементи могат да имат един и същи клас.\n Един елемент може да има множество класове. Разделят се с интервал."
    },
    {
        id: 133,
        question: "Какво е HTML id?",
        answer:
            "Както класовете, id-тата позволяват на CSS и JavaScript да достъпват определени елементи. \n id е уникално.\n Един елемент може да има само едно id."
    },
    {
        id: 134,
        question: "Какво е CSS?",
        answer: "Cascading Style Sheets - служи за стилизиране на уеб страници"
    },
    {
        id: 135,
        question: "Какво е DOM?",
        answer:
            "DOM е съкращението на Document Object Model\n HTML DOM е стандарт за достъпване, промяна, добавяне или изтриване на HTML елементи.\n Дефинира HTML елементите, свойствата им, събитията свързани с тях."
    },
    {
        id: 136,
        question: "Какво са DOM events?",
        answer:
            "HTML DOM позволява на JavaScript да достъпва и обработва HTML събития с помощта на EventListener"
    },
    {
        id: 137,
        question: "Какво е Object?",
        answer:
            "В JavaScript един обект е неподредена колекция от двойки ключ-стойност. Всяка двойка се нарича свойство (property). Обект може да се създаде чрез конструктор new Object() , или чрез директно инициализиране {}",
        example: 'const myObj = {id:137, question:"Какво е Object?" ..//}'
    },
    {
        id: 138,
        question: 'Какво е "this"?',
        answer:
            "Ключовата дума this предоставя референция към обекта извикващ дадена функция."
    },
    {
        id: 139,
        question: "Какво е деструктуриране?",
        answer:
            "Деструктурирането дава възможност за “разопаковане” на стойности от масиви или свойства от обекти в отделни променливи.",
        example: "let a, b;\n[a, b] = [10, 20];"
    },
    {
        id: 140,
        question: "Какво е Rest параметър?",
        answer:
            "Rest параметъра позволява приемането на неопределен брой аргументи.",
        example:
            "function introduceMe(firstName, lastName, ...otherDetails) { // code }"
    },
    {
        id: 141,
        question: "Какво е Optional chaining?",
        answer:
            "Optional chaining оператор (?.) позволява да се прочете стойността на свойство, разположено дълбоко във верига от свързани обекти, без да се налага да проверявате дали всяка референция във веригата е валидна.",
        example: "console.log(person.name?.first);"
    },
    {
        id: 142,
        question: "Какво е Set?",
        answer:
            "Set позволява да се съхраняват уникални стойности от всякакъв тип, независимо дали са примитивни стойности или препратки към обекти",
        example:
            "const mySet1 = new Set() \n mySet1.add(1) // [1] \n mySet1.add(5) // [1,5] \n mySet1.add(5) // [1,5]"
    },
    {
        id: 143,
        question: "Какво е WeakSet?",
        answer:
            "WeakSet e колекция само от обекти. Тя не може да съдържа произволни стойности от всякакъв тип, както Set."
    },
    {
        id: 144,
        question: "Какво е Map?",
        answer:
            "Map съдържа двойки ключ- стойност и запомня оригиналния ред на вмъкване на ключовете. Всяка стойност (както обекти, така и примитивни стойности) може да се използва или като ключ, или като стойност"
    },
    {
        id: 145,
        question: "Какви са разликите между Object и Map?",
        answer:
            "В обектите, типа на ключа е ограничен до string, number или symbol. В Map, това не е така и типът може да бъде от всякякъв тип: число, масив, обкет и т.н.\n В Map, за разлика от обектите, реда на вкарване на ключове и стойности се запазва."
    },
    {
        id: 146,
        question: "Каквo e WeakMap?",
        answer:
            "Ключовете на WeakMaps са само от типа Object. Примитивните типове данни като ключове не са разрешени (напр. symbol, string не може да бъде ключ WeakMap)."
    },
    {
        id: 0,
        question: `Какво е class?`,
        answer:
            "Класовете са шаблон, по който са създават обекти и дефинират свойства и методи на обектите.\n Статичните свойства и методи се извикват без инстанциране на клас и не могат да бъдат извикани чрез обект от класа."
    },
    {
        id: 1,
        question: "Какво е Instance?",
        answer:
            "instance е обекта създаден посредством клас той носи всички медоти и свойства на класа "
    },
    {
        id: 2,
        question: `Какво  е Inheritance?`,
        answer: `Inheritance е наследяване на един клас от друг и дава възможност за създаване на един клас от съществуващ наследявайки неговите свойства и методи като се презапишат`
    },
    {
        id: 3,
        question: `Какво е Encapsulation?`,
        answer: `Encapsulation # е OOP директно ограничаващ методи и променливи чрез капсулиране данните и кода заедно. Класовете са публични по подразбиране`
    },
    {
        id: 4,
        question: `Какво е Polymorphism?`,
        answer: `Eдин и същи обект или функция могат да бъдат в различен контекст `
        // Car: Audi & BMW
    },
    {
        id: 5,
        question: `Какво е Prototypes?`,
        answer: `Prototypes механизма чрез който JS  наследява фунции един от друг. prototype chain `
    },
    {
        id: 6,
        question: `Какво е Call?`,
        answer: `Call извиква функция незабавно`
    },
    {
        id: 7,
        question: `Какво е Apply?`,
        answer: `Същото като Call, приема аргументи като масив`
    },
    {
        id: 8,
        question: `Какво е Bind?`,
        answer: `Създава нова функция която при извикване има this равен на предоставената стойност.`
    },
    {
        id: 9,
        question: `Какво е JavaScript Engine?`,
        answer: `Програма която компилира JavaScript под бинарен код. Браузарите имат интегриран JS engine. Кодът не се компилира предварително.`
    },
    {
        id: 10,
        question: `Какъв тип език е JS?`,
        answer: `Интерпретиран език който не се компилира предварително и се чете ред по ред от горе надолу. `
    },
    {
        id: 11,
        question: `Какво е Heap?`,
        answer: `Памет съдържаща обектите нужни на програмата. JS разпределя паметта автоматично при деклариране на стойностите. Това е логическава част от RAM.`
    },
    {
        id: 12,
        question: `Какво е Garbage Collector?`,
        answer: `JS автоматично управлява паметта.Наблюдава разпределението на паметта и да определя кога даден блок
    от разпределената памет вече не е необходим и да го възстанови.`
    },
    {
        id: 13,
        question: `Какво е Stack?`,
        answer: `JS е single threaded език: може да прави само едно нещо в даден момент.`
    },
    {
        id: 14,
        question: `Какво е Event Loop?`,
        answer: `Цикъл на събития при single threaded език. Използвайки асинхронно програмиране който изпълнява процеси в бекграунд без да блокира браузера.`
    },
    {
        id: 15,
        question: `Какво е Closure?`,
        answer: `Комбинация от функция, обединена заедно с референции към заобикалящата я среда. Даваща достъпа до обхвата на външна функция от вътрешна функция`
    },
    {
        id: 16,
        question: `Какво е Scope?`,
        answer: `Текущия контекст на изпълнение , в който стойностите са достъпни. Обхвата може да бъде в йерархия така, че дъщерните обхвати да имат достъп. до родителските, но не и обратното.`
    },
    {
        id: 17,
        question: `Какво е Hoisting?`,
        answer: `Това е процеса при който интерпретаторът изглежда премества декларацията на функции, променливи или класове преди изълнението на кода`
    },
    {
        id: 18,
        question: `Какво е Version control?`,
        answer: `Клас системи, отговорни за управлението на промени в компютърни програми, документи, уеб сайтове или други колекции от данни. Компонент на управлнието на конфигурацията на софтуера`
    },
    {
        id: 19,
        question: `Какво е Repository?`,
        answer: `Хранилище съдържащо колеция от файлове на различни версии на проект. Може да бъде Local & Remote.`
    },
    {
        id: 20,
        question: `Какво е Git?`,
        answer: `Това е система за контрол на версиите: проследяване промените в набор от файлове, използвани за кординиране работата между програмисти`
    },
    {
        id: 21,
        question: `Какво е Asynchronous JS?`,
        answer: `Функционалност позволяваща изпълнението на задачи отнемащи време без да се счупва кода`
    },
    {
        id: 22,
        question: `Какво е Promises?`,
        answer: `Обект представляващ евентуално завършване или неуспех на асинхронна операция\n Има 3 състояния: pending, fulfilled, rejected\n then(), catch(), finaly()`
    },
    {
        id: 23,
        question: `Какво е HTTP?`,
        answer: `Hypertext Transfer Protocol протокол за обмен за информация браузър/сървър, request/response.Той е stateles, сървъра не запазва никакви данни между заявките`
    },
    {
        id: 24,
        question: `Какво е API?`,
        answer: `Aplication Programmin Interface. Начина по който две или повече програми комуникират помежду си. Fetch API позволява да правим заявки и обработвеме отговори.`
    },
    {
        id: 25,
        question: `Какво е REST?`,
        answer: `Representational state transfer е софтуерен стил на архитектура, базиран на набор от принципи, които описват как се дефинират и адресират мрежовите ресурси.`
    },
    {
        id: 26,
        question: `Какво е String?`,
        answer: `Данни които могат да бъдат предоставени като текст.`
    },
    {
        id: 27,
        question: `Какво е Template strings?`,
        answer: 'Позволява вграждане на expressions в стринг денифинирани чрез ``'
    },
    {
        id: 28,
        question: `Какво е JSОN?`,
        answer: `JavaScript Object Notation стандарт за форматиране на данни. Вътрешен обект, който предоставя функции за преобразуване на стойности от и към формата.`
    },
    {
        id: 29,
        question: `Какво е RegEx?`,
        answer: `Regular Expressions модели за съпоставяне на комбинации от знаци в стрингове`
    },
    {
        id: 30,
        question: `Методи на RegEx?`,
        answer: `
    exec()\n
    test()\n
    match()\n
    matchAll()\n
    search()\n
    replace()\n
    replaceAll()\n
    split()`
    }
];
