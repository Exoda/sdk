# SushiSwap SDK Monorepo

## Prerequisites

- Yarn v3 (If unfamilair consult https://yarnpkg.com/getting-started/install to get started and familiarise yourself)
- Node v14 and above

## Build and publish
yarn workspace @exoda/core-sdk build
yarn workspace @exoda/core-sdk publish
yarn workspace @exoda/bentobox-sdk upgrade @exoda/core-sdk
yarn workspace @exoda/bentobox-sdk build
yarn workspace @exoda/bentobox-sdk publish
yarn workspace @exoda/kashi-sdk upgrade @exoda/bentobox-sdk
yarn workspace @exoda/kashi-sdk build
yarn workspace @exoda/kashi-sdk publish
yarn workspace @exoda/limit-order-sdk upgrade @exoda/core-sdk
yarn workspace @exoda/limit-order-sdk build
yarn workspace @exoda/limit-order-sdk publish
yarn workspace @exoda/tines upgrade @exoda/core-sdk
yarn workspace @exoda/tines build
yarn workspace @exoda/tines publish
yarn workspace @exoda/trident-sdk upgrade @exoda/core-sdk @exoda/tines
yarn workspace @exoda/trident-sdk build
yarn workspace @exoda/trident-sdk publish


## Versioning (Canary)

yarn lerna version --no-changelog --no-git-tag-version --preid canary --yes

## Publishing (Canary)

yarn run lerna publish from-package --dist-tag canary --no-git-reset --no-verify-access --preid canary --yes

## Core SDK

### Testing

```sh 
yarn workspace @exoda/core-sdk test
```

### Build

```sh 
yarn workspace @exoda/core-sdk build
```

## Limit Order SDK

### Testing

```sh 
yarn workspace @sushiswap/limit-order-sdk test
```

### Build

```sh 
yarn workspace @sushiswap/limit-order-sdk build
```

## Trident SDK

### Testing

```sh 
yarn workspace @sushiswap/trident-sdk test
```

### Build

```sh 
yarn workspace @sushiswap/trident-sdk build
```

## Tines SDK

### Testing

```sh 
yarn workspace @sushiswap/tines test
```

### Build

```sh 
yarn workspace @sushiswap/tines build
```