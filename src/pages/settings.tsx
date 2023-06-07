import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import prisma from '../lib/prisma'
import { GetServerSideProps } from 'next'

interface ServerInformationProps {
  serverInformation: {
    ip: String;
  };
}

const Page = (props: ServerInformationProps) => (
  <>
    <Head>
      <title>
        Settings | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            { (props.serverInformation.ip)}
          </Typography>
          
        </Box>
      </Container>
    </Box>
  </>
);

/*
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
*/

export const getServerSideProps: GetServerSideProps = async () => {
  const serverInformation = await prisma.serverInformation.findFirst()

  console.log(serverInformation)
  return {
    props: { serverInformation },
  }
}


export default Page;
