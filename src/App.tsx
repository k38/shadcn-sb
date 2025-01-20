import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button'
import { Input } from './Input'
import { FullScreenDialog } from "./FullScreenDialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState<string>()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h3>input: color</h3>
        <label>{color}</label>
        <Input type="color" onChange={_ => {setColor(_.target.value)}} />
        <input type="color" />
      </div>
      
      <div>
        <h3>input: file</h3>
        <Input type="file" />
        <input type="file" />
      </div>
      
      <div>
        <h3>input: file multiple</h3>
        <Input type="file" multiple />
        <input type="file" multiple />
      </div>
      
      <FullScreenDialog trigger={<Button>Open Full Screen Dialog</Button>} title="Full Screen Dialog">
        <div className="space-y-4">
          <p>This is a full-screen dialog. You can add any content here.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl
            nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
          </p>
          <p>Scroll down to see more content and test the scrolling behavior.</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>Paragraph {i + 1}</p>
          ))}
        </div>
      </FullScreenDialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label>Name</label>
              {/* <Label htmlFor="name" className="text-right">
                Name
              </Label> */}
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              {/* <Label htmlFor="username" className="text-right">
                Username
              </Label> */}
              <label>Username</label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App
