import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip  } from '@syncfusion/ej2-react-charts';

const SparkLine = ({id, type, data, currentColor, height, width, color}) => {
  return (
    <SparklineComponent 
      id = {id}
      height = {height} 
      width = {width} 
      lineWidth = {1}
      valueType = "Numeric" 
      fill = {color} 
      border = {{color: currentColor, width:2 }} 
      dataSource = {data} 
      xName = "X" yName = "V"
      type = {type}
      toolTipSettings = {{ visible:true, format: '${x}: data ${y}', trackLineSettings:{ visible:true}}}>
        <Inject services = {[SparklineTooltip]}/>
    </SparklineComponent >

    /*<SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{ color: currentColor, width: 2}} dataSource={data} xName="x" yName='y' type={type} >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>*/
  )
}

export default SparkLine