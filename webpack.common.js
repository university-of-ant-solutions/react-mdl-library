const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  externals: [
    {
      'material-components-web': {
        root: 'material-components-web',
        commonjs2: 'material-components-web',
        commonjs: 'material-components-web',
        amd: 'material-components-web',
        umd: 'material-components-web'
      }
    },
    ...[
      'animation',
      'auto-init',
      'base',
      'button',
      'card',
      'checkbox',
      'dialog',
      'drawer',
      'elevation',
      'fab',
      'form-field',
      'grid-list',
      'icon-toggle',
      'layout-grid',
      'linear-progress',
      'list',
      'menu',
      'radio',
      'ripple',
      'rtl',
      'select',
      'selection-control',
      'slider',
      'snackbar',
      'switch',
      'tabs',
      'textfield',
      'theme',
      'toolbar',
      'typography'
    ].map(name => {
      const parts = name.split('-');
      const upperName =
        parts.length > 1 ?
          `${parts[0]}${parts[1].charAt(0).toUpperCase()}${parts[1].slice(1)}` :
          name;
      const moduleName = `@material/${name}/dist/mdc.${upperName}`;

      return {
        [moduleName]: {
          root: moduleName,
          commonjs2: moduleName,
          commonjs: moduleName,
          amd: moduleName,
          umd: moduleName
        }
      };
    }),
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      }
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom'
      }
    },
    {
      classnames: {
        root: 'classNames',
        commonjs2: 'classnames',
        commonjs: 'classnames',
        amd: 'classnames',
        umd: 'classnames'
      }
    },
    {
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
        umd: 'prop-types'
      }
    }
  ],
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
}