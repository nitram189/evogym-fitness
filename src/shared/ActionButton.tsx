import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  handleSelectedPage: (value: SelectedPage) => void
}

export const ActionButton = ({ children, handleSelectedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => handleSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      >
       { children }
    </AnchorLink>
  )
}