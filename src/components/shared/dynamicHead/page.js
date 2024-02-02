import Head from "next/head";

export default function DynamicHead({ title, mtName, mtContent }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={mtName} content={mtContent} />
    </Head>
  );
}
