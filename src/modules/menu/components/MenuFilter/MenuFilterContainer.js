import { connect } from 'react-redux';

import MenuFilterView from './MenuFilterView';

import { getFilter } from '../../menuSelectors';
import { changeFilter } from '../../menuActions';

const mapProps = state => ({
  items: getFilter(state),
});

const mapDispatch = {
  onChange: changeFilter,
};

export default connect(
  mapProps,
  mapDispatch,
)(MenuFilterView);
