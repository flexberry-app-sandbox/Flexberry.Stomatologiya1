import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницыEnum from '../enums/i-i-s-stomatologiya-единицы';

export default FlexberryEnum.extend({
  enum: ЕдиницыEnum,
  sourceType: 'IIS.Stomatologiya.Единицы'
});
