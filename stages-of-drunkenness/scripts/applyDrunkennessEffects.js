(async () => {
  const stages = [
    {
      level: 'Вы навеселе',
      effect: 'Перестаете обращать внимание на мелочи. Пассивное восприятие -5'
    },
    {
      level: 'Ухудшение координации',
      effect: 'Помеха на проверки СИЛ, ЛОВ, ТЕЛ'
    },
    {
      level: 'Язык заплетается',
      effect: 'Помеха на проверки ИНТ, МУД, ХАР'
    },
    {
      level: 'Шатает',
      effect: 'Помеха на броски атаки и спасброски'
    },
    {
      level: 'Ноги заплетаются',
      effect: 'Скорость уменьшается вдвое'
    },
    {
      level: 'Притупляется чувство опасности',
      effect: 'Атаки по вам с преимуществом'
    },
    {
      level: 'Вы теряете чувство верха и низа',
      effect: 'Если вы не опираетесь на что-то, то в конце хода вы падаете'
    },
    {
      level: 'Рвота',
      effect: 'В течении одной минуты вас рвет. По истечении рвоты вы теряете одну степень опьянения (рвота срабатывает один раз в стуки)'
    },
    {
      level: 'Конец истории',
      effect: 'Вы без сознания 10 часов'
    },
    {
      level: 'Без сознания',
      effect: 'Вы без сознания'
    }
  ];

  const selectedToken = canvas.tokens.controlled[0];
  if (!selectedToken) {
    ui.notifications.warn('Пожалуйста, выберите персонажа.');
    return;
  }

  const stageOptions = stages.map((stage, index) => `<option value="${index + 1}">${index + 1} - ${stage.level}</option>`).join('');
  const content = `
    <form>
      <div class="form-group">
        <label>Выберите стадию опьянения:</label>
        <select id="drunkenness-stage" name="drunkenness-stage">
          <option value="0">0 - Снять эффекты</option>
          ${stageOptions}
        </select>
      </div>
    </form>
  `;

  const applyEffects = async (stageIndex) => {
    const existingEffect = selectedToken.actor.effects.find(effect => effect.data.flags?.drunkenness);
    if (existingEffect) {
      await existingEffect.delete();
    }

    if (stageIndex === 0) return;

    const stage = stages[stageIndex - 1];
    const effectData = {
      label: `Опьянение: ${stage.level}`,
      icon: 'icons/svg/drink.svg',
      origin: `Actor.${selectedToken.actor.id}`,
      disabled: false,
      duration: { rounds: 10 },
      flags: { drunkenness: true },
      changes: [
        { key: 'data.attributes.movement.walk', mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY, value: stageIndex === 5 ? '0.5' : '1.0', priority: 20 },
        { key: 'flags.drunkenness', mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE, value: stage.effect, priority: 20 }
      ]
    };

    await selectedToken.actor.createEmbeddedDocuments('ActiveEffect', [effectData]);
    ui.notifications.info(`Применен эффект: ${stage.level}`);
  };

  new Dialog({
    title: 'Стадии опьянения',
    content,
    buttons: {
      apply: {
        label: 'Применить',
        callback: async (html) => {
          const stageIndex = parseInt(html.find('[name="drunkenness-stage"]').val());
          await applyEffects(stageIndex);
        }
      },
      cancel: {
        label: 'Отмена'
      }
    }
  }).render(true);
})();