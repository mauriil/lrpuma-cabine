import React, { lazy, Suspense } from 'react';

const LazyNumberIndicators = lazy(() => import('./NumberIndicators'));

const NumberIndicators = props => (
  <Suspense fallback={null}>
    <LazyNumberIndicators {...props} />
  </Suspense>
);

export default NumberIndicators;
