import React from 'react'

import { Button,Text } from 'medukaui'
import 'medukaui/dist/index.css'

const App = () => {
  return(
    <div>
      <h1>Buttons</h1>
      <Button text='Primary' type='primary' />
      <Button text='Secondary' type='secondrary' />
      <Button text='Success' type='success' />
      <Button text='Danger' type='danger' />
      <Button text='Warning' type='warning' />
      <Button text='Info' type='info' />
      <Button text='Dark' type='dark' />

      <br />
      <hr />
      <Button text='Text Button' type='text' />

      <hr />

      <Button text='Link Button' type='link' />
      <br />

      <hr />
      <Text text='There are - primary, secondary, success, danger, warning, info, dark - button, text - button and , link - button in medukaui  @mehmetdurankaya' />
    </div>
  )
}

export default App
