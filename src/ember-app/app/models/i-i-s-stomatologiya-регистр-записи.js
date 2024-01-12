import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-stomatologiya-регистр-записи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрЗаписиMixin, Validations, {
});

defineProjections(Model);

export default Model;
