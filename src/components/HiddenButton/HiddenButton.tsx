import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

function HiddenButton({ children }:{children: string}) {
  return <VisuallyHidden>
    <button type="submit">{children}</button>
  </VisuallyHidden>
}

export default HiddenButton
