import React from 'react'
import StyledButtons from './CommonComponents/StyledButtons'

const FourButtons = () => {
  return (
    <div className='flex px-32 pt-10'>
      <StyledButtons text={'BEAUTY'} textColor={'#b287fd'} bg={'black'} height={140}/>
      <StyledButtons text={'FASHION'} textColor={'#000000'} bg={'white'} height={140} border={'black'}/>
      <StyledButtons text={'STYLE'} textColor={'white'}
      bg={`url('https://imgur.com/cmPmRm2.png')`} height={140}/>
      <StyledButtons text={'HOBBIES'} textColor={'black'} bg={'#DBFF74'} height={140}/>
    </div>
  )
}

export default FourButtons