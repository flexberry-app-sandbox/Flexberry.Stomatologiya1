import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  сумма: DS.attr('decimal')
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-stomatologiya-регистр-записи.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-stomatologiya-регистр-записи.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-stomatologiya-регистр-записи.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-stomatologiya-регистр-записи.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрЗаписиE', 'i-i-s-stomatologiya-регистр-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });

  modelClass.defineProjection('РегистрЗаписиL', 'i-i-s-stomatologiya-регистр-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });
};
