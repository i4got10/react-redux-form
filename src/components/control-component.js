import { Component, cloneElement, PropTypes } from 'react';

class Control extends Component {
  componentWillMount() {
    const { _onLoad, modelValue } = this.props;

    if (_onLoad) {
      _onLoad(modelValue);
    }
  }

  render() {
    const { control } = this.props;

    return cloneElement(
      control, {
        ...control.props,
        ...this.props,
      });
  }
}

Control.propTypes = {
  control: PropTypes.object,
  _onLoad: PropTypes.func,
  modelValue: PropTypes.any,
};

export default Control;
