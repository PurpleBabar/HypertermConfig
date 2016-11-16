module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'mononoki, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    cursorColor: '#fff',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#34495e',

    // border color (window, tabs)
    borderColor: '#34495e',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: 'x-row {font-weight: 100}',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000',
      '#e74c3c',
      '#2ecc71',
      '#f1c40f',
      '#e67e22',
      '#9b59b6',
      '#1abc9c',
      '#ecf0f1',
      '#95a5a6',
      '#e74c3c',
      '#2ecc71',
      '#f1c40f',
      '#e67e22',
      '#9b59b6',
      '#1abc9c',
      '#ffffff'
    ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
