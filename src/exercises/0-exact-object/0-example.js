// @flow
// TODO: Deprecate extension

type Config = {
  useCache: boolean,
  prefetchData: boolean,
  extension: 'js' | 'json',
}

function lazyLoad(config: Config): Promise<any> {
  // .. some logic
  return Promise.resolve({})
}

// other-file.js

async function init(): Promise<void> {
  const file = await lazyLoad({
    useCache: false,
    prefetchData: true,
    extension: 'json',
  })
  // .. do some logic
}
