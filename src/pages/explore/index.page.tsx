import { ReactNode, useState } from 'react'
import { PageTitle } from '@/src/components/PageTitle'
import {
  BooksGrid,
  ExploreContainer,
  TagsWrapper,
  TagContainer,
} from './styles'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { SearchInput } from '@/src/components/SearchInput'
import { BookCardColumn } from '@/src/components/BookCardColumn'
import { ComponentProps } from '@stitches/react'
import { useBooks } from '@/src/hooks/useBooks'
import { useCategories } from '@/src/hooks/useCategories'

const Explore = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const { data: books } = useBooks(selectedCategory)
  const { data: categories } = useCategories()

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explore" icon={<Binoculars size={32} />} />
        <SearchInput
          placeholder="Search book or author"
          icon={<MagnifyingGlass size={20} />}
          css={{
            maxWidth: 433,
            height: 48,
          }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsWrapper>
        <Tag
          active={selectedCategory === ''}
          onClick={() => setSelectedCategory('')}
        >
          All
        </Tag>
        {categories?.map((category) => (
          <Tag
            key={category?.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category?.name}
          </Tag>
        ))}
      </TagsWrapper>
      <BooksGrid>
        {filteredBooks?.map((book) => (
          <BookCardColumn key={book.id} book={book} imgSize="lg" isCompact />
        ))}
      </BooksGrid>
    </ExploreContainer>
  )
}

export default Explore

type TagProps = ComponentProps<typeof TagContainer> & {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <TagContainer active={active} {...props}>
      {children}
    </TagContainer>
  )
}
