import React from 'react';

const Builder = ({ components }) => {
  const componentsList = components.map((component, i) => {
    let { section_type } = component;

    let componentProps = component[section_type];
    let partials = section_type.split('_');

    partials.forEach((partial, i) => {
      return partials[i] = partial.charAt(0).toUpperCase() + partial.slice(1);
    });

    let componentName = partials.join('');

    return {
      name: componentName,
      component: require(`components/${componentName}/${componentName}.js`).default,
      props: componentProps
    };
  });

  return (
    <>
      {
        componentsList.map((constructor, i)=> {
          return (
            <React.Fragment key={ i }>
              { constructor.component(constructor.props) }
            </React.Fragment>
          );
        })
      }
    </>
  )
};

export default Builder;
