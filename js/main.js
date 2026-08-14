/* ===== Pancoff — interactions & data ===== */
(function () {
  "use strict";

  var BASE = (function () {
    var src = document.currentScript && document.currentScript.src;
    if (src) {
      var i = src.lastIndexOf("/js/main.js");
      if (i > 0) return src.slice(0, i + 1);
    }
    return "";
  })();

  /* ---------- data ---------- */
  var advantages = [
    { icon: "💰", title: "От 14 ₽ за чашку", text: "Низкая себестоимость напитка при аренде — 3 кг кофе хватает на 300 чашек, машина предоставляется бесплатно." },
    { icon: "🌱", title: "Кофе любого сорта", text: "Зерновой кофе Hausbrandt и Verle лучших сортов из Италии и Центральной Америки — в аренду вместе с машиной." },
    { icon: "🛠️", title: "Ежемесячное обслуживание", text: "Чистка и профилактика кофемашины раз в месяц, доставка кофе по адресу в течение рабочего дня." },
    { icon: "🔧", title: "Бесплатный ремонт", text: "Диагностика и ремонт бесплатно при регулярной закупке кофе. На время ремонта — подменная машина." }
  ];

  var packages = [
    {
      tag: "Бюджетный",
      hot: false,
      name: "Melitta Bistro",
      machine: "Полуавтомат · стальной корпус",
      spec: [["Напитки", "американо, эспрессо"], ["Чашек в день", "6–10"], ["Кофе", "от 3 кг/мес"]],
      price: "4 500 ₽",
      note: "себестоимость чашки — 14 ₽"
    },
    {
      tag: "Для офиса",
      hot: true,
      name: "Melitta Ci",
      machine: "Суперавтомат · автокапучинатор",
      spec: [["Напитки", "эспрессо, капучино, латте"], ["Чашек в день", "6–10"], ["Кофе", "5 кг/мес · 1 500 ₽/кг"]],
      price: "7 500 ₽",
      note: "себестоимость чашки — 15 ₽"
    },
    {
      tag: "Для среднего офиса",
      hot: false,
      name: "Melitta Barista",
      machine: "Суперавтомат · сенсорное управление",
      spec: [["Напитки", "4+ напитка в одно нажатие"], ["Чашек в день", "30–45"], ["Кофе", "10 кг/мес · 1 400 ₽/кг"]],
      price: "14 000 ₽",
      note: "себестоимость чашки — 14 ₽"
    },
    {
      tag: "Высокая проходимость",
      hot: false,
      name: "Jura Impressa Z9",
      machine: "Швейцарский суперавтомат · TFT",
      spec: [["Напитки", "эспрессо, латте, капучино"], ["Чашек в день", "50–70"], ["Кофе", "15 кг/мес"]],
      price: "23 250 ₽",
      note: "себестоимость чашки — 15,5 ₽"
    }
  ];

  var catalog = [
    { brand: "Sate", name: "CT-100", img: "images/rent/sate-ct-100.png", desc: "Автоматическая кофемашина с автокапучинатором. Готовит капучино и латте в одно нажатие.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 3 кг кофе", price: "6 200 ₽ / 3 кг" },
    { brand: "Sate", name: "CT-200", img: "images/rent/sate-ct-200.png", desc: "Старшая модель Sate с большей производительностью и увеличенным резервуаром.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 5 кг кофе", price: "9 500 ₽ / 5 кг" },
    { brand: "Rooma", name: "RM-A9 PBT Black", img: "images/rent/rooma-rm-a9.png", desc: "Автомат с автокапучинатором в чёрном корпусе. Хороший баланс цены и функциональности.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 4 кг кофе", price: "8 000 ₽ / 4 кг" },
    { brand: "Melitta", name: "E 970-101 Caffeo CI", img: "images/rent/melitta-970-101.png", desc: "Суперавтомат с сенсорным управлением — бодрый старт утра для любого коллектива.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 5 кг кофе", price: "10 000 ₽ / 5 кг" },
    { brand: "Melitta", name: "F 730-101 Barista T", img: "images/rent/melitta-730-101.png", desc: "Флагман с автокапучинатором и сенсорным экраном для требовательных офисов.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 7 кг кофе", price: "14 000 ₽ / 7 кг" },
    { brand: "Proxima", name: "Dr.coffee F11", img: "images/rent/proxima-f11.png", desc: "Профессиональный суперавтомат для точек питания и офисов с высокой нагрузкой.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 13 кг кофе", price: "по договорённости" },
    { brand: "Proxima", name: "Dr.coffee F12", img: "images/rent/proxima-f12.png", desc: "Повышенная производительность, выдерживает интенсивные циклы приготовления.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 15 кг кофе", price: "по договорённости" },
    { brand: "Proxima", name: "Dr.coffee Minibar S", img: "images/rent/proxima-minibar-s.png", desc: "Флагман линейки Proxima — для ресторанов, кафе и офисов большой площади.", drinks: ["Эспрессо", "Американо", "Капучино", "Латте"], rent: "от 18 кг кофе", price: "по договорённости" }
  ];

  var sale = {
    "Melitta": [
      ["F 730-201 Caffeo Barista T", "images/sale/melitta-730-201.png"], ["F 730-202 Caffeo Barista T", "images/sale/melitta-730-202.png"],
      ["F 570-101 Caffeo Varianza CSP", "images/sale/melitta-570-101.png"], ["F 630-101 CI Touch", "images/sale/melitta-630-101.png"],
      ["F 630-102 CI Touch", "images/sale/melitta-630-102.png"], ["F 531-101 Caffeo Passione OT", "images/sale/melitta-531-101.png"],
      ["F 531-102 Caffeo Passione OT", "images/sale/melitta-531-102.png"], ["F 530-101 Caffeo Passione", "images/sale/melitta-530-101.png"],
      ["F 530-102 Caffeo Passione", "images/sale/melitta-530-102.png"], ["957-101 Caffeo Solo & Perfect Milk", "images/sale/melitta-957-101.png"],
      ["957-103 Caffeo Solo & Perfect Milk", "images/sale/melitta-957-103.png"], ["953-102 Caffeo Solo & Milk", "images/sale/melitta-953-102.png"]
    ],
    "Nivona": [
      ["Nivona CafeRomatica 520", "images/sale/nivona-520.png"], ["Nivona CafeRomatica 530", "images/sale/nivona-530.png"],
      ["Nivona CafeRomatica 646", "images/sale/nivona-646.png"], ["Nivona CafeRomatica 656", "images/sale/nivona-656.png"],
      ["Nivona CafeRomatica 660", "images/sale/nivona-660.png"], ["Nivona CafeRomatica 758", "images/sale/nivona-758.png"],
      ["Nivona CafeRomatica 778", "images/sale/nivona-778.png"], ["Nivona CafeRomatica 788", "images/sale/nivona-788.png"]
    ]
  };

  var coffees = [
    { cls: "roast-5", roast: "№5", name: "Verle №5", text: "Сбалансированный кофе светлой обжарки с округлым телом и нотами орехов и какао. Арабика Бразилия 93% (натуральная обработка) + арабика Колумбия 7% (мытая)." },
    { cls: "roast-3", roast: "№3", name: "Verle №3", text: "Espresso Blend из отборной бразильской (Brasil Santos) и индийской (India Cherry) арабики в пропорции 75/25. Насыщенный вкус с мягкой кислотностью, ноты муската и жёлтого яблока." },
    { cls: "roast-sold", roast: "Sold Out", name: "Verle Sold Out", text: "Базовый бленд: Бразилия Сантос 50% + Колумбия Супремо 50%. Минимальная кислотность, сладость молочного шоколада, жёлтые фрукты и фундук в букете." }
  ];

  var reviews = [
    { author: "Елена", who: "Аренда для офиса", text: "Быстро и удобно. Хорошее обслуживание, консультация и доставка. Плюс к этому зерновой и качественный кофе Hausbrandt." },
    { author: "Евгений", who: "Студент", text: "Ваша кофемашина помогла мне выучить материал для сдачи сессии. Буду и дальше практиковать такой метод подготовки к экзаменам." },
    { author: "Анна", who: "Руководитель отдела", text: "После появления в офисе кофемашины Melitta E 970 наши сотрудники даже утром пытаются работать. Шеф не успевает покупать кофе." }
  ];

  var service = [
    { title: "Для кофемашин", items: ["Устранение неполадок", "Чистка кофейной системы", "Удаление накипи", "Доставка кофе по тарифу", "Профилактика механизмов", "Очистка молочной системы"] },
    { title: "Для кофеаппаратов", items: ["Устранение неполадок", "Чистка кофейной системы", "Удаление накипи", "Загрузка ингредиентов", "Замена комплектующих"] }
  ];

  var officePoints = [
    "Защищает от стрессов и депрессий",
    "Снижает риск сердечно-сосудистых заболеваний",
    "Стимулирует выработку гормонов счастья",
    "Повышает эффективность умственного труда",
    "Помогает вести переговоры — партнёры, клиенты, проверяющие",
    "Замена растворимого кофе на натуральный зерновой"
  ];

  /* ---------- render helpers ---------- */
  function $(sel) { return document.querySelector(sel); }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

  function renderAdvantages() {
    var root = $("#advantagesGrid"); if (!root) return;
    root.innerHTML = advantages.map(function (a) {
      return '<div class="card reveal"><div class="card__icon">' + a.icon + '</div><h3>' + a.title + '</h3><p>' + a.text + '</p></div>';
    }).join("");
  }

  function renderPackages() {
    var root = $("#packagesGrid"); if (!root) return;
    root.innerHTML = packages.map(function (p) {
      return '<div class="package reveal' + (p.hot ? " package--hot" : "") + '">' +
        (p.hot ? '<span class="package__ribbon">Хит продаж</span>' : "") +
        '<span class="package__tag">' + p.tag + '</span>' +
        '<h3>' + p.name + '</h3>' +
        '<div class="package__machine">' + p.machine + '</div>' +
        '<div class="package__specs">' +
        p.spec.map(function (s) { return '<div class="package__spec"><span>' + s[0] + '</span><b>' + s[1] + '</b></div>'; }).join("") +
        '</div>' +
        '<div class="package__price"><b>' + p.price + '</b><span>/ месяц</span></div>' +
        '<span class="package__cup">' + p.note + '</span>' +
        '<div class="package__perks">' +
        '<span class="package__perk">Установка 0 ₽</span>' +
        '<span class="package__perk">Сервис включён</span>' +
        '<span class="package__perk">Замена при поломке</span>' +
        '</div>' +
        '<a class="btn btn--accent" href="#order" data-order data-tpl="package" data-subject="Аренда кофемашины" data-tariff="' + p.tag + '" data-machine="' + p.name + '" data-price="' + p.price + '" data-cups="' + p.spec[1][1] + '" data-coffee="' + p.spec[2][1] + '">Выбрать тариф</a>' +
        '</div>';
    }).join("");

    var note = $("#packagesNote");
    if (note) note.innerHTML =
      '<b>Всё включено бесплатно:</b> установка и наладка · обучение и инструктаж · доставка кофе · ежемесячное сервисное обслуживание · замена кофемашины при поломке · персональный менеджер. <b>Аренда — при закупке кофе от 2 кг в месяц.</b>';
  }

  function itemPhoto(m, i) {
    return '<div class="item__img">' +
      '<img class="item__img-photo" src="' + BASE + m.img + '" alt="' + m.brand + ' ' + m.name + '" loading="lazy">' +
      '</div>';
  }

  function bindPhotoFallback(root) {
    [].forEach.call(root.querySelectorAll(".item__img-photo"), function (img) {
      img.addEventListener("error", function () { img.remove(); });
    });
  }

  function renderCatalog() {
    var root = $("#catalogGrid"); if (!root) return;
    root.innerHTML = catalog.map(function (m, i) {
      return '<div class="item reveal">' +
        itemPhoto(m, i) +
        '<div class="item__body">' +
        '<span class="item__brand">' + m.brand + '</span>' +
        '<h3>' + m.name + '</h3>' +
        '<p class="item__desc">' + m.desc + '</p>' +
        '<div class="item__drinks">' + m.drinks.map(function (d) { return '<span class="chip">' + d + '</span>'; }).join("") + '</div>' +
        '<div class="item__foot">' +
        '<div class="item__price"><b>' + m.price + '</b><span>' + m.rent + '</span></div>' +
          '<a class="btn btn--accent" href="#order" data-order data-tpl="rent" data-subject="Аренда кофемашины" data-machine="' + m.brand + ' ' + m.name + '" data-price="' + m.price + '">Заказать</a>' +
        '</div></div></div>';
    }).join("");
    bindPhotoFallback($("#catalogGrid"));
  }

  function renderSale() {
    var tabsEl = $("#saleTabs"); if (!tabsEl) return;
    var tabs = Object.keys(sale);
    var tabsHtml = tabs.map(function (t, i) {
      return '<button class="tab' + (i === 0 ? " active" : "") + '" data-tab="' + t + '" role="tab">' + t + '</button>';
    }).join("");
    tabsEl.innerHTML = tabsHtml;

    function grid(name) {
      return sale[name].map(function (m, i) {
        return '<div class="item reveal">' +
          itemPhoto({ brand: name, name: m[0], img: m[1] }, i + 3) +
          '<div class="item__body">' +
          '<span class="item__brand">' + name + '</span>' +
          '<h3>' + m[0] + '</h3>' +
          '<p class="item__desc">Автоматическая кофемашина премиум-класса. Гарантия производителя, доставка по СПб и ЛО.</p>' +
          '<div class="item__foot">' +
          '<div class="item__price"><b>Узнать цену</b><span>звоните — подскажем</span></div>' +
        '<a class="btn btn--accent" href="#order" data-order data-tpl="buy" data-subject="Покупка кофемашины" data-machine="' + name + ' ' + m[0] + '" data-price="по запросу">Заказать</a>' +
          '</div></div></div>';
      }).join("");
    }
    $("#saleGrid").innerHTML = grid(tabs[0]);
    bindPhotoFallback($("#saleGrid"));

    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      this.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
      btn.classList.add("active");
      $("#saleGrid").innerHTML = grid(btn.dataset.tab);
      bindPhotoFallback($("#saleGrid"));
      observeReveals();
    });
  }

  function renderCoffee() {
    var root = $("#coffeeGrid"); if (!root) return;
    root.innerHTML = coffees.map(function (c) {
      return '<div class="coffee__card reveal">' +
        '<div class="coffee__roast coffee__roast--' + c.cls + '">' + c.roast + '</div>' +
        '<h3>' + c.name + '</h3><p>' + c.text + '</p></div>';
    }).join("");
  }

  function renderService() {
    var cols = $("#serviceCols"); if (!cols) return;
    cols.innerHTML = service.map(function (s) {
      return '<div class="srv-card"><b>' + s.title + '</b><p>' + s.items.join(" · ") + '</p></div>';
    }).join("");
    var list = $("#serviceList");
    if (list) list.innerHTML = [
      "Бесплатный ремонт и диагностика при регулярной закупке кофе",
      "Ежемесячная профилактика и чистка кофемашины",
      "Доставка кофе по Санкт-Петербургу и Лен. области",
      "Замена кофемашины на время ремонта",
      "Техподдержка ежедневно с 10:00 до 18:00"
    ].map(function (t) { return "<li>" + t + "</li>"; }).join("");
  }

  function renderReviews() {
    var root = $("#reviewsGrid"); if (!root) return;
    root.innerHTML = reviews.map(function (r) {
      return '<div class="review reveal">' +
        '<div class="review__stars">★★★★★</div>' +
        '<p>«' + r.text + '»</p>' +
        '<div class="review__author"><div class="review__avatar">' + r.author[0] + '</div>' +
        '<div><b>' + r.author + '</b><span>' + r.who + '</span></div></div></div>';
    }).join("");
  }

  function renderOffice() {
    var root = $("#officeChecklist"); if (!root) return;
    root.innerHTML = officePoints.map(function (p) { return "<li>" + p + "</li>"; }).join("");
  }

  /* ---------- calculator ---------- */
  var lastCalc = null;
  function calcRecommend(cups) {
    var rec;
    if (cups <= 10) rec = packages[0];
    else if (cups <= 25) rec = packages[1];
    else if (cups <= 45) rec = packages[2];
    else rec = packages[3];
    var kg = Math.max(2, Math.ceil((cups * 22) / 300));
    var price = kg <= 3 ? 4500 : (kg <= 5 ? 7500 : (kg <= 10 ? 14000 : 23250));
    var perCup = Math.round(price / (cups * 22));
    return { name: rec.name, tag: rec.tag, kg: kg, price: price, perCup: perCup, cups: cups };
  }

  function renderCalc() {
    var slider = $("#cups"); if (!slider) return;
    var cups = parseInt(slider.value, 10);
    $("#cupsValue").textContent = cups;
    var r = calcRecommend(cups);
    lastCalc = r;
    $("#calcResult").innerHTML =
      '<p class="calc__label">Рекомендуемый тариф</p>' +
      '<h4>' + r.tag + '</h4>' +
      '<div class="calc__price">≈ ' + r.price.toLocaleString("ru-RU") + ' ₽<span> / мес</span></div>' +
      '<p class="calc__row">Объём кофе: <b>' + r.kg + ' кг/мес</b> (≈ ' + (r.kg * 100) + ' чашек)</p>' +
      '<p class="calc__row">Для <b>' + r.cups + ' чашек</b> в день при 22 рабочих днях</p>' +
      '<p class="calc__row">Себестоимость чашки ≈ <b>' + r.perCup + ' ₽</b></p>' +
      '<a class="btn btn--accent calc__btn" href="#order" data-calc-order data-subject="Аренда кофемашины">Выбрать этот тариф</a>';
  }

  /* ---------- header / nav / mobile ---------- */
  var header = $("#header");
  var nav = $("#nav");
  var burger = $("#burger");
  var navBackdrop = $("#navBackdrop");
  function setNav(open) {
    nav.classList.toggle("open", open);
    if (navBackdrop) navBackdrop.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () {
    setNav(!nav.classList.contains("open"));
  });
  if (navBackdrop) navBackdrop.addEventListener("click", function () { setNav(false); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) setNav(false);
  });
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024 && nav.classList.contains("open")) setNav(false);
  });

  /* ---------- reveal ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;

  function observeReveals() {
    var nodes = document.querySelectorAll(".reveal:not(.in)");
    if (!io) { nodes.forEach(function (n) { n.classList.add("in"); }); return; }
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- form ---------- */
  var form = $("#orderForm");
  var resetTimer = null;
  var lastSend = 0;
  function handleOrderSubmit() {
    var now = Date.now();
    if (now - lastSend < 900) return;
    lastSend = now;
    if (resetTimer) clearTimeout(resetTimer);
    var inputs = form.querySelectorAll("[required]");
    var ok = true;
    inputs.forEach(function (inp) {
      var bad = inp.name === "phone" ? !/^[+\d][\d\s()\-]{5,}$/.test(inp.value) : !inp.value.trim();
      inp.classList.toggle("error", bad);
      if (bad) ok = false;
    });
    if (!ok) {
      toast("Пожалуйста, заполните имя и телефон корректно.");
      return;
    }
    sendByMail(form);
    form.classList.add("success");
    toast("Спасибо! В почтовой программе откроется письмо с заявкой.");
    resetTimer = setTimeout(function () {
      form.reset();
      form.classList.remove("success");
    }, 5000);
  }
  var ORDER_TPL = {
    calc: function (d) {
      return "Рекомендуемый тариф: " + d.tariff + " · " + d.machine + "\n" +
        "Количество чашек в день: " + d.cups + "\n" +
        "Планируемый объём кофе: " + d.coffee + "\n" +
        "Себестоимость чашки: ≈ " + d.perCup + " ₽\n\n" +
        "Прошу рассчитать аренду и подобрать кофемашину.";
    },
    package: function (d) {
      return "Тариф: " + d.tariff + " · " + d.machine + ", " + d.price + "/мес\n" +
        (d.cups ? "Количество чашек в день: " + d.cups + "\n" : "") +
        (d.coffee ? "Планируемый объём кофе: " + d.coffee + "\n" : "") +
        "\nПрошу рассчитать аренду и подобрать кофемашину.";
    },
    rent: function (d) {
      return (d.machine ? "Хочу арендовать кофемашину: " + d.machine + "\n" : "Хочу арендовать кофемашину.\n") +
        (d.price ? "Стоимость аренды: " + d.price + "\n" : "") +
        "\nПрошу рассчитать условия аренды.";
    },
    buy: function (d) {
      return (d.machine ? "Хочу купить кофемашину: " + d.machine + "\n" : "Хочу купить кофемашину.\n") +
        (d.price ? "Цена: " + d.price + "\n" : "") +
        "\nПрошу уточнить наличие и стоимость доставки.";
    },
    office: function () {
      return "Интересует аренда кофемашины в офис в СПб.\n\nПрошу рассчитать стоимость и подобрать кофемашину.";
    },
    remont: function () {
      return "Нужен ремонт или обслуживание кофемашины.\n\nПрошу связаться и уточнить детали.";
    },
    coffee: function () {
      return "Хочу заказать кофе в зёрнах.\n\nПрошу связаться для подбора сорта и расчёта.";
    },
    "default": function () {
      return "Прошу рассчитать условия и связаться со мной.";
    }
  };

  function applyOrderPreset(btn) {
    var msg = form.querySelector('[name="message"]');
    if (!msg) return;
    var d = {
      tariff: btn.getAttribute("data-tariff") || "",
      machine: btn.getAttribute("data-machine") || "",
      price: btn.getAttribute("data-price") || "",
      cups: btn.getAttribute("data-cups") || "",
      coffee: btn.getAttribute("data-coffee") || ""
    };
    var text;
    if (btn.hasAttribute("data-calc-order") && lastCalc) {
      d.tariff = lastCalc.tag;
      d.machine = lastCalc.name;
      d.cups = lastCalc.cups;
      d.coffee = lastCalc.kg + " кг/мес (≈ " + (lastCalc.kg * 100) + " чашек)";
      d.perCup = lastCalc.perCup;
      text = ORDER_TPL.calc(d);
    } else {
      text = (ORDER_TPL[btn.getAttribute("data-tpl")] || ORDER_TPL["default"])(d);
    }
    var subject = form.querySelector('[name="subject"]');
    if (subject) {
      var s = btn.getAttribute("data-subject") || "";
      if (s) {
        for (var i = 0; i < subject.options.length; i++) {
          if (subject.options[i].text && subject.options[i].text.toLowerCase().indexOf(s.toLowerCase()) !== -1) {
            subject.value = subject.options[i].value;
            break;
          }
        }
      }
    }
    msg.value = text;
  }

  if (form) {
    form.addEventListener("submit", function (e) { e.preventDefault(); handleOrderSubmit(); });
    document.addEventListener("submit", function (e) {
      var f = e.target && e.target.closest ? e.target.closest("#orderForm") : null;
      if (f) { e.preventDefault(); handleOrderSubmit(); }
    }, true);
    var submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.addEventListener("click", handleOrderSubmit);
    document.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-order], [data-calc-order]") : null;
      if (!btn) return;
      applyOrderPreset(btn);
    });
  }

  function sendByMail(f) {
    var data = {};
    [].forEach.call(f.querySelectorAll("[name]"), function (inp) { data[inp.name] = inp.value.trim(); });
    var subject = "Заявка с сайта Pancoff — " + (data.subject || "консультация");
    var body =
      "Имя: " + data.name + "\n" +
      "Телефон: " + data.phone + "\n" +
      "Тема: " + (data.subject || "—") + "\n" +
      (data.message ? "Комментарий: " + data.message + "\n" : "") +
      "\nОтправлено с сайта Pancoff";
    var a = document.createElement("a");
    a.href = "mailto:pancoff-spb@mail.ru?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    var mailLink = f.querySelector(".form__mailto");
    if (mailLink) mailLink.setAttribute("href", a.href);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function toast(msg) {
    var t = el('<div class="toast">' + msg + "</div>");
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 400); }, 3200);
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderAdvantages();
    renderPackages();
    renderCatalog();
    renderSale();
    renderCoffee();
    renderService();
    renderReviews();
    renderOffice();
    renderCalc();
    var cups = $("#cups");
    if (cups) cups.addEventListener("input", renderCalc);
    observeReveals();
  });
})();
