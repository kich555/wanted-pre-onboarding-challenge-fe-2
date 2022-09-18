import { useTheme } from '@emotion/react';
import { Image, Box, Container, Divider, Modal, Title, ActionIcon, Badge } from '@mantine/core';
import { Link } from '@remix-run/react';

export default function AuthModal({ children, open }) {
  const theme = useTheme();

  return (
    <Modal
      transition="rotate-left"
      transitionDuration={300}
      transitionTimingFunction="ease"
      size="md"
      centered
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.35}
      overlayBlur={1}
      withCloseButton={false}
      opened={open}
    >
      <Container>
        <Box>
          <Box sx={{ position: 'relative' }}>
            <Title align="center">Login</Title>
            <ActionIcon component={Link} to="/" size={32} sx={{ position: 'absolute', right: 0, top: 8 }}>
              <Image src="https://img.icons8.com/material-rounded/48/000000/left.png" />
            </ActionIcon>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={12}>
            <Badge component={Link} to="login" size="lg">
              Login
            </Badge>
            <Badge component={Link} to="register" size="lg" color="teal" ml={8}>
              Register
            </Badge>
          </Box>
        </Box>
        <Divider mt={24} />
        <Box align="center" mt={24}>
          {children}
        </Box>
      </Container>
    </Modal>
  );
}
