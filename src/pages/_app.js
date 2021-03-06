import React from 'react';
import PropTypes from 'prop-types';
import 'sass-reset';
import {WithStyledComponents} from '../app/components/with-styled-components/with-styled-components';

const propTypes = {
  'Component': PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  'pageProps': PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  'err': PropTypes.any,
};

const defaultProps = {
  'err': undefined,
};

/**
 * @param {object} props component props
 * @param {Function} props.Component next.js component
 * @param {object} props.pageProps next.js props
 * @param {*} props.err next.js errors
 * @returns {React.ReactElement} react component
 */
export default function MyApp({Component, pageProps, err}) {
  // useApp()

  return (
    <>
      <WithStyledComponents>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </WithStyledComponents>
    </>
  );
}

MyApp.propTypes = propTypes;

MyApp.defaultProps = defaultProps;
