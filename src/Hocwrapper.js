import React from 'react';
import axios from 'axios';

const Hocwrapper = WrappedHocComponent => {
  const globalFunctionApiHandler = async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      throw new Error(error.res.data.message || 'Something went wrong...');
    }
  };

  return props => <WrappedHocComponent {...props} globalFunctionApiHandler={globalFunctionApiHandler}/>;
};

export default Hocwrapper;
