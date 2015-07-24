'use strict';

import HenceCompModelUser from './hence-comp-model-user';

HenceCompModelUser.appendElementTo({
  query : {
    id: 1
  }
});
HenceCompModelUser.appendElementTo({
  query : {
    id: 2
  }
});

export * from './hence-comp-model-user';
