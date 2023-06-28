import { Button, Icon, Link } from '@chakra-ui/react'

const DocButton = ({ children, href, icon, ...rest }) => (
  <Link href={href} isExternal>
    <Button
      rightIcon={
        icon ? <Icon as={icon} boxSize='16rem' hidden={!icon} /> : null
      }
      iconSpacing='10rem'
      borderRadius='4px'
      fontSize='xl'
      size='lg'
      {...rest}
    >
      {children}
    </Button>
  </Link>
)

export default DocButton
