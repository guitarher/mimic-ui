import React from 'react'

import Button, { ButtonSize, ButtonType, MimicType } from './components/Button'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Button Type</h1>
      <Button disable>Disabled</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Success}>Success</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link}>Link</Button>
      <Button btnType={ButtonType.Link} disable>
        Disabled Link
      </Button>

      <h1>Button Size</h1>
      <Button size={ButtonSize.Small}>small</Button>
      <Button>Default</Button>
      <Button size={ButtonSize.Large}>Large</Button>

      <h1>Button MimicType</h1>
      <Button btnType={ButtonType.Primary} mimicType={MimicType.None}>
        None
      </Button>
      <Button btnType={ButtonType.Primary} mimicType={MimicType.Outset}>
        Outset
      </Button>
      <Button btnType={ButtonType.Primary} mimicType={MimicType.Inset}>
        Inset
      </Button>
    </div>
  )
}

export default App
