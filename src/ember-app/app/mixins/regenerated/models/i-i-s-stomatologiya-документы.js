import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПаспорта: DS.attr('number'),
  полис: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-stomatologiya-клиент', { inverse: 'документы', async: false })
});

export let ValidationRules = {
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-stomatologiya-документы.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  полис: {
    descriptionKey: 'models.i-i-s-stomatologiya-документы.validations.полис.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-stomatologiya-документы.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-stomatologiya-документы.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументыE', 'i-i-s-stomatologiya-документы', {
    серияПаспорта: attr('Серия паспорта', { index: 0 }),
    номерПаспорта: attr('Номер паспорта', { index: 1 }),
    полис: attr('Полис', { index: 2 })
  });
};
