import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject (object, array) {
  const mapObj = fromJS(object);

  return mapObj.getIn(array, undefined);
}
