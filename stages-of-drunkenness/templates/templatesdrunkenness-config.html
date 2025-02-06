Hooks.on('ready', async () => {
  console.log('Stages of Drunkenness module loaded');

  // Добавляем макрос в библиотеку
  const response = await fetch('scripts/applyDrunkennessEffects.js');
  const scriptContent = await response.text();
  const macroData = {
    name: "Apply Drunkenness Effects",
    type: "script",
    img: "icons/svg/drink.svg",
    command: scriptContent,
    folder: null,
    sort: 0,
    permission: { default: 2 },
    flags: {}
  };

  let existingMacro = game.macros.contents.find(m => m.data.name === macroData.name);
  if (!existingMacro) {
    Macro.create(macroData, { displaySheet: false });
  }

  const stages = [
    {
      level: 'Вы навеселе',
      beer: 0.8,
      wine: 0.267,
      vodka: 0.1,
      pureAlcohol: 0.04,
      effect: 'Перестаете обращать внимание на мелочи. Пассивное восприятие -5'
    },
    {
      level: 'Ухудшение координации',
      beer: 1.6,
      wine: 0.534,
      vodka: 0.2,
      pureAlcohol: 0.08,
      effect: 'Помеха на проверки СИЛ, ЛОВ, ТЕЛ'
    },
    {
      level: 'Язык заплетается',
      beer: 2.4,
      wine: 0.8,
      vodka: 0.3,
      pureAlcohol: 0.12,
      effect: 'Помеха на проверки ИНТ, МУД, ХАР'
    },
    {
      level: 'Шатает',
      beer: 3.2,
      wine: 1.07,
      vodka: 0.4,
      pureAlcohol: 0.16,
      effect: 'Помеха на броски атаки и спасброски'
    },
    {
      level: 'Ноги заплетаются',
      beer: 4,
      wine: 1.34,
      vodka: 0.5,
      pureAlcohol: 0.2,
      effect: 'Скорость уменьшается вдвое'
    },
    {
      level: 'Притупляется чувство опасности',
      beer: 4.8,
      wine: 1.6,
      vodka: 0.6,
      pureAlcohol: 0.24,
      effect: 'Атаки по вам с преимуществом'
    },
    {
      level: 'Вы теряете чувство верха и низа',
      beer: 5.6,
      wine: 1.87,
      vodka: 0.7,
      pureAlcohol: 0.28,
      effect: 'Если вы не опираетесь на что-то, то в конце хода вы падаете'
    },
    {
      level: 'Рвота',
      beer: 6.4,
      wine: 2.14,
      vodka: 0.8,
      pureAlcohol: 0.32,
      effect: 'В течении одной минуты вас рвет. По истечении рвоты вы теряете одну степень опьянения (рвота срабатывает один раз в стуки)'
    },
    {
      level: 'Конец истории',
      beer: 7.2,
      wine: 2.4,
      vodka: 0.9,
      pureAlcohol: 0.36,
      effect: 'Вы без сознания 10 часов'
    }
  ];

  game.settings.registerMenu("drunkenness-stages", "configureMenu", {
    name: "Configure Stages of Drunkenness",
    label: "Configure",
    type: DrunkennessConfig,
    restricted: true
  });

  game.settings.register("drunkenness-stages", "stages", {
    name: "Stages of Drunkenness",
    scope: "world",
    config: false,
    default: stages,
    type: Object
  });

  class DrunkennessConfig extends FormApplication {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        title: "Configure Stages of Drunkenness",
        id: "drunkenness-config",
        template: "templates/drunkenness-config.html",
        width: 500,
        height: "auto",
        closeOnSubmit: true
      });
    }

    getData() {
      return game.settings.get("drunkenness-stages", "stages");
    }

    activateListeners(html) {
      super.activateListeners(html);
      html.find(".reset-defaults").click(this._onResetDefaults.bind(this));
    }

    async _updateObject(event, formData) {
      await game.settings.set("drunkenness-stages", "stages", formData);
    }

    async _onResetDefaults(event) {
      event.preventDefault();
      await game.settings.set("drunkenness-stages", "stages", stages);
      this.render();
    }
  }
});