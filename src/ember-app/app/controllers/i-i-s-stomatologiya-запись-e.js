import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-stomatologiya-запись-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-stomatologiya-оказание-услуг+сотрудник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'сотрудник',
            projection: 'СотрудникL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-stomatologiya-оказание-услуг+услуга':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'услуга',
            projection: 'УслугаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
