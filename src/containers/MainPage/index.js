import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Input
} from "antd";

const { Option } = Select;
const { requestSignIn } = userActions;

class MainPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Form style={{ marginTop: 32 }}>
        <Form.Item
          label="Input"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input defaultValue={"default"} />
        </Form.Item>
        <Form.Item
          label="InputNumber"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item
          label="Slider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item
          label="Switch"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button style={{ marginLeft: 8 }}>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    requestSignIn
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainPage);
