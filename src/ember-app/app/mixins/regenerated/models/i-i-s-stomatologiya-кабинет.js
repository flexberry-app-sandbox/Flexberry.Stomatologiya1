import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКабинета: DS.attr('number')
});

export let ValidationRules = {
  номерКабинета: {
    descriptionKey: 'models.i-i-s-stomatologiya-кабинет.validations.номерКабинета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КабинетE', 'i-i-s-stomatologiya-кабинет', {
    номерКабинета: attr('Номер кабинета', { index: 0 })
  });

  modelClass.defineProjection('КабинетL', 'i-i-s-stomatologiya-кабинет', {
    номерКабинета: attr('Номер кабинета', { index: 0 })
  });
};
