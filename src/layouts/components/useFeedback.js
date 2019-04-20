import React, {useState} from 'react'
import {Menu, Icon, Button, message, notification, Modal, Drawer, Alert, Divider, Popconfirm} from 'antd'

const {Item} = Menu;

export  default ()=>{

  const onMessage = ()=>{message.info('hello from message')};

  const onNotification = ()=>{notification.open({
    message: 'hello from notification',
    description: '在系统四个角显示通知提醒信息。经常用于以下情况：' +
      '\n' +
      '较为复杂的通知内容。\n' +
      '\n' +
      '带有交互的通知，给出用户下一步的行动点。\n' +
      '\n' +
      '系统主动推送。'
  })};


  const onModal = ()=>{Modal.confirm({
    title: 'hello from modal.confirm',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  })};

  const [visible, setVisible] = useState(false);

  const drawer =
    <Drawer
      title="hello from Drawer"
      placement="right"
      closable={false}
      onClose={()=>{setVisible(false)}}
      width='30%'
      visible={visible}
    >

      <Divider>Drawer</Divider>
      <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>

      <p>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</p>

      <p>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</p>


      <Divider>Alert</Divider>

      <Alert
        message='hello from alert'
        description='当某个页面需要向用户显示警告的信息时。非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。'
        type='success'
        closable
        showIcon
        banner // 会去掉边框
      />

      <Divider>Popconfirm</Divider>

      <p>
        目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
        和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。
      </p>
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <Popconfirm placement="topLeft" title='TopLeft' onConfirm={()=>{console.log('confirm')}} okText="Yes" cancelText="No">
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm placement="top" title='Top' onConfirm={()=>{console.log('confirm')}} okText="Yes" cancelText="No">
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} placement="bottomRight" title='bottomRight' onConfirm={()=>{console.log('confirm')}} okText="Yes" cancelText="No">
          <Button>BR-Icon</Button>
        </Popconfirm>
      </div>

    </Drawer>;


  return {
    drawer,
    feedbackMenus: [
      <Item key='message' onClick={onMessage}> <Icon type='message' /> Message</Item>,
      <Item key='notification' onClick={onNotification}><Icon type='message' /> Notification</Item>,
      <Item key='modal.confirm' onClick={onModal}><Icon type='message' /> Model.confirm</Item>,
      <Item key='Drawer' onClick={()=>{setVisible(true)}}><Icon type='message' /> Drawer</Item>,
      <Item key='Alert' onClick={()=>{setVisible(true)}}><Icon type='message' /> Alert</Item>,
      <Item key='Popconfirm' onClick={()=>{setVisible(true)}}><Icon type='message' /> Popconfirm</Item>,
    ]
  }

}
