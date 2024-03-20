module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '~/assets': './app/assets',
          '~/utils': './app/utils',
          '~/screens': './app/screens',
          '~/styles': './app/styles',
          '~/routes': './app/routes',
          '~/interfaces': './app/interfaces',
          '~/hooks': './app/hooks',
          '~/shared': './app/shared',
          '~/providers': './app/providers',
          '~/helpers': './app/helpers',
          '~/configs': './app/configs',
          '~/components': './app/components',
          '~/navigation': './app/navigation',
          '~/apis': './app/apis',
          '~/constants': './app/constants',
          '~/store': './app/store',
          '~/theme': './app/theme',
        },
      },
    ],
  ],
};
