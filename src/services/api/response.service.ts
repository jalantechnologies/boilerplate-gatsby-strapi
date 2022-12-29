import * as _ from 'lodash';

class ServiceResponse<T> {
  data?: T;

  error?: any;

  meta?: any;

  constructor(data?: T, error?: any) {
    this.data = data;
    this.error = error;
  }

  hasData(): boolean {
    return !_.isNil(this.data);
  }

  hasError(): boolean {
    return !_.isEmpty(this.error);
  }
}

export default ServiceResponse;
