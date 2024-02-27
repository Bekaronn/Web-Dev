export interface Product {
  id: number;
  category: string;
  photo: string[];
  name: string;
  price: number;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium',
    ],
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 614435,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.\n' +
      '\n' +
      'Титановый корпус\n' +
      'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали. Внутренний структурный каркас iPhone из 100% переработанного алюминия. Вес флагмана составляет 221 г.\n' +
      '\n' +
      'Процессор\n' +
      'Новый процессор A17 Pro получил на 10% увеличенную производительность по сравнению с предыдущим поколением. Его мощности с запасом хватает для выполнения самых сложных задач.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей диагональю 6.7" точно передаёт цвета и обеспечивает изображение с высочайшим уровнем детализации. Максимальная частота обновления экрана составляет 120 Гц, благодаря чему все переходы воспроизводятся плавно и без рывков. Стекло с покрытием Ceramic Shield надёжно защищает дисплей от царапин и сколов.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп, увеличенным светочувствительным сенсором и апертурой f/1.78 способна делать детализированные фотографии как днём, так и ночью. Сверхширокоугольный модуль с разрешением 12 Мп и апертурой f/2.2 получил угол обзора 120 градусов, что позволяет поместить в кадре все нужные детали. Телеобъектив с разрешением 12 Мп и апертурой f/2.8 и пятикратным оптическим зумом позволяет максимально приблизить объект и запечатлеть его без потери качества. Для записи плавных видео в движении смартфон оснащён продвинутой оптической стабилизацией, которая работает сразу в нескольких направлениях.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера получила разрешение 12 Мп. Благодаря поддержке технологии TrueDepth цвета на снимке получаются глубокими и насыщенными.\n' +
      '\n' +
      'Передача данных до 20 раз быстрее\n' +
      'Через USB Type-C устройство может передавать информацию со скоростью до 10 Гбит/с.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Аккумулятор смартфона обеспечивает до 29 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    rating: 9.5
  },
  {
    id: 2,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc2/hfe/64400502915102.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 325861,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.\n' +
      '\n' +
      'Распознавание аварий\n' +
      'iPhone 15 может обнаружить серьёзную автомобильную аварию, а затем позвонить в службу экстренной помощи и уведомить ваши контакты для экстренных случаев.\n' +
      '\n' +
      'Процессор\n' +
      'Устройство работает на процессоре A16 Bionic. Его мощности с запасом хватает для запуска любых мобильных игр на «максималках», рендеринга видео в высоком разрешении и других повседневных задач. Во время звонков интеллектуальная система шумоподавления усиливает голос пользователя и заглушает остальные звуки для чёткой голосовой связи. Заряда батареи хватает на весь день активного использования.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей Super Retina XDR отличается невероятно высокой плотностью пикселей - фотографии, видео и текст выглядят поразительно чётко. Стекло с покрытием Ceramic Shield устойчиво к механическим повреждениям. Пиковая яркость дисплея достигает 2000 кд/м2, благодаря чему устройством комфортно пользоваться на улице под прямыми лучами солнца.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп снимает видео в разрешении 4K с частотой 60 кадров в секунду. Благодаря технологии Smart HDR все цвета и оттенки в кадре выглядят максимально реалистично. Основной модуль также поддерживает двукратный оптический зум. Сверхширокоугольная камера дает возможность захватить в кадр все нужные детали. Умные алгоритмы добавляют портретным фото красивый эффект размытия, система автоматически определяет на фотографии не только человека, но и животных.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера с разрешением 12 Мп точно передает цвета благодаря поддержке технологии TrueDepth. Модуль также может записывать видео в разрешении 4K с частотой до 60 кадров в секунду.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Энергоёмкий аккумулятор обеспечивает до 20 часов беспрерывной работы смартфона в режиме просмотра видео. Зарядка и передача данных осуществляются через разъем USB Type-C. 30 минут зарядки достаточно для восполнения 50 % ёмкости аккумулятора.\n' +
      '\n' +
      'Дизайн\n' +
      'Рамки на передней панели стали меньше, за счёт чего увеличилась полезная площадь экрана. Боковые грани слегка скруглены, благодаря чему смартфон удобно и надёжно лежит в руке. На задней панели расположен привычный квадратный блок камер.',
    rating: 9.5
  },
  {
    id: 3,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium'
    ],
    price: 374275,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.\n' +
      '\n' +
      'Распознавание аварий\n' +
      'iPhone 15 может обнаружить серьёзную автомобильную аварию, а затем позвонить в службу экстренной помощи и уведомить ваши контакты для экстренных случаев.\n' +
      '\n' +
      'Процессор\n' +
      'Устройство работает на процессоре A16 Bionic. Его мощности с запасом хватает для запуска любых мобильных игр на «максималках», рендеринга видео в высоком разрешении и других повседневных задач. Во время звонков интеллектуальная система шумоподавления усиливает голос пользователя и заглушает остальные звуки для чёткой голосовой связи. Заряда батареи хватает на весь день активного использования.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей Super Retina XDR отличается невероятно высокой плотностью пикселей - фотографии, видео и текст выглядят поразительно чётко. Стекло с покрытием Ceramic Shield устойчиво к механическим повреждениям. Пиковая яркость дисплея достигает 2000 кд/м2, благодаря чему устройством комфортно пользоваться на улице под прямыми лучами солнца.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп снимает видео в разрешении 4K с частотой 60 кадров в секунду. Благодаря технологии Smart HDR все цвета и оттенки в кадре выглядят максимально реалистично. Основной модуль также поддерживает двукратный оптический зум. Сверхширокоугольная камера дает возможность захватить в кадр все нужные детали. Умные алгоритмы добавляют портретным фото красивый эффект размытия, система автоматически определяет на фотографии не только человека, но и животных.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера с разрешением 12 Мп точно передает цвета благодаря поддержке технологии TrueDepth. Модуль также может записывать видео в разрешении 4K с частотой до 60 кадров в секунду.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Энергоёмкий аккумулятор обеспечивает до 20 часов беспрерывной работы смартфона в режиме просмотра видео. Зарядка и передача данных осуществляются через разъем USB Type-C. 30 минут зарядки достаточно для восполнения 50 % ёмкости аккумулятора.\n' +
      '\n' +
      'Дизайн\n' +
      'Рамки на передней панели стали меньше, за счёт чего увеличилась полезная площадь экрана. Боковые грани слегка скруглены, благодаря чему смартфон удобно и надёжно лежит в руке. На задней панели расположен привычный квадратный блок камер.',
    rating: 10
  },
  {
    id: 4,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 288288,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.\n' +
      ' \n' +
      'Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере.\n' +
      '\n' +
      'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка. Сверхширокоугольная камера также обеспечивает большое поле обзора, даже когда вы находитесь очень близко к объекту съемки. Поэтому вам не придется отступать назад, чтобы в кадр попало все, что нужно.\n' +
      ' \n' +
      'Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съемки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.\n' +
      '\n' +
      'Ночной режим автоматически регулирует параметры съемки. Даже при слабом освещении получаются яркие, четкие фотографии с невероятно насыщенными цветами.\n' +
      '\n' +
      'Режим «Портрет» художественно размывает фон, чтобы привлечь больше внимания к объекту съемки. Шесть эффектов освещения откроют широкий простор для творчества.\n' +
      '\n' +
      'Теперь режим Smart HDR 4 распознает до четырех людей в кадре и оптимизирует контрастность, освещение и даже тон кожи индивидуально. С ним каждый будет выглядеть наилучшим образом.\n' +
      '\n' +
      'Технология Deep Fusion помогает при среднем и низком уровне освещения. Она анализирует каждый пиксель на нескольких снимках, сделанных с различной экспозицией, чтобы на итоговом фото были видны едва различимые текстуры, тончайшие узоры и мельчайшие детали.\n' +
      '\n' +
      'Фотографические стили позволяют сделать ваши фото более выразительными. Но, в отличие от фильтров, стили применяются индивидуально для каждой области фотографии, не изменяя тон кожи людей.\n' +
      '\n' +
      'Процессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации.\n' +
      '\n' +
      'Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео.\n' +
      '\n' +
      'Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
    rating: 8
  },
  {
    id: 5,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/hce/83559848640542.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hab/hed/83559848706078.png?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
    price: 610015,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.\n' +
      '\n' +
      'Титановый корпус\n' +
      'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали. Внутренний структурный каркас iPhone из 100% переработанного алюминия. Вес флагмана составляет 221 г.\n' +
      '\n' +
      'Процессор\n' +
      'Новый процессор A17 Pro получил на 10% увеличенную производительность по сравнению с предыдущим поколением. Его мощности с запасом хватает для выполнения самых сложных задач.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей диагональю 6.7" точно передаёт цвета и обеспечивает изображение с высочайшим уровнем детализации. Максимальная частота обновления экрана составляет 120 Гц, благодаря чему все переходы воспроизводятся плавно и без рывков. Стекло с покрытием Ceramic Shield надёжно защищает дисплей от царапин и сколов.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп, увеличенным светочувствительным сенсором и апертурой f/1.78 способна делать детализированные фотографии как днём, так и ночью. Сверхширокоугольный модуль с разрешением 12 Мп и апертурой f/2.2 получил угол обзора 120 градусов, что позволяет поместить в кадре все нужные детали. Телеобъектив с разрешением 12 Мп и апертурой f/2.8 и пятикратным оптическим зумом позволяет максимально приблизить объект и запечатлеть его без потери качества. Для записи плавных видео в движении смартфон оснащён продвинутой оптической стабилизацией, которая работает сразу в нескольких направлениях.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера получила разрешение 12 Мп. Благодаря поддержке технологии TrueDepth цвета на снимке получаются глубокими и насыщенными.\n' +
      '\n' +
      'Передача данных до 20 раз быстрее\n' +
      'Через USB Type-C устройство может передавать информацию со скоростью до 10 Гбит/с.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Аккумулятор смартфона обеспечивает до 29 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    rating: 9.5
  },
  {
    id: 6,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h83/h61/83559837073438.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/hee/83559837138974.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb черный',
    price: 610725,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.\n' +
      '\n' +
      'Титановый корпус\n' +
      'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали. Внутренний структурный каркас iPhone из 100% переработанного алюминия. Вес флагмана составляет 221 г.\n' +
      '\n' +
      'Процессор\n' +
      'Новый процессор A17 Pro получил на 10% увеличенную производительность по сравнению с предыдущим поколением. Его мощности с запасом хватает для выполнения самых сложных задач.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей диагональю 6.7" точно передаёт цвета и обеспечивает изображение с высочайшим уровнем детализации. Максимальная частота обновления экрана составляет 120 Гц, благодаря чему все переходы воспроизводятся плавно и без рывков. Стекло с покрытием Ceramic Shield надёжно защищает дисплей от царапин и сколов.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп, увеличенным светочувствительным сенсором и апертурой f/1.78 способна делать детализированные фотографии как днём, так и ночью. Сверхширокоугольный модуль с разрешением 12 Мп и апертурой f/2.2 получил угол обзора 120 градусов, что позволяет поместить в кадре все нужные детали. Телеобъектив с разрешением 12 Мп и апертурой f/2.8 и пятикратным оптическим зумом позволяет максимально приблизить объект и запечатлеть его без потери качества. Для записи плавных видео в движении смартфон оснащён продвинутой оптической стабилизацией, которая работает сразу в нескольких направлениях.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера получила разрешение 12 Мп. Благодаря поддержке технологии TrueDepth цвета на снимке получаются глубокими и насыщенными.\n' +
      '\n' +
      'Передача данных до 20 раз быстрее\n' +
      'Через USB Type-C устройство может передавать информацию со скоростью до 10 Гбит/с.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Аккумулятор смартфона обеспечивает до 29 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    rating: 9
  },
  {
    id: 7,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h7c/83559620804638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h54/haa/83559620870174.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 15 Pro 256Gb серый',
    price: 569610,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.\n' +
      '\n' +
      'Титановый корпус\n' +
      'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали. Внутренний структурный каркас iPhone из 100% переработанного алюминия. Вес флагмана составляет 187 г.\n' +
      '\n' +
      'Процессор\n' +
      'Новый процессор A17 Pro получил на 10% увеличенную производительность по сравнению с предыдущим поколением. Его мощности с запасом хватает для выполнения самых сложных задач.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей диагональю 6.1" точно передаёт цвета и обеспечивает изображение с высочайшим уровнем детализации. Максимальная частота обновления экрана составляет 120 Гц, благодаря чему все переходы воспроизводятся плавно и без рывков. Стекло с покрытием Ceramic Shield надёжно защищает дисплей от царапин и сколов.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп, увеличенным светочувствительным сенсором и апертурой f/1.78 снимает чёткие фото и видео в любое время суток. Сверхширокоугольный модуль с разрешением 12 Мп и апертурой f/2.2 получил угол обзора 120 градусов, что позволяет поместить в кадре все нужные детали. Телеобъектив с разрешением 12 Мп и апертурой f/2.8 и трехкратным оптическим зумом дает возможность заснять объекты в максимальном приближении.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера получила разрешение 12 Мп. Благодаря поддержке технологии TrueDepth цвета на снимке получаются глубокими и насыщенными.\n' +
      '\n' +
      'Action Button\n' +
      'На месте переключателя громкости теперь находится сенсорная программируемая кнопка. Прикосновение вызывает приятный тактильный отклик. На эту кнопку можно назначить дополнительные действия.\n' +
      '\n' +
      'Передача данных до 20 раз быстрее\n' +
      'Через USB Type-C устройство может передавать информацию со скоростью до 10 Гбит/с.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Аккумулятор смартфона обеспечивает до 23 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    rating: 8
  },
  {
    id: 8,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h51/h3e/64255726747678.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/hf3/64255730286622.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 287540,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.\n' +
      ' \n' +
      'Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере.\n' +
      '\n' +
      'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка. Сверхширокоугольная камера также обеспечивает большое поле обзора, даже когда вы находитесь очень близко к объекту съемки. Поэтому вам не придется отступать назад, чтобы в кадр попало все, что нужно.\n' +
      ' \n' +
      'Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съемки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.\n' +
      '\n' +
      'Ночной режим автоматически регулирует параметры съемки. Даже при слабом освещении получаются яркие, четкие фотографии с невероятно насыщенными цветами.\n' +
      '\n' +
      'Режим «Портрет» художественно размывает фон, чтобы привлечь больше внимания к объекту съемки. Шесть эффектов освещения откроют широкий простор для творчества.\n' +
      '\n' +
      'Теперь режим Smart HDR 4 распознает до четырех людей в кадре и оптимизирует контрастность, освещение и даже тон кожи индивидуально. С ним каждый будет выглядеть наилучшим образом.\n' +
      '\n' +
      'Технология Deep Fusion помогает при среднем и низком уровне освещения. Она анализирует каждый пиксель на нескольких снимках, сделанных с различной экспозицией, чтобы на итоговом фото были видны едва различимые текстуры, тончайшие узоры и мельчайшие детали.\n' +
      '\n' +
      'Фотографические стили позволяют сделать ваши фото более выразительными. Но, в отличие от фильтров, стили применяются индивидуально для каждой области фотографии, не изменяя тон кожи людей.\n' +
      '\n' +
      'Процессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации.\n' +
      '\n' +
      'Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео.\n' +
      '\n' +
      'Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
    rating: 8.5
  },
  {
    id: 9,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h07/h01/83559618117662.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/83559618183198.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h92/83559618248734.png?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
    price: 517646,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.\n' +
      '\n' +
      'Титановый корпус\n' +
      'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали. Внутренний структурный каркас iPhone из 100% переработанного алюминия. Вес флагмана составляет 187 г.\n' +
      '\n' +
      'Процессор\n' +
      'Новый процессор A17 Pro получил на 10% увеличенную производительность по сравнению с предыдущим поколением. Его мощности с запасом хватает для выполнения самых сложных задач.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей диагональю 6.1" точно передаёт цвета и обеспечивает изображение с высочайшим уровнем детализации. Максимальная частота обновления экрана составляет 120 Гц, благодаря чему все переходы воспроизводятся плавно и без рывков. Стекло с покрытием Ceramic Shield надёжно защищает дисплей от царапин и сколов.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп, увеличенным светочувствительным сенсором и апертурой f/1.78 снимает чёткие фото и видео в любое время суток. Сверхширокоугольный модуль с разрешением 12 Мп и апертурой f/2.2 получил угол обзора 120 градусов, что позволяет поместить в кадре все нужные детали. Телеобъектив с разрешением 12 Мп и апертурой f/2.8 и трехкратным оптическим зумом дает возможность заснять объекты в максимальном приближении.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера получила разрешение 12 Мп. Благодаря поддержке технологии TrueDepth цвета на снимке получаются глубокими и насыщенными.\n' +
      '\n' +
      'Action Button\n' +
      'На месте переключателя громкости теперь находится сенсорная программируемая кнопка. Прикосновение вызывает приятный тактильный отклик. На эту кнопку можно назначить дополнительные действия.\n' +
      '\n' +
      'Передача данных до 20 раз быстрее\n' +
      'Через USB Type-C устройство может передавать информацию со скоростью до 10 Гбит/с.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Аккумулятор смартфона обеспечивает до 23 часов беспрерывной работы устройства в режиме просмотра видео. За 30 минут зарядки смартфон восполняет 50% заряда.',
    rating: 10
  },
  {
    id: 10,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hed/hd4/64401469243422.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h46/h6a/64401470390302.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h63/64401473536030.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 14 128Gb сиреневый',
    price: 321880,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.\n' +
      '\n' +
      'Распознавание аварий\n' +
      'iPhone 15 может обнаружить серьёзную автомобильную аварию, а затем позвонить в службу экстренной помощи и уведомить ваши контакты для экстренных случаев.\n' +
      '\n' +
      'Процессор\n' +
      'Устройство работает на процессоре A16 Bionic. Его мощности с запасом хватает для запуска любых мобильных игр на «максималках», рендеринга видео в высоком разрешении и других повседневных задач. Во время звонков интеллектуальная система шумоподавления усиливает голос пользователя и заглушает остальные звуки для чёткой голосовой связи. Заряда батареи хватает на весь день активного использования.\n' +
      '\n' +
      'Дисплей\n' +
      'Дисплей Super Retina XDR отличается невероятно высокой плотностью пикселей - фотографии, видео и текст выглядят поразительно чётко. Стекло с покрытием Ceramic Shield устойчиво к механическим повреждениям. Пиковая яркость дисплея достигает 2000 кд/м2, благодаря чему устройством комфортно пользоваться на улице под прямыми лучами солнца.\n' +
      '\n' +
      'Основная камера\n' +
      'Основная камера с разрешением 48 Мп снимает видео в разрешении 4K с частотой 60 кадров в секунду. Благодаря технологии Smart HDR все цвета и оттенки в кадре выглядят максимально реалистично. Основной модуль также поддерживает двукратный оптический зум. Сверхширокоугольная камера дает возможность захватить в кадр все нужные детали. Умные алгоритмы добавляют портретным фото красивый эффект размытия, система автоматически определяет на фотографии не только человека, но и животных.\n' +
      '\n' +
      'Фронтальная камера\n' +
      'Фронтальная камера с разрешением 12 Мп точно передает цвета благодаря поддержке технологии TrueDepth. Модуль также может записывать видео в разрешении 4K с частотой до 60 кадров в секунду.\n' +
      '\n' +
      'Больше часов автономной работы\n' +
      'Энергоёмкий аккумулятор обеспечивает до 20 часов беспрерывной работы смартфона в режиме просмотра видео. Зарядка и передача данных осуществляются через разъем USB Type-C. 30 минут зарядки достаточно для восполнения 50 % ёмкости аккумулятора.\n' +
      '\n' +
      'Дизайн\n' +
      'Рамки на передней панели стали меньше, за счёт чего увеличилась полезная площадь экрана. Боковые грани слегка скруглены, благодаря чему смартфон удобно и надёжно лежит в руке. На задней панели расположен привычный квадратный блок камер.',
    rating: 9
  },
  {
    id: 11,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h89/hd5/64000136019998.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h02/hdb/64000140935198.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 288717,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.\n' +
      ' \n' +
      'Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере.\n' +
      '\n' +
      'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка. Сверхширокоугольная камера также обеспечивает большое поле обзора, даже когда вы находитесь очень близко к объекту съемки. Поэтому вам не придется отступать назад, чтобы в кадр попало все, что нужно.\n' +
      ' \n' +
      'Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съемки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.\n' +
      '\n' +
      'Ночной режим автоматически регулирует параметры съемки. Даже при слабом освещении получаются яркие, четкие фотографии с невероятно насыщенными цветами.\n' +
      '\n' +
      'Режим «Портрет» художественно размывает фон, чтобы привлечь больше внимания к объекту съемки. Шесть эффектов освещения откроют широкий простор для творчества.\n' +
      '\n' +
      'Теперь режим Smart HDR 4 распознает до четырех людей в кадре и оптимизирует контрастность, освещение и даже тон кожи индивидуально. С ним каждый будет выглядеть наилучшим образом.\n' +
      '\n' +
      'Технология Deep Fusion помогает при среднем и низком уровне освещения. Она анализирует каждый пиксель на нескольких снимках, сделанных с различной экспозицией, чтобы на итоговом фото были видны едва различимые текстуры, тончайшие узоры и мельчайшие детали.\n' +
      '\n' +
      'Фотографические стили позволяют сделать ваши фото более выразительными. Но, в отличие от фильтров, стили применяются индивидуально для каждой области фотографии, не изменяя тон кожи людей.\n' +
      '\n' +
      'Процессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации.\n' +
      '\n' +
      'Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео.\n' +
      '\n' +
      'Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
    rating: 9
  },
  {
    id: 12,
    category: 'phone',
    photo: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hab/h36/64481571733534.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/h8c/64481575665694.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha0/h6a/64481577664542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/h56/64481579663390.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h5f/64481582612510.jpg?format=gallery-medium'
    ],
    name: 'Смартфон Apple iPhone 14 128Gb starlight',
    price: 322064,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.\n' +
      ' \n' +
      'Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере.\n' +
      '\n' +
      'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка. Сверхширокоугольная камера также обеспечивает большое поле обзора, даже когда вы находитесь очень близко к объекту съемки. Поэтому вам не придется отступать назад, чтобы в кадр попало все, что нужно.\n' +
      ' \n' +
      'Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съемки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.\n' +
      '\n' +
      'Ночной режим автоматически регулирует параметры съемки. Даже при слабом освещении получаются яркие, четкие фотографии с невероятно насыщенными цветами.\n' +
      '\n' +
      'Режим «Портрет» художественно размывает фон, чтобы привлечь больше внимания к объекту съемки. Шесть эффектов освещения откроют широкий простор для творчества.\n' +
      '\n' +
      'Теперь режим Smart HDR 4 распознает до четырех людей в кадре и оптимизирует контрастность, освещение и даже тон кожи индивидуально. С ним каждый будет выглядеть наилучшим образом.\n' +
      '\n' +
      'Технология Deep Fusion помогает при среднем и низком уровне освещения. Она анализирует каждый пиксель на нескольких снимках, сделанных с различной экспозицией, чтобы на итоговом фото были видны едва различимые текстуры, тончайшие узоры и мельчайшие детали.\n' +
      '\n' +
      'Фотографические стили позволяют сделать ваши фото более выразительными. Но, в отличие от фильтров, стили применяются индивидуально для каждой области фотографии, не изменяя тон кожи людей.\n' +
      '\n' +
      'Процессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации.\n' +
      '\n' +
      'Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео.\n' +
      '\n' +
      'Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий.',
    rating: 7.5
  },
  {
    id: 13,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 14,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 15,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 16,
    category: ,
    photo: [

    ],
    name: 17,
    price: ,
    description: ,
    rating:
  },
  {
    id: 18,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 19,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 20,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 21,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 22,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 23,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 24,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 25,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 26,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 27,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 28,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 29,
    category: ,
    photo: [

    ],
    name: ,
    price: ,
    description: ,
    rating:
  },
  {
    id: 30,
    category:,
    photo: [],
    name:,
    price:,
    description:,
    rating:
  }
];