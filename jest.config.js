module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', 'babel-jest'],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(react-leaflet)/)'],
}
