import { isArray } from 'lodash';

type FilterObjectType = {
  [key: string]: string | string[];
};

const mapStateInParams = (filterObject: FilterObjectType) => {
  const params: string[] = [];
  Object.entries(filterObject).forEach(([key, val]) => {
    if (isArray(val)) {
      if (!val.length) return '';
    } else {
      if (!val || !val.length) return '';
      params.push(`${key}=${val}`);
    }
    return params;
  });
  return params;
};

export default mapStateInParams;
