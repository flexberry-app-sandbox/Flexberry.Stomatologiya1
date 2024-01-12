import {
  defineNamespace,
  defineProjections,
  Model as РегистрЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-stomatologiya-регистр-записи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрЗаписиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
