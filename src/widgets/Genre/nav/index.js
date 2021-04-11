import React from 'react'
import { Table, Input} from 'antd'
import './nav.scss'
import AddTracks from './AddButton'
import Calendar from './Calendar'



const { Search } = Input;
const onSearch = value => console.log(value);

function onPanelChange(value, mode) {
  console.log(value, mode);
}



const Table1 = () => {
    return (
      <div className='nav'>
        <div className='nav-search-datepicker'>
          <Search placeholder=" search genre" onSearch={onSearch} style={{ width: 200 }} />
          <Calendar/>
        </div>
        <div className='nav-AddButton'>
          <AddTracks />
        </div>
      </div>
    )
  }
  export default Table1
