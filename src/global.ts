import _ from 'lodash';

export default {
  install(app: unknown) {
    const componentFiles = import.meta.glob(
      './components/base/*.vue', { eager: true }
    );
    
    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = _.upperFirst(
        _.camelCase(path?.split('/').pop().replace(/\.\w+$/, ''))
      );

      app.component(
        `Base${componentName}`, m.default
      );
    })
  },
};