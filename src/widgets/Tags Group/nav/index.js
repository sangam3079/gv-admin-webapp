import React from 'react'
import { Table, Input} from 'antd'
import './nav.scss'
import AddButton from './AddButton'



const { Search } = Input;
const onSearch = value => console.log(value);

function onPanelChange(value, mode) {
  console.log(value, mode);
}



const Table1 = () => {
    return (
      <div className='nav'>
        <div className='nav-search-datepicker'>
          <Search placeholder=" search tags group" onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <div className='nav-AddButton'>
          <AddButton />
        </div>
      </div>
    )
  }
  export default Table1
