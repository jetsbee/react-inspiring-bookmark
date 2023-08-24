# Inspiring Bookmark (Monorepo, Next.js, Expo)

- Based on https://github.com/vercel/turbo/tree/5ff0ab2720708924ea3fcb50798f388a25c02fae/examples/with-react-native-web

## Environment
- Node.js
- Yarn
- Bash-like shell

## Set ".env.local" file
```
# Create ".env.local" file
cp .env.example .env.local

# Add secret values into ".env.local" file!
```

## Scripts to run in dev

```sh
# for install deps
yarn install

# for web and BFF
yarn next

# for storybook
yarn storybook

# for iOS
# First, set up the iOS simulator (MacOS Only) ref. https://docs.expo.dev/workflow/ios-simulator/
yarn ios

# for android
# First, set up the Android Emulator ref. https://docs.expo.dev/workflow/android-studio-emulator/
yarn android
```

## Temporary fix if android script is not working

- Change distributionUrl value as below in "apps/native/android/gradle/wrapper/gradle-wrapper.properties"

```
distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.2-all.zip

# ref. https://github.com/react-native-community/cli/issues/1719#issuecomment-1399202729
```

## Temporary fix zombie processes issue with next.js

- ref 1. https://github.com/vercel/next.js/issues/45508#issuecomment-1646657899
- ref 2. https://github.com/vercel/next.js/issues/45508#issuecomment-1653226340
- ref 3. https://github.com/vercel/next.js/issues/45508#issuecomment-1560568292

```sh
# Kill the next.js zombie processes
yarn workspace web kill-zombies
# or
yarn kill:zombies # clear next.js and storybook processes
```
