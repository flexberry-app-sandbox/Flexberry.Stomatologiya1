import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьMixin
} from '../mixins/regenerated/models/i-i-s-stomatologiya-запись';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьMixin, Validations, {
});

defineProjections(Model);

export default Model;
