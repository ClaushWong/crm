import Head from "next/head";

type PortalLayoutProps = {
  children: any;
};

export const PortalLayout = (props: PortalLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>CRM - Test</title>
        <meta name="description" content="CRM - Testing Phase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer>Powered by Next.js (Developed by Claush)</footer>
    </>
  );
};
