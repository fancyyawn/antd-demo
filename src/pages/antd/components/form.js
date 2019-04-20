import React from 'react'
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Icon,
  Input,
  InputNumber,
  Mention,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
  Upload
} from 'antd';

import TransferDemo from "@/pages/antd/components/transfer";

const { toContentState } = Mention;
const FormItem = Form.Item;



const { Option } = Select;
const { TextArea } = Input;
const { MonthPicker, RangePicker } = DatePicker;


class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const config = {
      rules: [{ type: 'object', required: false, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: false, message: 'Please select time!' }],
    };
    const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];
    const treeData = [{
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [{
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      }, {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      }],
    }, {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
    }];

    return (
      <Card>
        <Form id='form' {...formItemLayout} onSubmit={this.handleSubmit}>

          <Divider>Text</Divider>

          <Form.Item
            label="Input"
          >
            {getFieldDecorator('input', { initialValue: 'China' })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="TextArea"
          >
            {getFieldDecorator('text-area', { initialValue: 'description' })(
              <TextArea rows={4} />
            )}
          </Form.Item>


          <Divider>Number</Divider>

          <Form.Item
            label="InputNumber"
          >
            {getFieldDecorator('input-number', { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
            <span className="ant-form-text"> machines</span>
          </Form.Item>

          <Form.Item
            label="Slider"
          >
            {getFieldDecorator('slider')(
              <Slider marks={{
                0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
              }}
              />
            )}
          </Form.Item>

          <Form.Item
            label="Rate"
          >
            {getFieldDecorator('rate', {
              initialValue: 3.5,
            })(
              <Rate />
            )}
          </Form.Item>

          <Divider>Boolean</Divider>

          <Form.Item
            label="Switch"
          >
            {getFieldDecorator('switch', { valuePropName: 'checked' })(
              <Switch />
            )}
          </Form.Item>

          <Divider>Enum</Divider>

          <Form.Item
            label="Select"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item
            label="Select[multiple]"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item
            label="Radio.Group"
          >
            {getFieldDecorator('radio-group')(
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item
            label="Radio.Button"
          >
            {getFieldDecorator('radio-button')(
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>

          <Form.Item
            label="Checkbox.Group"
          >
            {getFieldDecorator("checkbox-group", {
              initialValue: ["A", "B"],
            })(
              <Checkbox.Group style={{ width: "100%" }}>
                <Row>
                  <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                  <Col span={8}><Checkbox disabled value="B">B</Checkbox></Col>
                  <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                  <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                  <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>

          <Form.Item
            label="Cascader"
          >
            {getFieldDecorator('cascader')(
              <Cascader option={{initialValue: ['zhejiang', 'hangzhou', 'xihu']}} options={options} onChange={(v)=>{console.log(v)}} />
            )}
          </Form.Item>

          <Form.Item
            label="TreeSelect"
          >
            {getFieldDecorator('treeSelect')(
              <TreeSelect
                style={{ width: 300 }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={(e)=>{console.log(e)}}
              />
            )}
          </Form.Item>

          <FormItem
            id="control-mention"
            label="Mention"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            {getFieldDecorator('mention', {
              rules: [
              ],
              initialValue: toContentState('@afc163'),
            })(
              <Mention
                defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
              />
            )}
          </FormItem>

          <Divider>DateTime</Divider>
          <Form.Item
            label="DatePicker"
          >
            {getFieldDecorator('date-picker', config)(
              <DatePicker />
            )}
          </Form.Item>
          <Form.Item
            label="DatePicker[showTime]"
          >
            {getFieldDecorator('date-time-picker', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </Form.Item>
          <Form.Item
            label="MonthPicker"
          >
            {getFieldDecorator('month-picker', config)(
              <MonthPicker />
            )}
          </Form.Item>
          <Form.Item
            label="RangePicker"
          >
            {getFieldDecorator('range-picker', rangeConfig)(
              <RangePicker />
            )}
          </Form.Item>
          <Form.Item
            label="RangePicker[showTime]"
          >
            {getFieldDecorator('range-time-picker', rangeConfig)(
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </Form.Item>
          <Form.Item
            label="TimePicker"
          >
            {getFieldDecorator('time-picker', config)(
              <TimePicker />
            )}
          </Form.Item>


          <Divider>Image</Divider>

          <Form.Item
            label="Upload"
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>

          <Form.Item
            label="Dragger"
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
              )}
            </div>
          </Form.Item>

          <Divider>Others</Divider>

          <Form.Item
            label="Transfer"
          >
            <TransferDemo />
          </Form.Item>


          <Form.Item
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button
              icon='link'
              style={{marginLeft: 10, marginRight: 5}}
              type="default"
              shape='round'
              href='https://ant.design/components/button-cn/'
              target='_blank'
            >
              Reference
            </Button>

            <Button.Group size='small'>
              <Button type="primary">
                <Icon type="left" />Go back
              </Button>
              <Button type="primary">
                Go forward<Icon type="right" />
              </Button>
            </Button.Group>

          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const AntdForm = Form.create({ name: 'validate_other' })(Demo);

export default AntdForm;
