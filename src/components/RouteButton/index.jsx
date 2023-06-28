import Link from 'next/link'
import { Button } from '@chakra-ui/react'

const RouteButton = ({ children, href, ...rest }) => (
  <Link href={href} passHref>
    <Button borderRadius='4px' fontSize='xl' size='lg' {...rest}>
      {children}
    </Button>
  </Link>
)

export default RouteButton
