import Button, { ButtonSize, ButtonType, MimicType } from './components/Button'
import { Menu, MenuItem, SubMenu } from './components/Menu'

import './App.css'

function App() {
  return (
    <div className="App">
      <>
        <h1>Button Type</h1>
        <Button disable>Disabled</Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Success} shape="circle">
          Success
        </Button>
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
          <MenuItem>Link1</MenuItem>
          <MenuItem disabled>Link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>

        <h1>Menu Component Vertical</h1>
        <Menu
          onSelect={(i) => {
            alert(i)
          }}
          mode="vertical"
          defaultOpenKeys={['3']}
        >
          <MenuItem>Link1</MenuItem>
          <MenuItem disabled>Link2</MenuItem>
          <MenuItem>Link3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
      </>
    </div>
  )
}

export default App
