import React from 'react'
import { useState } from 'react'
import {
  Flex,
  Button,
  IconButton,
  Link,

} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import '../styles/Navbar.css'

interface NavbarProps {
  isHome: boolean
  isJMT: boolean
  isLogin: boolean
  isApp: boolean
}

export const Navbar = (props: NavbarProps) => {
  const [display, changeDisplay] = useState('none')

  return (
    <Flex maxWidth='100%' overflowX='hidden'>
      <Flex className='nav' backgroundColor='gray.100'>
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']}>
          {props.isHome ? (
            <Link href='/' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Home'
                my={5}
                w='100%'
                fontSize='lg'
                color='#ff7e20'
              >
                Home
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {props.isJMT ? (
            <Link href='/jmt' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Jmt'
                my={5}
                fontSize='lg'
                w='100%'
                color='#ff7e20'
              >
                JMT
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          {props.isApp ? (
            <Link href='/application' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Jmt'
                my={5}
                fontSize='lg'
                w='100%'
                color='#ff7e20'
              >
                Application
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          {props.isLogin ? (
            <Link href='/login' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Jmt'
                my={5}
                fontSize='lg'
                w='100%'
                color='#ff7e20'
              >
                Login
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label='Open Menu'
          size='lg'
          mr={2}
          color='#ff7e20'
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor='gray.50'
        zIndex={20}
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflowY='auto'
        flexDir='column'
      >
        <Flex justify='flex-end'>
          <IconButton
            mt={2}
            mr={2}
            aria-label='Open Menu'
            size='lg'
            color='#ff7e20'
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir='column' align='center' color='#ff7e20'>
          {props.isHome ? (
            <Link href='/' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Home'
                my={5}
                w='100%'
                fontSize='lg'
                color='#ff7e20'
              >
                Home
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {props.isJMT ? (
            <Link href='/jmt' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Home'
                my={5}
                w='100%'
                fontSize='lg'
                color='#ff7e20'
              >
                JMT
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          {props.isApp ? (
            <Link href='/application' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Home'
                my={5}
                w='100%'
                fontSize='lg'
                color='#ff7e20'
              >
                Application
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          {props.isLogin ? (
            <Link href='/login' passHref>
              <Button
                as='a'
                variant='ghost'
                aria-label='Home'
                my={5}
                w='100%'
                fontSize='lg'
                color='#ff7e20'
              >
                Login
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
