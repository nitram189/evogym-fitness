import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: SelectedPage
  handleSelectedPage: (value: SelectedPage) => void
}

export default function Link({page, selectedPage, handleSelectedPage}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => handleSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300`}
      >
        { page }
    </AnchorLink>
  )
}