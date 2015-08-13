'use strict';

import HenceUserCard from './hence-user-card';

HenceUserCard.appendElementTo({
  query: {
    id: 1
  }
});
HenceUserCard.appendElementTo({
  query: {
    id: 2
  }
});

export * from './hence-user-card';
