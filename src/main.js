import { mount } from 'svelte'
import App from './MyComponent.svelte'

const app = mount(App, {
    target: document.getElementById('app'),
})

export default app