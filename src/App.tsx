import Button, { ButtonSize, ButtonType, MimicType } from './components/Button'
import { Menu, MenuItem } from './components/Menu'

import './App.css'

function App() {
  return (
    <div className="App">
      <>
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
      </>

      <>
        <h1>Menu Component</h1>
        <Menu
          onSelect={(i) => {
            alert(i)
          }}
        >
          <MenuItem index={0}>Link1</MenuItem>
          <MenuItem index={1} disabled>
            Link2
          </MenuItem>
          <MenuItem index={2}>Link3</MenuItem>
        </Menu>

        <h1>Menu Component Vertical</h1>
        <Menu
          onSelect={(i) => {
            alert(i)
          }}
          mode="vertical"
        >
          <MenuItem index={0}>Link1</MenuItem>
          <MenuItem index={1} disabled>
            Link2
          </MenuItem>
          <MenuItem index={2}>Link3</MenuItem>
        </Menu>
      </>
    </div>
  )
}

export default App
