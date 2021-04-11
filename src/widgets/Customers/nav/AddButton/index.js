import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'

const ButtonComponent = ({ data }) => {
  return (
    <Link to="customers/addNewCustomer" >
      <Button type={data.type} className="btn-with-addon">
        <span className="btn-addon">
          <i className={`btn-addon-icon ${data.icon}`} />
        </span>
        {data.title}
      </Button>
    </Link>
    
  )
}
ButtonComponent.defaultProps = {
  data: {
    title: 'new customers',
    icon: 'fe fe-plus-circle',
    type: 'primary',
  },
}

export default ButtonComponent
