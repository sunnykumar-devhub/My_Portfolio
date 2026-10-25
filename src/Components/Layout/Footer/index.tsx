import { Box, Container, Typography } from '@mui/material';
import SocialLinks from '../../Common/SocialLinks';
import { profile } from '../../../data/profile';
import { colors } from '../../../theme';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}`, py: 4, mt: 'auto' }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
        }}
      >
        <Typography sx={{ color: colors.subtle, fontSize: '0.88rem' }}>
          © {new Date().getFullYear()} {profile.name} · Frontend engineer in Patna, India
        </Typography>
        <Box sx={{ ml: { xs: -1, sm: 0 }, mr: { sm: -1 } }}>
          <SocialLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
