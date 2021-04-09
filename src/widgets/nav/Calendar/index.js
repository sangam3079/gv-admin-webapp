import React from 'react'
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;


function Calendar() {
  return (
    <div>
      <Space direction="vertical" size={12}>
      <RangePicker />
    </Space>
    </div>
  )
}

export default Calendar

