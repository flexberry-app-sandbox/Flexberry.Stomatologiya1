import {
  defineNamespace,
  defineProjections,
  Model as КабинетMixin
} from '../mixins/regenerated/models/i-i-s-stomatologiya-кабинет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КабинетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
