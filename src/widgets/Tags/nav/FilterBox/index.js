import React from 'react'
import { Select } from 'antd';

const { Option } = Select;


function FilterBox() {
  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Filter By Tag Group"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option value="1">Not Identified</Option>
        <Option value="2">Closed</Option>
        <Option value="3">Communicated</Option>
        <Option value="4">Identified</Option>
        <Option value="5">Resolved</Option>
        <Option value="6">Cancelled</Option>
      </Select>
    </div>
  )
}

export default FilterBox


