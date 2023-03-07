import Head from "next/head";

interface titleProps {
  title: string;
}

export default function PageHeader({ title }: titleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Find events that might interest you" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
